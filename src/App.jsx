import React from 'react'
import ContextProvider from "./context/Context"
import Sidebar from './Components/Sidebar/Sidebar'
import Main from'./Components/Main/Main'
const App = () => {
  const handleSent = (prompt) => {
    console.log("Prompt Sent:", prompt);
  };

  return (
    <ContextProvider>
      <Sidebar onSent={handleSent}/>
      <Main/>
      </ContextProvider>
  )
}

export default App;
