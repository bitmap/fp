export default [{
  input: 'lib/index.js',
  output: {
    file: 'dist/index.js',
    format: 'es',
  },
}, {
  input: 'lib/index.js',
  output: {
    file: 'dist/index.cjs.js',
    format: 'cjs',
  },
}]
