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


export function generateTemplate({ template, dimension }) {
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
