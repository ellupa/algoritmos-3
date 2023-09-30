import "./DataGrid.css"


const DataGrid = (props) => {

    console.log(props);

    return(
        <div className="data-grid-main">
            {
                props.dummyData.map((item, index) => {
                    return(
                        <div key={index} style={{display:'flex', flexDirection:'row', minWidth:'80vw', justifyContent:'space-evenly'}}>
                            <p>{item.id}</p>
                            <p>{item.name}</p>
                            <p>{item.state}</p>
                        </div>
                    );
                })
            }
            
        </div>
    )
}

export default DataGrid;