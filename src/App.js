import React, { createContext, useState, useEffect } from 'react'
import { Route, Routes, Link } from "react-router-dom"
import DetailPage from './pages/DetailPage'
import ListPage from './pages/ListPage'
import StartPage from './pages/StartPage'

const NameContext = createContext()

export default function App() {

  const [name, setName] = useState("")
  const [list, setList] = useState(null)

  useEffect(() => {
    const url = "https://mock-data-api-2021-default-rtdb.europe-west1.firebasedatabase.app/images.json"
    fetch(url)
      .then(res => res.json())
      .then(data => setList(data))
  }, [])

  return (
    <NameContext.Provider value={{ name, setName, list, setList }}>
      <div>
        <div>
          <nav>
            <p><Link to="/">To Start</Link></p>
            <p><Link to="/List">To List</Link></p>
          </nav>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/List" element={<ListPage />} />
            <Route path="/List/:id" element={<DetailPage />} />
          </Routes>
        </div>
      </div>
    </NameContext.Provider>
  )
};

export { NameContext }