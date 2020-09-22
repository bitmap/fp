import createCurryFlow from './utils/createCurryFlow'
import createFlow from './utils/createFlow'

const curryCompose = createCurryFlow(createFlow(true))

export default curryCompose
