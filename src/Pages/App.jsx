import React, { useState } from "react";


//Componentes
import TopBar from "../Components/TopBar/TopBar.jsx";




function App() {


  const [actualFrame, setActualFrame] = useState(null);
  



  return (
    <>
      <TopBar setActualFrame={setActualFrame}/>
      {
        actualFrame
      }
    </>
  );
}

export default App;
