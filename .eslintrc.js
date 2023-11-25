export const env = {
    browser: true,
    es2021: true,
};
export const extend = [
    'standard-with-typescript',
    'plugin:react/recommended',
    'prettier',
];
export const overrides = [
    {
        env: {
            node: true,
        },
        files: ['.eslintrc.{js,cjs}'],
        parserOptions: {
            sourceType: 'script',
        },
    },
];
export const parserOptions = {
    ecmaVersion: 'latest',
    sourceType: 'module',
};
export const plugins = ['react'];
export const rules = {};
export const settings = {
    react: {
        version: 'detect',
    },
};
