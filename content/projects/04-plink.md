# Plink

**4-channel DC motor driver Pi HAT — used at CMU**

<!-- status: In production · Used in CMU coursework -->
<!-- tags: ESP32-S3, DC Motor, Pi HAT, IMU, Education, CMU -->

![Plink board demo](images/plink-demo.gif)

The Plink is a 4-channel DC motor driver in the Pi HAT form factor, designed specifically for beginner roboticists. It's powered by an ESP32-S3 with WiFi and Bluetooth, and is used by Carnegie Mellon University's Introduction to Robotics class to teach robotics fundamentals.

## What It Does

A clean, reliable 4-channel DC motor driver that sits on top of a Raspberry Pi. Students plug in motors, write Python, and focus on learning robotics — not debugging hardware. The on-board buck converter powers the Pi directly from a single barrel jack, so there's one cable to plug in and you're running.

## Why It Matters

This is the philosophy made real in a classroom. When CMU's intro robotics students use the Plink, they're not fighting wiring or power issues. They're learning **control theory, kinematics, and sensor fusion** — the things that actually matter.

The fact that a university adopted this board for teaching validates the core idea: hardware should lower barriers, not create them.

## Web Control

The Plink also has a companion [web control app](https://github.com/Every-Flavor-Robotics/plink-web-control) — a Vue.js frontend with a virtual joystick that talks to the ESP32 over WebSockets. Students connect their phones to the same WiFi, open a browser, and drive their robot car with a touchscreen joystick at 20Hz. No app install, no pairing — just a URL. It's designed for workshop environments where dozens of cars run simultaneously on a single router.

## Key Specs

- ESP32-S3 with WiFi and Bluetooth connectivity
- 4 bidirectional DC motor channels, up to 2A each
- 4 encoder ports (5-pin JST) for closed-loop feedback on each motor
- 9-DOF IMU (LSM6DSOTR-C accel/gyro + LIS3MDLTR magnetometer)
- DC barrel jack input: 6–17V
- On-board buck converter: 5.1V up to 6A (enough to power RPi 4 and 5)
- USB-C programming, Arduino IDE compatible
- 2x Qwiic ports for easy sensor integration
- Full GPIO breakout on 40-pin header + full RPi GPIO passthrough
- Pi HAT form factor (also operates standalone)
- Used in CMU's Introduction to Robotics course

![Plink dimensions](images/plink-dimensions.png)

![Plink 3D render](images/plink-3d.png)

[View schematics and PCB in KiCanvas](https://kicanvas.org/?repo=https%3A%2F%2Fgithub.com%2FEvery-Flavor-Robotics%2Fmotorgo-plink-hardware%2Ftree%2Fmain%2Fmotorgo_plink)
