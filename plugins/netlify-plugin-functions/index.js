export const onPreBuild = function ({ netlifyConfig }) {
	console.log('Plugin to dynamically set functions included_files');
	netlifyConfig.functions['*'].included_files = ['chart_template/**'];

	console.log(netlifyConfig.functions);
};
