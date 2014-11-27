# useful.gestures.js: Interactions Library

A library of useful functions to ease working with touch and gestures.

Try the <a href="http://www.woollymittens.nl/useful/default.php?url=useful-gestures">tests</a>.

## How to include the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="./js/useful-gestures.js"></script>
```

To enable the use of HTML5 tags in Internet Explorer 8 and lower, include *html5.js*.

```html
<!--[if lte IE 9]>
	<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```

## How to start the script

```javascript
var gesturesTest = new useful.Gestures().init({
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

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses grunt.js from http://gruntjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `grunt import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `grunt dev` - Builds the project for development purposes.
+ `grunt prod` - Builds the project for deployment purposes.
+ `grunt watch` - Continuously recompiles updated files during development sessions.
+ `grunt serve` - Serves the project on a temporary web server at http://localhost:8000/ .

## License

This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
