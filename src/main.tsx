import { StrictMode } from 'react'
import App from './App.tsx'
import About from './About.tsx'
import ReactDOM from "react-dom/client"
import RequestEdit from './RequestEdit.tsx' 
import Tree from './Tree.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";



ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<App />}> 
          <Route index element = {<Tree/>}/>
          <Route path="about" element={<About/>} />
          <Route path="request-edit" element={<RequestEdit />} />
        </Route>
      </Routes>
  </BrowserRouter>
  </StrictMode>,
)
