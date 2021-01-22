export default [
  // ES Module
  {
    input: 'lib/index.js',
    output: {
      file: 'dist/esm/index.js',
      format: 'es',
    },
  },

  // Common.js
  {
    input: 'lib/index.js',
    output: {
      file: 'dist/cjs/index.js',
      format: 'cjs',
    },
  },
]
