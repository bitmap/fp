export default [
  // ES Module
  {
    input: 'lib/index.js',
    output: {
      file: 'dist/index.js',
      format: 'es',
    },
  },

  // Common.js
  {
    input: 'lib/index.js',
    output: {
      file: 'dist/index.cjs',
      format: 'cjs',
    },
  },
]
