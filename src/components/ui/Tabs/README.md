# Tab

## Props
- onClick : Function (<i>required</i>)
- value : String || <i>''</i>
- current : Boolean || <i>false</i>
- label : String or Node || <i>''</i>
- children : Node or [Node] || <i>```<span>No children given</span>```</i>

## How to use
Example:
```JSX
<div>
  <Tab
    key={lang.iso2}
    label={<Fragment><Flag iso2={lang.iso2} />{bagdeCreate ? null : <i className="pad pad-l-3 fa fa-plus" />}</Fragment>}
    current={currentLang === lang.iso2}
    onClick={handleClick}
  />
  <Tab
    key={lang2.iso2}
    label={label2}
    current={currentLang === lang2.iso2}
    onClick={handleClick}
  />
</div>
```
