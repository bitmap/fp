import typescript from '@rollup/plugin-typescript'
import cleanup from 'rollup-plugin-cleanup'

export default [
  // ES Module
  {
    input: 'lib/index.ts',
    output: {
      dir: 'dist',
      format: 'es',
    },
    plugins: [
      typescript({
        target: 'es6',
        declaration: true,
        declarationDir: 'dist/types',
      }),
      cleanup(),
    ],
  },

  // Common.js
  {
    input: 'lib/index.ts',
    output: {
      file: 'dist/index.cjs',
      format: 'cjs',
    },
    plugins: [
      typescript({
        target: 'es5',
      }),
      cleanup(),
    ],
  },
]
