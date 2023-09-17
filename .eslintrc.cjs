module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react', 'react-refresh', '´prettier'],
    rules: {
        'react-refresh/only-export-components': 'warn',
        'prettier/prettier': 'error', // Exibe erros do Prettier como erros ESLint
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
