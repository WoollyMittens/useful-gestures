# useful.gestures.js: Interactions Library

A library of useful functions to ease working with touch and gestures.

Try the <a href="http://www.woollymittens.nl/useful/default.php?url=useful-gestures">tests</a>.

## How to include the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="./js/gestures.min.js"></script>
```

## How to start the script

```javascript
var gesturesTest = useful.Gestures( document.getElementById('gestures-test'), {
	'onswipe' : function (x, y, horizontal, vertical, event) {},
	'ondrag' : function (x, y, horizontal, vertical, event) {},
	'onpinch' : function (x, y, horizontal, vertical, event) {}
});
gesturesTest.start();
```

This function tries to unify mouse and touch interaction across desktop, Android, iOS and Windows 8.

**onswipe : {function}** - A function that runs every time a swipe is performed.

**ondrag : {function}** - A function that runs every time a dragging motion is in progress.

**onpinch : {function}** - A function that runs every time a pinching motion is in progress.

**x : {integer}** - The x coordinate of the start or centre of the interaction.

**y : {integer}** - The y coordinate of the start or centre of the interaction.

**horizontal : {integer}** - The horizontal component of the gesture.

**vertical : {integer}** - The vertical component of the gesture.

**event : {event}** - The event that resulted from the interaction.

## Prerequisites

To concatenate and minify the script yourself, the following prerequisites are required:
+ https://github.com/WoollyMittens/useful-polyfills

## License
This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
