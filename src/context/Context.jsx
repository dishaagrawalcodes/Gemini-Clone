import { createContext, useState } from "react";
import run from "../config/gemini"
export const Context =createContext();
const ContextProvider =(props)=>{
    const [input,setInput] =useState("");
    const [recentPrompt,setRecentPrompt]=useState("");
    const [prevPrompt,setPrevPrompt]= useState(
        JSON.parse(localStorage.getItem("prevPrompts")) || [] // Load from localStorage
      );
    const [showResult,setShowResult]=useState(false);
    const [loading,setLoading]=useState(false);
    const [resultData,setResultData]=useState("");
    const delayPara =(index,nextWord)=>{
    setTimeout(function(){
          setResultData(prev=>
            prev+nextWord);
    },75*index)
    }
    const onSent = async (prompt) => {
        if (prompt.trim() === "") return; 
          setInput(""); // Clear input field immediately
        setResultData("");
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(prompt)
       
        const response = await run(prompt)
        let responseArray =response.split("**");
        let newResponse="";
        for(let i=0;i< responseArray.length;i++){
            if(i===0||i%2!==1){
           newResponse +=responseArray[i];
            }
            else{
                newResponse +="<b>" +responseArray[i]+"</b>";
            }
        }
        let newResponse2 =newResponse.split("*").join("<br>")
        let newResponseArray=newResponse2.split(" ");
        for(let i=0;i<newResponseArray.length;i++){
            const nextWord =newResponseArray[i];
            delayPara(i,nextWord+" ")
        }
        setPrevPrompt((prev) => {
            const updatedPrompts = [
              ...prev,
              { prompt, response: newResponse2 }, // Store prompt and response
            ];
            localStorage.setItem("prevPrompts", JSON.stringify(updatedPrompts)); // Save to localStorage
            return updatedPrompts;
          });
        setLoading(false);
        
    }
    const handlePromptClick = (selectedPrompt) => {
        setRecentPrompt(selectedPrompt.prompt);
        setResultData(selectedPrompt.response);
        setShowResult(true);
      };
    const clearPrompts = () => {
        setPrevPrompt([]);
        localStorage.removeItem("prevPrompts");
      };
      
    const contextValue={
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,setInput,
        clearPrompts,
        handlePromptClick,
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>    )
}
export default ContextProvider;