# MotorGo Mini

**Dual-channel brushless motor controller — Kickstarter funded**

<!-- status: Shipped · Kickstarter funded -->
<!-- tags: ESP32, Dual BLDC, FOC, Qwiic, Open Source -->

![MotorGo Mini board render](images/mini-render.png)

The MotorGo Mini is an ESP32-based dual-channel brushless motor controller with field-oriented control (FOC) — all on a single compact board. It launched as a small Kickstarter that combined motor control, power regulation, and wireless connectivity into one beginner-friendly package.

## What It Does

A full robot platform out of the box. Plug in two BLDC motors and sensors, flash some code over USB-C, and you have a self-balancing robot or a two-axis gimbal. No breadboards, no wiring nightmares, no "step 1: spend 3 hours on power electronics."

## Why It Matters

This was the first board I designed with the philosophy that **the hardware itself should teach you**. The form factor invites experimentation — connect different sensors via Qwiic, try different control algorithms, break things and learn.

## Key Specs

- ESP32 microcontroller with native WiFi + Bluetooth
- Dual-channel BLDC motor control with FOC
- USB-C programming and serial
- 2x Qwiic/I2C connectors for sensor integration
- 8 GPIO broken out to standard pin headers
- On-board 5V and 3.3V regulation
- M3 mounting holes
- 4-layer PCB, LCSC-centered BOM
- Arduino compatible
- Fully open source — BOM, copper, and code

![MotorGo Mini PCB layout](images/mini-pcb.png)

![MotorGo Mini assembled](images/mini-assembled.png)

[View schematics and PCB in KiCanvas](https://kicanvas.org/?repo=https%3A%2F%2Fgithub.com%2FEvery-Flavor-Robotics%2Fmotorgo-mini-hardware%2Ftree%2Fmain%2Fmini_motor_go%2FV1_rev3)
