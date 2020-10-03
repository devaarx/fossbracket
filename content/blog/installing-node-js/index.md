---
title: How to install Node.js on your computer?
date: '2020-10-03T20:27:00.121Z'
category: 'Guides'
tags: ['Node', 'JavaScript']
featuredImage: './node-js.jpg'
---

> Node.js is an open-source, cross-platform, back end, JavaScript runtime environment that executes JavaScript code outside a web browser.

In this post we are going to take a look on how to install Node.js along with NPM (Node Package Manager) on Linux, Mac OS or Windows.

- [Installing Node.js on Linux](#installing-nodejs-on-linux)
- [Installing Node.js on Mac OS](#installing-nodejs-on-mac-os)
- [Installing Node.js on Windows](#installing-nodejs-on-windows)
- [How to install Node.js via binary archive on Linux?](#how-to-install-nodejs-via-binary-archive-on-linux)

## Installing Node.js on Linux

Installing Node.js on Linux machine is very easy. If you are using Debian or Ubuntu based distributions, try installing Node.js via the command line.

```bash
sudo apt-get install nodejs npm
```

Or, if you are using Arch, please type in the following in your terminal:

```bash
sudo pacman -S nodejs npm
```

You can verify the installation by using

```bash
node --version
# 6.14.7 OR version you have installed

npm --version
# v12.16.1 OR version you have installed
```

## Installing Node.js on Mac OS

Node.js provides macOS Installer, you can download it [here](https://nodejs.org/en/download/), and directly install `node` and `npm` on your Mac OS.

Or, you can use [Homebrew](https://brew.sh/):

```bash
brew install node
```

## Installing Node.js on Windows

You can download the [Windows Installer](https://nodejs.org/en/#home-downloadhead) directly from the [nodejs.org](https://nodejs.org/) web site, and install it like any other package.

## How to install Node.js via binary archive on Linux?

If you want to manually install Node.js without using the package manager, you can do that by downloading the source code from [here](https://nodejs.org/en/download/), open your terminal and follow the below steps.

**1. Unzip the binary archive to any directory you wanna install Node, I use `/usr/local/lib/nodejs`**

```bash
# relace the version with the version you have downloaded
VERSION=v12.16.1
DISTRO=linux-x64
sudo mkdir -p /usr/local/lib/nodejs
sudo tar -xJvf node-$VERSION-$DISTRO.tar.xz -C /usr/local/lib/nodejs
```

**2. Set the environment variable `~/.profile`, add below to the end**

```bash
# Nodejs
VERSION=v12.16.1
DISTRO=linux-x64
export PATH=/usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin:$PATH
```

**3. Refresh profile**

```bash
~/.profile
```

**4. Test installation using**

```bash
node -v
npm version
npx -v
```

I hope you found this post useful. If you have any questions, please comment down below 👇👇👇
