import React, { useState, useEffect } from 'react'
import Loading from './Components/Loading'
import Home from './Components/Home'

const HomeWithLoading = Loading(Home)

const App = () => {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    const userData = [
      { id: 101, name: "Amit" },
      { id: 102, name: "Ajay" },
    ]

    setLoading(true);
    setTimeout(() => { setLoading(false); setData(userData) }, 2000);
  }, [])

  return (
    <>
      <HomeWithLoading isLoading={loading} data={data} />
    </>
  )
}

export default App