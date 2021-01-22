export default [
  // ES Module
  {
    input: 'index.js',
    output: {
      file: 'dist/esm/index.js',
      format: 'es',
    },
  },

  // Common.js
  {
    input: 'index.js',
    output: {
      file: 'dist/cjs/index.js',
      format: 'cjs',
    },
  },
]
