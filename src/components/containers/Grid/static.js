import get from 'lodash.get';

import { NumberOrOne } from '../../../static/Math';
import { isObject } from '../../../utils/typeCheck';


export const getStyle = ({ style, columnsTemplate, rowsTemplate, gap, rowGap = gap, colGap = gap, width, height }) => {
	const styles = { };

	['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].forEach(size => {
		const suffix = size !== 'xs' ? `-${size}` : '';

		if (isObject(columnsTemplate)) {
			const trueTemplate = get(columnsTemplate, size);
			if (trueTemplate && trueTemplate !== 'auto') styles[`--template-columns${suffix}`] = trueTemplate;
		}
		else if (['string', 'number'].includes(typeof columnsTemplate) && size === 'xs' && columnsTemplate !== 'auto') {
			styles[`--template-columns${suffix}`] = columnsTemplate;
		}

		if (isObject(rowsTemplate)) {
			const trueTemplate = get(rowsTemplate, size);
			if (trueTemplate && trueTemplate !== 'auto') styles[`--template-rows${suffix}`] = trueTemplate;
		}
		else if (['string', 'number'].includes(typeof rowsTemplate) && size === 'xs' && rowsTemplate !== 'auto') {
			styles[`--template-rows${suffix}`] = rowsTemplate;
		}

		if (isObject(colGap)) {
			const trueCol = get(colGap, size);
			if (trueCol && trueCol !== 'auto') styles[`--col-gap${suffix}`] = trueCol;
		}
		else if (['string', 'number'].includes(typeof colGap) && size === 'xs' && colGap !== 'auto') {
			styles[`--col-gap${suffix}`] = colGap;
		}

		if (isObject(rowGap)) {
			const trueRow = get(rowGap, size);
			if (trueRow && trueRow !== 'auto') styles[`--row-gap${suffix}`] = trueRow;
		}
		else if (['string', 'number'].includes(typeof rowGap) && size === 'xs' && rowGap !== 'auto') {
			styles[`--row-gap${suffix}`] = rowGap;
		}
	});

	return { ...styles, ...style };
};
