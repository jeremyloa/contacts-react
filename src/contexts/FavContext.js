import { createContext, useContext, useState } from "react";

const FavContext = createContext([])

export const FavProvider = ({children}) => {
    const [fav, setFav] = useState([1,3])
    console.log(fav)
    return (
        <FavContext.Provider value={[fav, setFav]}>{children}</FavContext.Provider>
    )
}

export function UseCurrFav() {
    return useContext(FavContext);
  }
