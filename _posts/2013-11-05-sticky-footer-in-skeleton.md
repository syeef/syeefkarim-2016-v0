---
title: Sticky Footer in Skeleton Boilerplate
subTitle: How to create a sticky footer using the Skeleton Boilerplate
summary: Just a quick explanation of how I managed to create a sticky footer using the Skeleton HTML5 Boilerplate
image:
forceHeight: false
titleColor: black
layout: post
---
**The Problem**
I've always been a fan of the sticky footer. I like the idea of having all the content at the top of the page, and then some whitespace before I reach the end of the page. It creates more structure (structure is always good.)

However, during the rewrite of my website, I wanted to make it responsive and maintain some concepts from the older design e.g. the sticky footer. This was a little trickier to accomplish than I had anticipated.

**The Solution**
The solution is easier than you think, but if you were like me and got a bit caught up in Skeleton, you might have over thought it!

HTML  
Wrap your container div with a div called footer.

    <div class='footer'>
	<div class='container'>
		<div class='half-column'>
		</div>
		<div class='half-column'>
		</div>
	</div>
    </div>
  
CSS  

    html {
	position: relative;
	min-height: 100%;
}

body {
	margin: 0 0 170px 0; [bottom = footer height]
}

.footer {
	position: absolute;
	left: 0;
	bottom: 0;
	height: 170px;
	width: 100%;
    }



Hope this manages to help you out! Good luck!