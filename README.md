# gestures.js: Interactions Library

*DEPRICATION WARNING: the functionality in this script has been superceeded / trivialised by updated web standards.*

A library of useful functions to ease working with touch and gestures.

## How to include the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="js/gestures.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'js/gestures.js'
], function(WaitForIt, ImageFallback) {
	...
});
```

Or use imported as a component in existing projects.

```js
@import {Gestures} from "js/gestures.js";
```

## How to start the script

```javascript
var gesturesTest = new Gestures({
	'element' : document.getElementById('gestures-test'),
	'threshold' : 50,
	'increment' : 0.1,
	'cancelTouch' : true,
	'cancelGesture' : true,
	'swipeLeft' : function (coords) {},
	'swipeUp' : function (coords) {},
	'swipeRight' : function (coords) {},
	'swipeDown' : function (coords) {},
	'drag' : function (coords) {},
	'pinch' : function (coords) {},
	'twist' : function (coords) {},
	'doubleTap' : function (coords) {}
});
```

This function tries to unify mouse and touch interaction across desktop, Android, iOS and Windows 8.

**threshold : {integer}** - Gestures shorter than this are ignored.

**increments : {float}** - Attenuation applied to the mouse wheel.

**cancelTouch : {boolean}** - Cancels the default browser behaviour for the touch interaction.

**cancelGesture : {boolean}** - Cancels the default browser behaviour for the gesture interaction.

**swipeLeft : {function}** - A function that runs every time a swipe to the left is performed.

**swipeUp : {function}** - A function that runs every time a swipe up is performed.

**swipeRight : {function}** - A function that runs every time a swipe to the right is performed.

**swipeDown : {function}** - A function that runs every time a swipe down is performed.

**drag : {function}** - A function that runs every time a dragging motion is in progress.

**pinch : {function}** - A function that runs every time a pinching motion is in progress.

**twist : {function}** - A function that runs every time a twisting motion is in progress.

**doubleTap : {function}** - A function that runs when the same location is tapped twice in quick succession.

**x : {integer}** - The x coordinate of the start or centre of the interaction.

**y : {integer}** - The y coordinate of the start or centre of the interaction.

**horizontal : {integer}** - The horizontal component of the gesture.

**vertical : {integer}** - The vertical component of the gesture.

**scale : {float}** - The scaling factor.

**rotation : {float}** - The amount of rotation in degrees.

**event : {event}** - The event that resulted from the interaction.

**source : {object}** - The original source element of the interaction.

**coords : {x, y, scale, distance, horizontal, vertical, event, source}** - Output object of the gesture events.

## How to control the script

### disableDefaultTouch

```javascript
gesturesTest.disableDefaultTouch();
```

Disable the mobile browser's default behaviour to touch. This stop the interference with the event handlers.

### enableDefaultTouch

```javascript
gesturesTest.enableDefaultTouch();
```

Enables the mobile browser's default behaviour to touch. This will interfere with the event handlers.

### disableDefaultGesture

```javascript
gesturesTest.disableDefaultGesture();
```

Disable the mobile browser's default behaviour to gestures. This stop the interference with the event handlers.

### enableDefaultGesture

```javascript
gesturesTest.enableDefaultGesture();
```

Enables the mobile browser's default behaviour to gestures. This will interfere with the event handlers.

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens).
