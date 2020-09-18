const curry = func => {
  const next = (...args) =>
    args.length >= func.length
      ? func.call(null, ...args)
      : next.bind(null, ...args)
  return next
}

export default curry
