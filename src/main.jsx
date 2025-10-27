import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Portfolio from './portfolio.jsx'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import ModelProject2 from './project2.jsx'
import "../../graph/src/graph/graph.css"
import Graphlandingpage from '../../graph/src/graph/graphlandingpage.jsx'
import Graphchart from '../../graph/src/graph/graphchart.jsx'
import Piechart from '../../graph/src/graph/piechart.jsx'
import Barchart from '../../graph/src/graph/barchart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
     <Routes>
         <Route path='/'   element= {<Portfolio/>}/>
         <Route path='/project2' element={<ModelProject2/>}/>
         <Route path='/project4'   element= {<Graphlandingpage/>}/>
         <Route path='/graphchart'   element= {<Graphchart/>}/>
         <Route path='/piechart'   element= {<Piechart/>}/>
          <Route path='/barchart'   element= {<Barchart/>}/>
      </Routes>
     </BrowserRouter>
  </StrictMode>,
)
