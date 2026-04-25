# Gimbus

**CAN bus gimbal motor driver for research**

<!-- status: In use · Developed for Future Interfaces Group -->
<!-- tags: ESP32-S3, DRV8316, FOC, CAN Bus, USB PD, Research, LAVAL Prize -->

![Gimbus board render](images/gimbus-render.png)

The Gimbus is a condensed, specialized version of the MotorGo Mini — a single-channel gimbal motor driver that mounts on the back of a gimbal and enables CAN bus communication between multiple boards. Developed for the **Future Interfaces Group**, a research lab whose work recently won the **LAVAL Prize** in Europe.

## What It Does

Each Gimbus board controls one gimbal motor and communicates with other Gimbus boards over CAN bus (experimentally routed through USB-C sideband signals). This lets you build multi-axis gimbal systems where each joint is independently controlled but coordinated through a shared bus — daisy-chained with standard USB-C cables.

## Why It Matters

Research groups need hardware that **gets out of the way**. The Gimbus lets researchers focus on their interaction designs and experiments, not on motor driver debugging. The CAN bus architecture means you can scale from one axis to many without redesigning anything.

## Key Specs

- ESP32-S3 with WiFi + Bluetooth
- DRV8316 TI motor controller with low-side current sense
- Integrated MT6701 magnetic encoder on back of board
- 3A continuous / 8A peak FOC motor control
- CAN bus over USB-C sideband signals (experimental)
- USB PD x2 with power ORing to protect power sources
- 6-pin JST PH input: 5V–20V
- RGB LED indicator
- Compact form factor (mounts on gimbal back)
- Developed for Future Interfaces Group
- Associated project won the LAVAL Prize (Europe)

![Gimbus exploded view with motor](images/gimbus-exploded.png)

[View schematics and PCB in KiCanvas](https://kicanvas.org/?repo=https%3A%2F%2Fgithub.com%2FEvery-Flavor-Robotics%2Fmotorgo-mini-hardware%2Ftree%2Fmotorgo-gimbus%2Fmotorgo-gimbus%2Fgimbus-kicad%2Fmg-gimbus)
