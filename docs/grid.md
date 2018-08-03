## Grid
###### Parent : *React.Component*

###### Usage example :
```HTML
<Grid forceTemplate columnsTemplate="1fr 1fr" rowsTemplate="1fr">
    <GridElement>
        <h3>Left Title</h3>
    </GridElement>
    <GridElement>
        <h3>Right Title</h3>
    </GridElement>
</Grid>
```

###### Properties :
- **columnsTemplate** - Used *if forceTemplate = true*. Template for the **columns** of your grid
- **rowsTemplate** - Used *if forceTemplate = true*. Template for the **rows** of your grid

# GridElement
###### Parent : *React.Component*

###### Usage example :
```HTML
    <GridElement>
        <h3>Title !</h3>
    </GridElement>
```

###### Properties :
- **col** *(default: **auto**)* - N° column **start**
- **row** *(default: **auto**)* - N° row **start**
- **width** *(default: **1**)* - **Width** of the element *(column-end = col + width - 1)*
- **height** *(default: **1**)* - **Height** of the element *(row-end = row + height - 1)*
- **fullWidth** - if **true**, then element take **max width** that is calculated in *grid parent*
- **fullHeight** - if **true**, then element take **max height** that is calculated in *grid parent*


# Row
###### Parent : *GridElement*

A **Row** is a **GridElement** with **fullWidth** to **true**

# Col
###### Parent : *GridElement*

A **Col** is a **GridElement** with **fullHeight** to **true**