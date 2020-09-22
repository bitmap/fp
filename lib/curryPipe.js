import createCurryFlow from './utils/createCurryFlow'
import createFlow from './utils/createFlow'

const curryPipe = createCurryFlow(createFlow())

export default curryPipe
