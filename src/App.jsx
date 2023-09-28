import { Route, Routes } from 'react-router-dom'
import HomeMovies from './components/HomeMovies'
import { MyNavBar } from './components/MyNavBar'
import SinglePage from './components/SinglePage'

function App() {
  return (
    <>
    <MyNavBar />
    <Routes>
      <Route path='/' element={<HomeMovies/>}/>
      <Route path='/SinglePage/:id' element={<SinglePage/>}/>
    </Routes>
    </>
  )
}

export default App
