import filter from '../filter'
const filterArgs = filter(func => typeof func === 'function')

const createCurryFlow = flow => function next(...args) {
  const lastArg = args[args.length - 1]
  const funcs = filterArgs(args)

  return typeof lastArg !== 'function'
    ? flow(...funcs)(lastArg)
    : next.bind(null, ...funcs)
}

export default createCurryFlow
