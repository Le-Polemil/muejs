# Button
## Props
- aspect : String || 'filled',
- color : String || 'primary',
- direction = String oneOf('up', 'bottom', 'left', 'right') || 'bottom',
- onClick : Function || () => undefined
- type : String || 'button'
- disabled : Boolean || false
- icon : String || null [We use material-icons]
- text : String || null
- className : String || ''
- style : Object || {}
- children : Node or [Node] || <span>No children given</span>

## How to use
#### Two way to use
##### - With text (and icon)
Example:

```JSX
<Button
  onClick={handleClick}
  icon="times"
  text="Close"
/>
```

##### - With children
Example:

```JSX
<Button onClick={handleClick}>
  <i className="material-icons-round">times</i>Close
</Button>
```