import React from 'react';
// import './App.css';
import { ChakraProvider}  from "@chakra-ui/react";

function App() {
  return (
<ChakraProvider>
    <div className="App">
      Hello
    </div>
    </ChakraProvider>
  );
}

export default App;
