module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                paths: ['.'],
            },
        },
    },
    extends: [
        'plugin:react/recommended',
        'prettier',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    rules: {
        'react/display-name': 0,
        'react/prop-types': 0,
        'react/no-unescaped-entities': 0,
        'import/no-unresolved': 0,
        'react/no-children-prop': 0,
        'import/order': [
            'error',
            {
                groups: [['builtin', 'external'], 'internal', 'parent', 'sibling'],

                'newlines-between': 'always',
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '@**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: '@Api/**',
                        group: 'internal',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react', '@Api/**', '@***'],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
};