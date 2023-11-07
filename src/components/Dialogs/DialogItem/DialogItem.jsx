import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let myPath = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={myPath}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;
