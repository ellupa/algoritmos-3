import { useState } from "react";
import "./TestPage.css";

const data1= [
    {id: 1, nombre: "Viva la Libertad Carajo!" },
    //{id: 2, nombre: "Jorge", apellido: "Martinez" },
    //{id: 3, nombre: "Felipe", apellido: "Intelangelo" },
];
const data2 = [
    {id: 1, nombre: "La casta tiene miedo!"},
    //{id: 2, nombre: "Ezequiel", apellido: "Fuente" },
    //{id: 3, nombre: "Fede", apellido: "Vera" },
];
const TestPage = (props) => {
    const [unnombre, unnombredefuncion] = useState(data1)
    const changeData = () =>{
        unnombredefuncion(data2);
    }
    const volverData=()=>{
        unnombredefuncion(data1);
    }
    const cambiarData=()=>{
        if(unnombre === data1){
            unnombredefuncion(data2);
        }else{
            unnombredefuncion(data1);
        }
    }
    return(
        <div>
            {
                unnombre.map((item)=> {
                    return(
                        <ul class="list-group ">
                            <li class="list-group-item">{item.nombre}   {item.apellido}    {item.id} </li>
                        </ul>                                              
                    );
                })
            }
            <br />
            <button class="btn btn-primary" onClick={()=>cambiarData()}>Cambiar los datos</button>
        </div>
    );
}

export default TestPage;