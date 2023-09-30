import BaseButton from "../../Components/BaseButton";

import { getDummyData } from "../../Services/Dummy.js";

const Start = (props) => {

    console.log(props);


    const loadData = async () => {
        let rsp = await getDummyData();
        
        props.setDummyData(rsp);
    }

    return(
        <div>
            <BaseButton callBack={loadData} text="Cargar Data"/>
        </div>
    )
}

export default Start;