import typescript from '@rollup/plugin-typescript'

export default [
  // ES Module
  {
    input: 'lib/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'es',
    },
    plugins: [typescript({
      moduleResolution: 'node',
      target: 'es6',
    })],
  },

  // Common.js
  {
    input: 'lib/index.ts',
    output: {
      file: 'dist/index.cjs',
      format: 'cjs',
    },
    plugins: [typescript({
      moduleResolution: 'classic',
      target: 'es5',
    })],
  },
]
