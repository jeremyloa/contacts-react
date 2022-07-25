import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

const APIContext = createContext([])

export const APIProvider = ({children}) => {
  const [api, setAPI] = useState()
    useEffect(() => {
      axios
      .get('https://reqres.in/api/users?page=1')
      .then((result)=>{
        setAPI(result.data.data)
        console.log(result.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
    },[])
    
    return (
        <APIContext.Provider value={api}>{children}</APIContext.Provider>
    )
}

export const UseCurrAPI = () => useContext(APIContext)
