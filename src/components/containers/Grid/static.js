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


export function generateTemplate({ propsTemplate, dimension }) {
	if (propsTemplate && typeof propsTemplate === typeof '') return propsTemplate;
	if (dimension) {
		const templates = [];
		for (let i = 0; i < dimension; i++) {
			if (propsTemplate && propsTemplate[i + 1]) {
				templates[i] = propsTemplate[i + 1];
			} else {
				templates[i] = 'auto';
			}
		}
		return templates.filter(e => !!e).join(' ');
	}
	return 'fit-content(100%)'
}
