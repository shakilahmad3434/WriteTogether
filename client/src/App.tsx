import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Document from './pages/Document'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/document/:documentId' element={<Document />} />
            <Route path='*' element={<h1>Page not found!</h1>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App