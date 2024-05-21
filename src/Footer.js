import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faMagnifyingGlass, faHeart, faBriefcase } from '@fortawesome/free-solid-svg-icons'
function Footer()
{
    return(
    <div id="footer">
        <div>
            <div>
                <h3>Be the first to know</h3>
                <small>Sign up for updates from mettā muse.</small>
                <div>
                    <div><input type="email" placeholder="Enter the email"></input></div>
                    <div><button>SUBSCRIBE</button></div>
                </div>
            </div>
            <div>
                 <div>
                    <h3>Contact us</h3>
                    <small>+44 221 133 5360</small>
                    <br />
                    <small>customercare@mettamuse.com</small>
                 </div>
                 <div>
                    <h3>Currency</h3>
                    <small><img src="https://cdn-icons-png.flaticon.com/512/197/197374.png"  width="20"alt="" /></small>
                    <small> -USD</small>
                    <br/>
                    <small>Transactions will be completed in Euros and a currency reference is available on hover.</small>
                 </div>
            </div>
        </div>
        <div>
            <div>
                <h3>mettā muse</h3>
                <a href="#">About Us</a>
                <br />
                <a href="#">Stories</a>
                <br />
                <a href="#">Artisans</a>
                <br />
                <a href="#">Boutiques</a>
                <br />
                <a href="#">Contact Us</a>
                <br />
                <a href="#">EU Complainces Docs</a>
            </div>
            <div>
            <h3>Quick Links</h3>
                <a href="#">Orders & Shipping</a>
                <br />
                <a href="#">Join and login as a seller</a>
                <br />
                <a href="#">Stories</a>
                <br />
                <a href="#">Payment & Pricing</a>
                <br />
                <a href="#">Return & Refunds</a>
                <br />
                <a href="#">FAQs</a>
                <br />
                <a href="#">Privacy Policy</a>
                <br />
                <a href="#">Terms & Conditions</a>

            </div>
            <div>
                <div>
                    <h3>follow Us</h3>
                    <div>
                         <a href="#"><img src='https://cdn-icons-png.flaticon.com/512/3621/3621435.png' width="24"></img></a>
                         <a href="#"><img src='https://i.pinimg.com/736x/92/d1/db/92d1db1521d374335498624cc95e9554.jpg' width="24"></img></a>
                    </div>
                </div>
                <div>
                    <h3>mettā muse Accepts</h3>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrUbsimhEgij8z-JeY2oAXSBUbw47Hsq2XyfmTeQ_Z_g&s' width="30"></img>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiGuHaDcARycUBrarwQZYQXXaWmumJj4M_x0F4AHoYeg&s' width="30"></img>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkRS6l5FB02mdBOHLQrhPyrBRON94Q3KrKK5V5zmwiQ&s' width="30"></img>
                    <img src='https://download.logo.wine/logo/Apple_Pay/Apple_Pay-Logo.wine.png' width="30"></img>
                </div>

            </div>

        </div>
        <div>
            <small>Copyright © 2023 mettamuse. All rights reserved.</small>
        </div>
    </div>
    );

}
export default Footer;