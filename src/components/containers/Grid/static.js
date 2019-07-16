import memoize from 'lodash.memoize';

import { NumberOrOne } from '../../../static/Math';


export function getTemplateLength(template) {
	if ([null, undefined].includes(template)) return;

	switch (typeof template) {
		case 'object':
			try {
				return Math.max(...Object.keys(template));
			}
			catch (e) { return console.error(template, 'is not a countable object.', 'Error:', e); }

		case 'string':
			try { return template.split(' ').length; }
			catch (e) { return console.error(template, 'is not a splitable string.', 'Error:', e); }

		case 'number':
			return NumberOrOne(template);

		default:
			return console.error(template, 'is not a known type.');
	}
}


export function generateTemplate({ template, dimension = getTemplateLength(template) }) {
	try {
		switch (typeof template) {
			case 'object':
				const templateToReturn = [];
				for (let i = 0; i < dimension; i++) {
                    templateToReturn[i] = template && template[i + 1] ? template[i + 1] : 'auto';
				}
				return templateToReturn.filter(e => !!e).join(' ');

			case 'string':
				return template;

			case 'number':
				return Array(NumberOrOne(template)).fill('auto').join(' ');

			default:
				if (dimension) {
					return Array(dimension).fill('auto').join(' ');
				}
				else {
					return 'fit-content(100%)';
				}
		}
	}
	catch (e) {
		console.error('Got an error generating template :', e, '-> Gave fit-content(100%)');
		return 'fit-content(100%)';
	}
}

export function calculateGridSize({ columnsTemplate, rowsTemplate, children }) {
		if (!children || children.length <= 0) return [1, 1];

		let currentRow = 1;
		const rows = [];

		Object.values(children).forEach(child => {
				const childInfos = child.props;
				if (!childInfos) return;

				const row = childInfos.row === 'auto' ? currentRow : childInfos.row;
				// if (childInfos.row === 'auto') currentRow++;

				if (childInfos.fullwidth) currentRow += childInfos.height;

				if (!rows[row]) rows[row] = {width: 0, height: 0}; // create row on first entry of each row

				const colSize = NumberOrOne(childInfos.col) + childInfos.width - 1; // Because col n with width 1 should return a col of n instead of n + 1

				// console.log(childInfos.type, colSize);
				const width = (childInfos.col === 'auto') ? rows[row].width + colSize : Math.max(rows[row].width, colSize);
				const height = Math.max(rows[row].height, childInfos.height);

				rows[row] = {width, height};
		});

		let maxCol = 1;
		let maxRow = 1;
		rows.forEach((row, index) => {
				if (!row || !row.width || !row.height) return null;
				maxCol = Math.max(maxCol, row.width);
				maxRow = Math.max(maxRow, NumberOrOne(index) + row.height - 1);
		});

		const columnsTemplateLength = getTemplateLength(columnsTemplate);
		const rowsTemplateLength = getTemplateLength(rowsTemplate);
		if (columnsTemplateLength !== maxCol)
			console.warn('Attention, le template donné ne fait pas la meme taille que ce qui est caculé via les children [ColsTemplateLength]=', columnsTemplateLength, '[ColsCalculated]=', maxCol);
		if (rowsTemplateLength !== maxRow)
			console.warn('Attention, le template donné ne fait pas la meme taille que ce qui est caculé via les children [RowsTemplateLength]=', rowsTemplateLength, '[RowsCalculated]=', maxCol);

		maxCol = getTemplateLength(columnsTemplate) || maxCol;
		maxRow = getTemplateLength(rowsTemplate) || maxRow;

		return [maxCol, maxRow];
}


export const getStyle = ({ style, columnsTemplate, rowsTemplate, gap, rowGap = gap, colGap = gap, width, height }) => {
		let gridTemplateRows = rowsTemplate, gridTemplateColumns = columnsTemplate;
		if (width !== undefined || columnsTemplate) {
			gridTemplateColumns = generateTemplate({ template: columnsTemplate, dimension: width});
		}
		if (height !== undefined || rowsTemplate) {
			gridTemplateRows = generateTemplate({ template: rowsTemplate, dimension: height});
		}


		return {
				gridTemplateColumns,
				gridTemplateRows,
				// gridAutoColumns: '1fr',
				// gridAutoRows: '1fr',
				gridRowGap: rowGap,
				gridColumnGap: colGap,
				...style
		};
};
