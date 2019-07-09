var locale = require('relative-time-format/locale/es')

module.exports = {
	locale: locale.locale,
	// Standard styles.
	long: locale.long,
	short: locale.short,
	narrow: locale.narrow,
	// Quantifier.
	quantify: locale.quantify,
	'tiny': require('../../locale-more-styles/es/tiny.json'),
}