const observers = [];
document.querySelectorAll('.grid').forEach((gridNode) => {

    const calculateGridTemplates = () => {

        const improviseSimpleTemplateFrom = (toDivide, divisor) => {
            let template = '';
            for (let i = 0; i < divisor; i++) {
                const percent = toDivide / divisor;
                template += percent ? percent + '% ' : '1fr '
            }
        };

        const calculateTemplateColumns = () => {
            let divisor = 0;
            const columns = children.map((child) => {
                const colPos = child.gridProps.col || 1;
                const gridWidth = child.gridProps.gridWidth || 1;
                divisor += Number(gridWidth) || 1;
                return {colPos, gridWidth};
            });
            let template = '';
            columns.map(col => {
                const percent = (100 / divisor * col.gridWidth);
                template += percent ? percent + '% ' : '1fr ';
            });

            return template;
        };
        const calculateTemplateRows = () => {
            let divisor = 0;
            const rows = children.map((child) => {
                const rowPos = child.gridProps.row || 1;
                const gridHeight = child.gridProps.gridHeight || 1;
                divisor += Number(gridHeight) || 1;
                return {rowPos, gridHeight};
            });
            let template = '';
            rows.map(row => {
                const percent = (100 / divisor * row.gridWidth);
                template += percent ? percent + '% ' : '1fr ';
            });

            return template;
        };

        const getGridElementProps = (element, index) => {
            const props = {};
            if (element.className) {
                const classList = element.className.split(' ');
                classList.forEach((classname) => {
                    const match = classname.match(/(\w+)-(\d+)/);
                    if (match) {
                        const key = match[1] || null;
                        props[key] = match[2] || 0;
                    }
                });
            }
            // Default values if not found
            props['col'] = props['col'] || index + 1;
            props['row'] = props['row'] || 1;

            return props;
        };
        const addChildrenPropsToChildren = () => {
            if (!children) return null;

            children = children.map((element, index) => {
                return {jsx: element, gridProps: getGridElementProps(element, index)};
            });
        };


        let children = [ ...gridNode.children ];
        const {col, row} = getGridElementProps(gridNode, 0);
        const columnsTemplate = gridNode.style.gridTemplateColumns || improviseSimpleTemplateFrom(100, col);
        const rowsTemplate = gridNode.style.gridTemplateRows || improviseSimpleTemplateFrom(100, row);
        const adaptToContent = Boolean(gridNode.className.match(/adaptToContent/));

        addChildrenPropsToChildren();

        const style = {
            gridTemplateColumns: adaptToContent && children ? calculateTemplateColumns() : columnsTemplate,
            gridTemplateRows: adaptToContent && children ? calculateTemplateRows() : rowsTemplate,
        };

        Object.assign(gridNode.style, style);
    };

    calculateGridTemplates();

    const config = { attributes: true, childList: true, subtree: true };
    const observer = new MutationObserver(calculateGridTemplates);

    observer.observe(gridNode, config);
    observers.push(observer);

});