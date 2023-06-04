import {GlobalProvider} from './context/GlobalState'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/TRansactionForm'

function App() {

  return (
    <GlobalProvider>
      <Header/>
      <Balance/>
      <TransactionForm/>
      <h1>
        hello world
      </h1>
    </GlobalProvider>
  )
}

export default App
