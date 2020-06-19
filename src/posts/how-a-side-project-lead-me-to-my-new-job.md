---
title: "How a side project lead me to my current job"
path: "/how-a-side-project-lead-me-to-my-current-job"
date: "2020-04-16"
author: "Diego"
excerpt: "I read many stories on Internet about how people started to work on something just to feed their curiosity and ended up being their full-time job, or in another cases, it becomes the proxy to achieve something else they didn’t expected. Suddenly, this happened to me a few months ago, while I was showing to my landlord these two little Pwnagotchis. Yes, like the ones in the picture above!"
tags: ["stories"]
coverImage: ../images/02316fad6f8add7e3144985619ea785c.jpg
---

I read many stories on Internet about how people started to work on something just to feed their curiosity and ended up being their full-time job, or in another case, it becomes the proxy to achieve something else they didn’t expected. Suddenly, this happened to me a few months ago, while I was showing to my landlord these two little Pwnagotchis. Yes, like the ones in the picture above!

So here is my story. This time I found a project on [Github Explore’s page](https://github.com/explore) that required a little of linux and programming knowledge to setup it. And to make it look cool, I also needed it a [e-Ink display](https://www.amazon.de/-/en/gp/product/B07J3FHJVP/) and [Raspberry Pi](https://www.raspberrypi.org/products/raspberry-pi-zero-w/).

### What’s a Pwnagotchi anyway?

Here is the explanation from the official website:

> [Pwnagotchi](https://pwnagotchi.ai/) is an A2C-based “AI” powered by [bettercap](https://www.bettercap.org/) and running on a Raspberry Pi Zero W that learns from its surrounding WiFi environment in order to maximize the [crackable WPA key material it captures](https://pwnagotchi.ai/intro/#wifi-handshakes-101) (either through passive sniffing or by performing deauthentication and association attacks). This material is collected on disk as PCAP files containing any form of handshake supported by [hashcat](https://hashcat.net/hashcat/), including full and half WPA handshakes as well as [PMKIDs](https://www.evilsocket.net/2019/02/13/Pwning-WiFi-networks-with-bettercap-and-the-PMKID-client-less-attack/).
>
> Instead of merely playing Super Mario or Atari games like most reinforcement learning based “AI” (yawn), Pwnagotchi tunes its own parameters over time to get better at pwning WiFi things in the real world environments you expose it to.
>
> **But…why?**
>
> To give hackers an excuse to learn about reinforcement learning and WiFi networking—and have a reason to get out for more walks.
>
> Also? It’s cute as f—.

A perfect excuse, isn’t it? So the project got my attention right away. I cloned the source code and run it from my computer. Besides some troubleshooting installing python dependencies, the process to set up it on OS X and later on Raspbian was super smooth.

But running it on my laptop I was missing half of the fun. The point of the project is to go outside and give to the Pawnagotchi as many WiFi handshakes to eat as possible. So I orderer two e-Ink displays for the _RPis_ that I already had at home. In the meantime, I reviewed the code and the fundamentals of the AI part of the software 🤓. 

After the displays arrived I was ready to go for a walk around the neighborhood and... _[release the Krakens](https://www.youtube.com/watch?v=gb2zIR2rvRQ)_! Being able to see the activity of the Machine Learning process in a form of friendly UI was pretty fun.

The next step was trying to crack the handshakes stored on the `/root/handshakes/` folder inside the pwnagotchi’s memory, using some kind of bruteforce attack. I found [this tutorial](https://medium.com/@brannondorsey/crack-wpa-wpa2-wi-fi-routers-with-aircrack-ng-and-hashcat-a5a5d3ffea46) while ago that explained how to use Aircrack-ng/Hashcat and some third-party services like [GPUHASH.me](https://gpuhash.me/) or [OnlineHashCrack](https://www.onlinehashcrack.com/). Without making any progress I gave up.

...

By the end of December, I was checking on Facebook market looking for a new place to live with Melania. Not too excited about the options we had, I sent a request to a guy that was renting a cozy apartment located in Litcherfelde. He immediately answered and booked me an appointment for Sunday afternoon, I was the first on the list. 

We went there with Melush, met the owner, and after a quick check, the aparment was everything we needed it. While discussing about the details of contract, we talked a little bit about us, and that’s when we found we both worked on IT. I had my Pawnagotchi’s with me, so I thought it would be a good idea to show him my toys. After a few more minutes of talking about nerdy stuff, he told me they were looking for IoT Developers to work on a special project they had, and if I was interested he could introduce me with the team and move forward with the hiring process.

Without knowing it yet, that day I went back home with a new place to live and a new job!

---

You can learn more about [how Pwnagotchi works](https://pwnagotchi.ai/intro/#how-does-pwnagotchi-work) and why it [eats WPA handshakes](https://pwnagotchi.ai/intro/#wifi-handshakes-101) in the [Introduction doc](https://pwnagotchi.ai/intro/). You can also read about [the story of the project](https://www.evilsocket.net/2019/10/19/Weaponizing-and-Gamifying-AI-for-WiFi-Hacking-Presenting-Pwnagotchi-1-0-0/) on their website.
