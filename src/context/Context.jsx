import { createContext } from "react";

export const Context =createContext();
const ContextProvider =(props)=>{
    const onSent =async(prompt) =>{
        await run(prompt)
    }
    onSent("what is react js")
    const contextValue={

    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>    )
}
export default ContextProvider