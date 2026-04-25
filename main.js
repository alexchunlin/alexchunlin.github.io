/* ─────────────────────────────────────────────────────────────
   Alex Chunlin Portfolio — main.js
   Loads and renders Markdown content via marked.js
   ───────────────────────────────────────────────────────────── */

// Configure marked.js: GFM on, smart line breaks
marked.setOptions({
  gfm: true,
  breaks: false,
});

// ── Project manifest ─────────────────────────────────────────
const PROJECT_FILES = [
  'content/projects/01-motorgo-mini.md',
  'content/projects/02-motorgo-core.md',
  'content/projects/03-motorgo-axis.md',
  'content/projects/04-plink.md',
  'content/projects/05-gimbus.md',
];

// ── Bootstrap ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  initNav();
  await Promise.all([
    loadAbout(),
    loadProjects(),
  ]);
  observeGallery();
});

// ── Navigation: glassmorphism on scroll ──────────────────────
function initNav() {
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 16);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── About section ────────────────────────────────────────────
async function loadAbout() {
  const el = document.getElementById('about-content');
  try {
    const res = await fetch('content/about.md');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const raw = await res.text();
    el.innerHTML = marked.parse(raw);
    el.classList.remove('loading');
  } catch (err) {
    el.innerHTML = `<p style="color:var(--text-3)">Failed to load about content.</p>`;
    console.error('[about] fetch error:', err);
  }
}

// ── Projects section ─────────────────────────────────────────
async function loadProjects() {
  const container = document.getElementById('projects-container');

  const fetches = PROJECT_FILES.map((file, index) =>
    fetch(file)
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.text(); })
      .then(text => ({ text, index, file }))
      .catch(err => ({ error: err, index, file }))
  );

  const results = await Promise.all(fetches);

  container.innerHTML = results
    .map(result => renderProjectEntry(result))
    .join('');

  // Tag KiCanvas links with a special class for button styling
  container.querySelectorAll('.project-card-body a').forEach(a => {
    if (a.textContent.includes('KiCanvas')) {
      a.classList.add('kicanvas-link');
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener');
    }
  });

  // Observe cards for scroll-in animation
  observeCards();
}

// ── Metadata extraction ──────────────────────────────────────

function extractStatus(raw) {
  const m = raw.match(/<!--\s*status:\s*(.*?)\s*-->/s);
  return m ? m[1].trim() : null;
}

function extractTags(raw) {
  const m = raw.match(/<!--\s*tags:\s*(.*?)\s*-->/s);
  if (!m) return [];
  return m[1].split(',').map(t => t.trim()).filter(Boolean);
}

function extractTitle(raw) {
  const m = raw.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : 'Untitled';
}

function extractSubtitle(raw) {
  // Find the first line that is ONLY a bold phrase: **...**
  const m = raw.match(/^\*\*([^*\n]+)\*\*\s*$/m);
  return m ? m[1].trim() : '';
}

// Extract the first image (used as hero image on the card)
function extractHeroImage(raw) {
  // Match the first ![alt](url) that appears after the title/subtitle/comments block
  const m = raw.match(/^!\[([^\]]*)\]\(([^)]+)\)\s*$/m);
  return m ? { alt: m[1], src: m[2] } : null;
}

// Strip title, subtitle line, HTML comments, and first image — then parse
function extractBodyHtml(raw) {
  let cleaned = raw
    .replace(/<!--[\s\S]*?-->/g, '')         // remove comments
    .replace(/^#\s+.+$/m, '')                // remove first h1
    .replace(/^\*\*[^*\n]+\*\*\s*$/m, '');  // remove bold subtitle

  // Remove the first image line (it becomes the hero image)
  cleaned = cleaned.replace(/^!\[[^\]]*\]\([^)]+\)\s*$/m, '');

  return marked.parse(cleaned.trim());
}

// ── Status badge helper ──────────────────────────────────────

function statusClass(status) {
  if (!status) return 'status-default';
  const s = status.toLowerCase();
  if (s.includes('shipped') || s.includes('funded')) return 'status-shipped';
  if (s.includes('production') || s.includes('in use') || s.includes('developed')) return 'status-active';
  return 'status-default';
}

// ── Card renderer ────────────────────────────────────────────

function renderProjectEntry({ text, index, file, error }) {
  const num = String(index + 1).padStart(2, '0');

  if (error) {
    return `
      <div class="project-entry">
        <div class="project-card" style="padding:20px 28px;color:var(--text-3)">
          Failed to load ${file}
        </div>
      </div>`;
  }

  const status    = extractStatus(text);
  const tags      = extractTags(text);
  const title     = extractTitle(text);
  const subtitle  = extractSubtitle(text);
  const heroImg   = extractHeroImage(text);
  const bodyHtml  = extractBodyHtml(text);
  const cls       = statusClass(status);

  const badgeHtml = status
    ? `<span class="status-badge ${cls}">${status}</span>`
    : '';

  const tagsHtml = tags.length
    ? `<div class="project-tags">${tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>`
    : '';

  const subtitleHtml = subtitle
    ? `<p class="project-subtitle">${subtitle}</p>`
    : '';

  const heroHtml = heroImg
    ? `<img class="project-hero-img" src="${heroImg.src}" alt="${heroImg.alt}" loading="lazy" />`
    : '';

  return `
    <div class="project-entry">
      <div class="project-card">
        ${heroHtml}
        <div class="project-card-header">
          <span class="project-number">${num}</span>
          <div class="project-header-content">
            <div class="project-title-row">
              <h3 class="project-title">${title}</h3>
              ${badgeHtml}
            </div>
            ${subtitleHtml}
          </div>
        </div>
        <div class="project-card-body">
          ${bodyHtml}
        </div>
        ${tagsHtml}
      </div>
    </div>
  `;
}

// ── Scroll-triggered gallery reveal ──────────────────────────

function observeGallery() {
  const items = document.querySelectorAll('.gallery-item');
  if (!items.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  items.forEach((item, i) => {
    item.style.transitionDelay = `${i * 0.06}s`;
    io.observe(item);
  });
}

// ── Scroll-triggered card reveal ─────────────────────────────

function observeCards() {
  const cards = document.querySelectorAll('.project-card');
  if (!cards.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  cards.forEach(card => io.observe(card));
}
