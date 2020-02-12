const StyleDictionary = require( 'style-dictionary' );

StyleDictionary.registerTransform({
    name: 'size/pxToRem',
    type: 'value',
    matcher: function( prop ) {
        return prop.attributes.category === 'size' && prop.attributes.type === 'font';
    },
    transformer: function( prop ) {
        return parseFloat( prop.original.value.replace( /px/g, '' ) / 16 ) + 'rem';
    }
});

StyleDictionary.registerTransformGroup({
    name: 'custom/web',
    'transforms': ['attribute/cti', 'color/css', 'name/cti/kebab', 'size/pxToRem']
})

const getStyleTokenConfig = theme => {
    return {
        'source': [
            'style-tokens/globals/**/*.json',
            `style-tokens/themes/${theme}/theme.json`
        ],
        'platforms': {
            'css': {
                'transformGroup': 'custom/web',
                'buildPath': './src/css/',
                'prefix': 'mb',
                'files': [{
                    'destination': `css-vars-${theme}.css`,
                    'format': 'css/variables'
                }]
            }
        }
    }
}

['light', 'dark'].forEach(theme => {
    const StyleDictionaryConf = StyleDictionary.extend(getStyleTokenConfig(theme));
    StyleDictionaryConf.buildAllPlatforms();
})


