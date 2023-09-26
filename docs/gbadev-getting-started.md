# Getting started in GBAdev

Welcome to GBAdev! If you have decided to try to develop something for the GBA and you're
completely lost, this guide is for you. Note that this will only mention the most popular and
recommended options. Check [gbadev resources](https://gbadev.net/resources.html) for a long list
about many relevant toolkits and libraries you can use!

## Developing your game

Broadly speaking there are 3 paths you can take to get started. Which one you
choose depends on your previous knowledge about programming, and how much of
your game you want to create yourself.

### High level development

This is ideal if you just want to get a game done, without worrying too much about how the hardware
works. Unfortunately, there is nothing similar to PC engines like Unity, Godot, and the GBA doesn't
support languages like C#, Python or Jave.

Our recommendation is to use [butano](https://github.com/GValiente/butano), a C++ library that
simplifies GBA development a lot. It has become quite popular, so you will easily get support for
it. You should follow the [getting started](https://gvaliente.github.io/butano/getting_started.html)
instructions. It comes with a lot of examples of how to use all its features, check them out!

### Low level development

If you're comfortable writing to I/O registers and reading low level documentation like
[GBATEK](https://www.problemkaputt.de/gbatek.htm) there are a few options:

#### C and C++

The most popular option is to use devkitARM and [libtonc](https://github.com/gbadev-org/libtonc).
Follow the instructions in the [getting started guide](https://devkitpro.org/wiki/Getting_Started)
to install devkitARM and check the [examples](https://github.com/gbadev-org/libtonc-examples) and
the [template](https://github.com/gbadev-org/libtonc-template). Once you have verified that you can
compile the examples read the tutorial [Tonc](https://gbadev.net/tonc/toc.html) (by the author of
libtonc) to understand how GBA development goes.

libgba is another library provided by devkitPro, but it isn't as recommended as using libtonc.

If you don't want to use devkitARM, there are some alternatives. For example, check
[gba-toolchain](https://github.com/felixjones/gba-toolchain), which also supports libtonc and
libgba.

If you want to use a completely different library than libtonc or libgba, you can try
[sdk-seven](https://github.com/LunarLambda/sdk-seven).

Some tutorials out there mention [DevKit Advance](https://devkitadv.sourceforge.net/). This is a
very outdated toolchain (the last release was in 2003!), don't use it! Use devkitARM instead, which
is updated regularly.

#### Assembly

Even though you don't need to use assembly to develop for GBA, it is still an option, and you will
need it if you're creating things like a 3D game, or an audio mixer.

All of the C and C++ options also support assembly, so you can use them without any issues. 

There is also [gvasm](https://github.com/velipso/gvasm) if you want an option that only focuses on
assembly.

#### Nim

Check [Natu](https://github.com/exelotl/natu). It provides a library to write games and tooling to
convert assets.

#### Rust

Check the [agb library](https://github.com/agbrs/agb).

### Development from scratch

If you don't want to use any libraries to create your game, it's possible to ignore all of them and
create everything yourself. This is only recommended if you're very comfortable with low level
development. It will be hard to get other people to help you if you're not using any of the popular
libraries that other people use.

One example of how to build a GBA ROM from scratch with a regular ARM GCC toolchain can be found
in [GBA bootstrap](https://github.com/AntonioND/gba-bootstrap).

## Tutorials

[Tonc](https://gbadev.net/tonc/toc.html) is currently the best tutorial for GBA development.

## Emulation

The recommended emulators are:

- [NanoBoyAdvance](https://github.com/nba-emu/NanoBoyAdvance): The most accurate emulator at the
  moment. However, it doesn't have debugging options.

- [mGBA](https://mgba.io/): Very accurate, and it is possible to connect the GNU debugger (GDB) to
  it and debug your games as if they were regular PC programs!

- [no$gba](https://problemkaputt.de/gba.htm): Not as accurate as the other two, but it has an
  [incredible debugger](https://problemkaputt.de/gbapics.htm).

Note: VisualBoyAdvance is a very outdated emulator, and not very accurate. Prefer mGBA over VBA.

## Community

Join us in discord! This [link](https://gbadev.net/) has an up-to-date invitation to the gbadev
discord server were most of the GBA devs hang out nowadays. There is also a
[forum](https://forum.gbadev.net/), if you prefer that.
