
import Footer from './Components/Footer'
import MainPage from './Components/MainPage'
import Nav from './Components/Nav'
import BookingPage from './Components/BookingPages';
import {Routes, Route} from 'react-router-dom';

function App() {
  

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/book-a-table' element={<BookingPage/>}/>
    </Routes>
    
    <Footer/>
    </>
  )
}

export default App
