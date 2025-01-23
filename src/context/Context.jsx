import { createContext } from "react";

export const Context =createContext();
const ContextProvider =(props)=>{
    const contextValue={

    }
    return (
        <ContextProvider value={contextValue}>
            {props.children}
        </ContextProvider>    )
}
export default ContextProvider