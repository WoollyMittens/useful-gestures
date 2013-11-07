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
	'threshold' : 50,
	'increment' : 0.1,
	'cancel' : true,
	'swipeLeft' : function (x, y, distance, event) {},
	'swipeUp' : function (x, y, distance, event) {},
	'swipeRight' : function (x, y, distance, event) {},
	'swipeDown' : function (x, y, distance, event) {},
	'drag' : function (x, y, horizontal, vertical, event) {},
	'pinch' : function (x, y, scale, event) {},
	'twist' : function (x, y, rotation, event) {}
});
gesturesTest.start();
```

This function tries to unify mouse and touch interaction across desktop, Android, iOS and Windows 8.

**threshold : {integer}** - Gestures shorter than this are ignored.

**increments : {float}** - Zoom factor increments applied to the mouse wheel.

**cancel : {boolean}** - Cancels the default browser behaviour for the interaction.

**swipeLeft : {function}** - A function that runs every time a swipe to the left is performed.

**swipeUp : {function}** - A function that runs every time a swipe up is performed.

**swipeRight : {function}** - A function that runs every time a swipe to the right is performed.

**swipeDown : {function}** - A function that runs every time a swipe down is performed.

**drag : {function}** - A function that runs every time a dragging motion is in progress.

**pinch : {function}** - A function that runs every time a pinching motion is in progress.

**twist : {function}** - A function that runs every time a twisting motion is in progress.

**x : {integer}** - The x coordinate of the start or centre of the interaction.

**y : {integer}** - The y coordinate of the start or centre of the interaction.

**horizontal : {integer}** - The horizontal component of the gesture.

**vertical : {integer}** - The vertical component of the gesture.

**scale : {float}** - The scaling factor.

**rotation : {float}** - The amount of rotation in degrees.

**event : {event}** - The event that resulted from the interaction.

## Prerequisites

To concatenate and minify the script yourself, the following prerequisites are required:
+ https://github.com/WoollyMittens/useful-polyfills

## License
This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
