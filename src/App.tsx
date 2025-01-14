import './App.css'
import { Skills, Application } from './components'

function App() {

  return (
    <div className='app'>
      <Application />
      <Skills skills={['HTML', 'CSS']} />
    </div>
  )
}

export default App
