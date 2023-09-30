import React, { Fragment, useEffect, useState } from "react";
import Start from "./Start/Start.jsx";
import DataGrid from "./DataGrid/DataGrid.jsx";


function App() {

  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    console.log(dummyData);
  }, []);

  return (
    <Fragment>
      {
        true ? 
          <Start setDummyData={setDummyData} test={"Esto es una prueba de pasaje."}/>
        :
          <DataGrid dummyData={dummyData}/>
      }
    </Fragment>

  );
}

export default App;
