import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Portfolio from './portfolio.jsx'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import ModelProject2 from './project2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
     <Routes>
         <Route path='/'   element= {<Portfolio/>}/>
         <Route path='/project2' element={<ModelProject2/>}/>
       
      </Routes>
     </BrowserRouter>
  </StrictMode>,
)
