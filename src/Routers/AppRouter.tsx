import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPresentation from '../Presentations/Auth/LoginPresentation'

export function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/login' element={<LoginPresentation/>}/>
    </Routes>
    </BrowserRouter>
  )
}