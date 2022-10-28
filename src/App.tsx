import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'
import Contact from './pages/Contact'
import NoMatch from './pages/NoMatch'

function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-100 dark:bg-zinc-800 scroll-smooth flex flex-col dark:text-neutral-50 text-gray-900'>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
