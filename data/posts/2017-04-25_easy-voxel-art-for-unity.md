---
layout: post
title:  "Easy Voxel Art for Unity"
date:   2017-04-25T10:24:00Z
---

Before reading this article, please see this short animation:

<center>
    ![http://i.imgur.com/ENAEv2c.gif](http://i.imgur.com/ENAEv2c.gif)
</center>

And this is voxel. Basically, voxel art is like pixel art but in 3D. Instead of having pixels in a 2D canvas, you add 3D units to the space. These 3D units are commonly small enough and always the same size. As usual, people with a lot of talent & imagination create awesome worlds with this art style...

...Like a Zelda Remake.

<center>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/SUx9DsG4xGE" frameborder="0" allowfullscreen></iframe>
</center>

But today we are not here to rant about people with talent, but to create original awesome characters (and worlds too) ready to use in our unity projects.

Do you remember MS Paint? we are using a similar tool to build our models, it is named [MagicaVoxel](https://ephtracy.github.io/) and the most important: it's free!

Once you became acquainted with this application and all its tools, you need a character model with the famous "T pose".

![http://i.imgur.com/Km2tf2V.gif](http://i.imgur.com/Km2tf2V.gif)

This is me creating a cheap mario clone, watch the complete video [here](https://www.youtube.com/watch?v=oLjXgBNgESA).

There're a couple of details you should take into account when designing your character model:

- It should be humanoid
- It should have legs & arms
- Perhaps it might be toony, take care of the proportions
- Fingers on hands are optional
- It is easier if character is in T position

If you followed previous tips, your character might look something like this:

![http://i.imgur.com/qJOIvNm.png](http://i.imgur.com/qJOIvNm.png) 

Export your character in obj format. Now you are ready for the next step.

Create an adobe account if you haven't, and browse to [Mixamo.com](https://www.mixamo.com/store/). Upload your model (.obj file) and start with the auto-rigging tool. Set the anchor points like this:

![http://i.imgur.com/f1Zm58r.png](http://i.imgur.com/f1Zm58r.png)

Please note the dropdown selection at the bottom side. Selecting "No Fingers (25)" for Skeleton LOD is essential. Otherwise your model won't be processed correctly.

If your model is different, or the auto-rigging tool doesn't recognize the character properly, just try again moving the anchor points around the places they suppose to be. When the model rigging is done, you should be able to see it in movement. It works like magic!

Let's give a try to the animations. Luckily, Mixamo has A TON of different animations. Most of them have configurable parameters to fit almost every model. I didn't have issues with mine.

![http://i.imgur.com/vRaHzi2.png](http://i.imgur.com/vRaHzi2.png)

Take all what you need, create a pack and download it as FBX for Unity (.fbx):

![http://i.imgur.com/7PvpbHT.png](http://i.imgur.com/7PvpbHT.png)

Import this package on unity and you are ready to rock. Remember to import the texture generated by MagicalVoxel as well or your model will look dead 😁.

Extra stuff you need to do:

* Create a new object
* Add a new animator controller
* Add your animations to the animator
* Trigger changes to the FSM
* Blend animations
* Create an actual videogame

Now unless you need very specific animations, you won't need a designer/animator to make original-looking videogames anymore!

---

**TL;DR**

* Create a character using [MagicaVoxel](https://ephtracy.github.io/)
* Import to [Mixamo.com](https://www.mixamo.com/store/)
* Download the unity package
* Import everything to Unity
* Profit!
