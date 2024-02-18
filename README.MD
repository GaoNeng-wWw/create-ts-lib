# create ts lib

## Quick start

```bash
npm install @gaonengwww/create-ts-lib -g
create-ts-lib test
```

## Direction struct

```
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── .husky
│   ├── _
│   │   ├── .gitignore
│   │   └── husky.sh
│   └── pre-commit
├── global.d.ts
├── package.json
├── rollup.config.ts
├── src // You can empty all files in this folder
│   ├── __tests__
│   │   └── sum.test.ts
│   ├── index.ts
│   └── sum.ts
├── tsconfig.json
└── vitest.config.ts
```