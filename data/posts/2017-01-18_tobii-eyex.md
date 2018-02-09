---
layout: post
title:  "Playing with Tobii EyeX"
date:   2017-01-18T23:34:56Z
---

One of the perks of being a <a href="http://globalgamejam.org/" title="Global Game Jam">GGJ</a> organizer is that, sometimes, sponsors provide cool tech toys to your jam site. One of this year's sponsors (<a href="http://www.tobii.com//">Tobii</a>) sent us a <a href="http://tobiigaming.com/product/tobii-eyex/">Tobii EyeX</a> to play with... for free.
 
How cool is this? I meant, they give you a brand new piece of tech to mess with, for free, no hidden points, no scams. We received the gadget in our homes because they are cool.

Tobii Eye X is an Eye Tracker. You are able to integrate a new input to your applications. Not the mouse, this is obsolete; nor the keyboard, the primitive bunch of legos. You can track what your users/players are seeing in any moment. Woot!?

The best of this, is that SDK is pretty easy to use. They provide you several integrations, so if you are using any modern game development framework (Unity or Unreal) you are covered. They also provide .NET and C/C++ libraries, just in case you want to build something bigger... or custom.

New gaming laptops nowadays are integrating this technology (Alienware, MSI, Acer), as well gaming monitors (Acer). For whom already has its gaming gear bought, there's another option: get your Tobii device for a low price (around 120 usd per unit).

From a developer point of view, and as I said before, their SDK is easy to use. I tried with the Unity integration. The input is read as another mouse, with a sightly difference: a mouse's position is a Vector3, Tobii's Vector2. Nothing harsh.

<script src="https://gist.github.com/tonymtz/cd0cefea9d0efba859bea7d2a3a44651.js"></script>

And that's all. In less than an hour (considering I had to read the <a href="https://gist.github.com/mellii/cb691cf7c67569853bf20739278d7691">script reference</a>) I managed to create this demo for jammers from my local site:

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/bLDfVnh-z5E" frameborder="0" allowfullscreen></iframe>
</center>

Please note that the wandering spotlight is following my gaze.

I'm developing more videogames with Tobii integration in the future for sure.

Cheers.
