import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faMagnifyingGlass, faHeart, faBriefcase } from '@fortawesome/free-solid-svg-icons'
function Item(props)
{
    return(
        <div id="itemcontainer">
            <img src={props.image} width="90"/>
            <h3>{props.title}</h3>
            <div>
            <div><b>Price Rs:</b> {props.price}</div>
            <div><FontAwesomeIcon icon={faHeart} /></div>
            <div></div>

            </div>
        </div>
    );
}
export default Item;