---
title: Introduction to Saif mod support
description: Why some GTA San Andreas mods work in Saif and others don't yet.
sidebar:
  label: Introduction
---

Saif re-implements only the Windows features the base game needs. Mods that just change content, like models and textures, can work, but mods that run their own code often rely on Windows features Saif doesn't implement (yet). Each one has to be added to Saif by hand and tested, so mod support grows step by step. 

## What mods are supported?
See [Supported mods](/docs/modding/supported-mods/).

## How do I install supported mods with Saif?
Installing GTA SA mods with Saif is exactly the same as on Windows. One important difference is that **you do not need an ASI-loader!** Saif natively loads supported mods without the need for an ASI-loader.

Example of installing [SilentPatch](https://github.com/CookiePLMonster/SilentPatch):
1. Download and unarchive SilentPatch → this gives you `SilentPatchSA.asi` and `SilentPatchSA.ini`
2. Drag and drop both files to your GTA SA game folder.
3. You do not need to install ASI-loader; mods are natively loaded by Saif itself.
4. Select your modded game folder in Saif: supported mods are automatically detected.
   ![Supported mod being detected in Saif launcher](/assets/docs/install-supported-mod.png)
5. Launch the game and enjoy! 🚀

:::note[Note on installing mods]
GTA San Andreas mods are (unfortunately) developed in different ways, and thus their installation method may differ. Some require you to drop an ASI-file in your game directory, and some require more setup. Please refer to the mod's original setup guide.
:::

## Can support for `my mod` be added?
Maybe, [open an issue](https://github.com/saif-runtime/saif-runtime/issues/new/choose) to tell us which mod you want next.

:::tip[Help us support more mods]
Adding support for a mod means implementing and testing the Windows features it relies on, by hand. That takes a lot of time, and Saif is built and maintained in spare time. If you'd like to see more mod support, please [consider supporting the project](https://ko-fi.com/musa11971) ❤️.
:::