module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            modules: true,
        },
    },
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    plugins: ['react'],
    rules: {
        'import/no-extraneous-dependencies': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/no-array-index-key': 0,
    },
};
