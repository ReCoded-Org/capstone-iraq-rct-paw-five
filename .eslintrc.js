module.exports = {
    env: {
        browser: true,
        es2021: true,
    },

    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
        'jsx-a11y/label-has-for': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
        camelcase: [
            2,
            {
                properties: 'never',
                ignoreImports: true,
            },
        ],
        'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx'] }],
    },
}
