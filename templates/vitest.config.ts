import { defineConfig } from 'vitest/config';

export default defineConfig({
  define:{
    __TEST__: true,
    __DEV__: true
  },
  test: {
  },
});