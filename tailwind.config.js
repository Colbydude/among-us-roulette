module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
        defaultLineHeights: true,
        standardFontWeights: true
    },
    purge: [
        './public/**/*.html',
        './src/**/*.html',
        './src/**/*.vue'
    ],
    theme: {
        extend: {}
    },
    variants: {},
    plugins: [
        require('@tailwindcss/custom-forms')
    ]
}
