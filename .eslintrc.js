module.exports = {
    root: true,
    env: {
        node: true,
        es2022: true,
    },
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    extends: [
        'plugin:react/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'semi': ['error', 'always'],
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    overrides: [
        {
            files: ['**/*.{ts,tsx}'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint', 'react'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:react/recommended',
            ],
            rules: {
                'react/react-in-jsx-scope': 'off',
                'semi': ['error', 'always'],
            },
        },
        {
            files: ['**/*.{js,jsx,mjs,cjs}'],
            plugins: ['react'],
            extends: ['plugin:react/recommended'],
            rules: {
                'react/react-in-jsx-scope': 'off',
                'semi': ['error', 'always'],
            },
        },
    ],
};
