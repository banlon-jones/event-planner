import { useState } from 'react'
import './App.css'
import {PrimeReactProvider} from "primereact/api";
import {BrowserRouter} from "react-router-dom";
import {Routers} from "./routes/route.jsx";

function App() {

  return (
      <BrowserRouter>
        <PrimeReactProvider>
          <Routers />
        </PrimeReactProvider>
      </BrowserRouter>
  )
}

export default App
