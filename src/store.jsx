import { createContext, useContext, useState } from "react";

const StoreContext = createContext()

const initialstate = {
    variable: null,
    array: []
}

export function StoreProvider(props){
    const[state, setState] = useState(initialstate)
    return(
        <StoreContext.Provider value= {{
            ...state,
            setState
        }}>
            {props.children}
            </StoreContext.Provider>
    )
}
export const useStore = () => useContext(StoreContext)