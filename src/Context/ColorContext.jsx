import { createContext, useState } from "react";

const ColorContext = createContext({})

const ColorContextProvider = ({children})=>{
    const [color1,setColor1] = useState("#fcd5d5")
    const [color2,setColor2] = useState("rgba(237,222,200,1)")

    const value = {
        color1,
        setColor1,
        color2,
        setColor2
    }

    return(
    <ColorContext.Provider value={value}>
        {children}
    </ColorContext.Provider>
    )
}

export {ColorContext,ColorContextProvider}