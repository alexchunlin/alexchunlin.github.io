# MotorGo Axis

**Dual BLDC motor controller + Raspberry Pi HAT**

<!-- status: Shipped -->
<!-- tags: Dual BLDC, Pi HAT, ESP32, FOC, RPi 4/5 -->

![MotorGo Axis 3D render](images/axis-3d.png)

The Axis is the upgraded Core — a dual BLDC motor controller on a single board that also works as a Raspberry Pi HAT for the RPi 4 and 5. It bridges the gap between standalone microcontroller projects and full Linux-powered robotics.

## What It Does

Two independent BLDC motor control channels with field-oriented control (FOC), mountable directly on a Raspberry Pi. Run your high-level logic in Python on the Pi while the Axis handles real-time motor control. Already capable of making 2-axis gantry robots quite easily.

## Why It Matters

This is where the "no cliffs" philosophy really shows. Start with Arduino-style code on the ESP32. When you're ready, plug it onto a Pi and write Python. Same board, same motors, new capabilities — no rewiring, no starting over.

## Key Specs

- ESP32 microcontroller
- 2 independent BLDC motor channels with FOC
- Raspberry Pi HAT form factor (RPi 4 and 5 compatible)
- On-board IMU
- Integrated power system
- Multiple connector options for motors and sensors
- Seamless Pi integration for high-level control

## Demo

Check out this 2-axis gantry robot project built while developing the Axis: [YouTube Demo](https://www.youtube.com/watch?v=p4cUWCG7fM4)

![MotorGo Axis dimensions](images/axis-dimensions.png)

[View schematics and PCB in KiCanvas](https://kicanvas.org/?repo=https%3A%2F%2Fgithub.com%2FEvery-Flavor-Robotics%2Fmotorgo_axis_hardware%2Ftree%2Fmain%2Fmotorgo_core)
