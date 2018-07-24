# [MueJS](https://cobelt.github.io/muejs) [![npm version](https://img.shields.io/npm/v/muejs.svg?style=flat)](https://www.npmjs.com/package/muejs)

[MueJS](https://cobelt.github.io/muejs) is a Framework of React components that will help you to create pretty websites in 5 minutes.

#### Our advantages :
<ul>
    <li><strong>Grid system:</strong> We're using grid displays from CSS3 to make pretty dispositions.</li>
    <li><strong>Readable:</strong> Properties are created to make the code readable.</li>
    <li><strong>Intuitive:</strong> We choosed components' and props' names to get intuitive usage of the framework.</li>
    <li><strong>Fast:</strong> You can create pretty UIs with only few components.</li>
</ul>

## Installation
#### Using:
**npm**
```
npm i muejs
```
**yarn**
```
yarn add muejs
```

#### Peer dependencies
MueJS needs **React** to work well

## Examples
```JSX
    <Grid forceTemplate columnsTemplate="7fr 3fr" rowsTemplate="5vh 100rem 10vh">
        <GridElement col={2} row={2} className="bg-success">
            <h3>Wouah</h3>
        </GridElement>
    </Grid>
```
This example render a grid with 2 columns and 3 rows with forced templates.

You can see more details of each components here :

- ##### [Grid and GridElements](./docs/grid.md)

## Contribute
You can help us improve our components with Merge Requests !