# Drawer

## Props

- open : Bool (<i>required</i>)
- onClose : Function (<i>required</i>)
- className : String || <i>''</i>
- side : String || <i>'left'</i>
- maxWidth : String or Number || <i>'75vw'</i>
- minWidth : String or Number || <i>400</i>
- children : Node or [Node] || <i>```<span>No children given</span>```</i>

## How to use
Example:
```JSX
<Drawer className="notifications" open={drawerState} onClose={() => closeDrawer()}>
  <div className="header">
    Notifications
  </div>
  <div className="body">
    { 'Hello World !'.repeat(5); }
  </div>
</Drawer>
```
