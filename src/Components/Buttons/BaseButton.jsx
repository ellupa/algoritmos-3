import "./BaseButton.css";

const BaseButton = (props) => {


    return(
        <>
            <button onClick={(e) => {props?.callBack(props?.params)}} className="base-button">{props.text}</button>
        </>
    )
}

export default BaseButton;