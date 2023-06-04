import {useGlobalState} from '../context/GlobalState'

function Balance() {
    const data = useGlobalState()
  return (
    <div>
      Balance
    </div>
  )
}

export default Balance
