import { Header } from './components/Header'
import { MainComponent } from './components/MainContainer'

function App() {
  return (
    <div className='w-full h-full bg-zinc-100 dark:bg-zinc-800 scroll-smooth flex flex-col'>
      <Header />
      <MainComponent />
    </div>
  )
}

export default App
