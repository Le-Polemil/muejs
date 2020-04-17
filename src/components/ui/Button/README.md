# Button

## Props

- onClick : Function || <i>null</i>
- type : String || <i>'button'</i>
- icon : String || <i>''</i> <strong>[Attention: dépend de la version de FontAwesome installée]</strong>
- disabled : Boolean || <i>false</i>
- text : String || <i>null</i>
- className : String || <i>''</i>
- children : Node or [Node] || <i>```<span>No children given</span>```</i>

## How to use
#### Two way to use
##### - With text (and icon)
Example:
```JSX
<Button
  onClick={this.onButtonClick}
  icon="times"
  text="Close"
/>
```

##### - With children
Example:
```JSX
<Button onClick={this.onButtonClick}>
  <span><i className="fa fa-times">Close</span></i>
</Button>
```
