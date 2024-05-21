import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faMagnifyingGlass, faHeart, faBriefcase } from '@fortawesome/free-solid-svg-icons'
function Top()
{
    return(
        <div id="header">
            <div id="part1">
                <div>
                <img src="https://previews.123rf.com/images/tony4urban/tony4urban1703/tony4urban170300068/74874331-celtic-black-knot-mystic-religious-symbol-over-white.jpg" alt="React Image" width="36" height="36"/>
                </div>
                <div id="logo">LOGO</div>
                <div id="icons">
                    <div class="iconmargin"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                    <div class="iconmargin"><FontAwesomeIcon icon={faHeart} /></div>
                    <div class="iconmargin"><FontAwesomeIcon icon={faUser} /></div>
                    <div class="iconmargin"><FontAwesomeIcon icon={faBriefcase} /></div>
                    <div class="iconmargin">
                        <select>
                            <option value="Eng">Eng</option>
                        </select>
                    </div>
                </div>
            </div>
            <div id="part2">
                <a href="#">Shop</a>
                <a href="#">Skill</a>
                <a href="#">Stories</a>
                <a href="#">About</a>
                <a href="#">Contact us</a>
            </div>
        </div>
        
    )
}
export default Top;
