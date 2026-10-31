---
title: How it works
description: A high-level look at how the Saif runtime works.
---

GTA SA for PC is originally a 32-bit Windows program. It was built for Intel processors, Windows and DirectX, none of which a Mac with Apple Silicon can run directly.

Common workarounds such as Wine, CrossOver or a virtual machine, translate or emulate large parts of Windows. They work in many cases, but they are generic, can be clumsy to set up and do not deliver native performance.

## Saif's approach

Saif re-implements only what GTA SA needs and runs it natively. Because it is purpose built, the CPU and graphics paths can be tuned directly.

Saif has three main parts:

-   **CPU: a custom ARM64 JIT**  
    GTA's x86 machine code is translated on the fly into native Apple Silicon (ARM64) machine code by a custom just-in-time (JIT) compiler. The game's code then runs directly on your Mac's processor.
-   **Graphics: Direct3D 9 on Metal**  
    The game draws with Direct3D 9. Saif implements the parts of Direct3D 9 the game uses directly on top of Metal, Apple's graphics API, instead of going through additional translation layers.
-   **Audio and input: native macOS APIs**  
    The Windows APIs the game uses for sound and controls, such as DirectSound and DirectInput, are handled with CoreAudio and SDL.