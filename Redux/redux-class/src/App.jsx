import './App.css'
import Todo from './components/Todo'
import { store } from './app/store'
import {Provider} from 'react-redux'

function App() {

  return (
    <>
      <Provider store = {store}>
       <Todo/>
      </Provider>
    </>
  )
}

export default App
