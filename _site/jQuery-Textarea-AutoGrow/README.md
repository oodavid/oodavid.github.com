# jQuery Textarea AutoGrow

Automatically grows textarea elements (vertically) to accommodate its content. Has a minimum and maximum height and can trigger a callback when the size changes.

## Usage

```javascript
$('textarea').autoGrow({
     minHeight: 1,    // Min height (px), defaults to 1
     maxHeight: 1000, // Max height (px), defaults to 1000
     callback:  func  // Callback function, defaults to null
});
```

## Demo

![Just grow](https://raw.githubusercontent.com/oodavid/jQuery-Textarea-Autogrow/master/grow.gif)

![Using the callback](https://raw.githubusercontent.com/oodavid/jQuery-Textarea-Autogrow/master/callback.gif)
