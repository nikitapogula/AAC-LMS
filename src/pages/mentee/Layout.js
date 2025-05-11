import { NavLink } from 'react-router-dom';
import './Layout.css';
export default function Layout () {
    return(
        <div className='layout'>
            <div class="parent-box">
                <div class="icon-box">
                    <div class="icons" id="icon-1"></div>
                    <div class="icons" id="icon-2"></div>
                    <div class="icons" id="icon-3"></div>
                    <div class="icons" id="icon-4"></div>
                    <div class="icons" id="icon-5"></div>
                </div>
            </div>
            <div class="topbox">
                <div class="logo">
                    <img class="logo1" src="logo.png"></img>
                </div>
                <div class="npicons">
                    <img class="np" src="bell.png"></img>
                    <NavLink to="profile"><img class="np" src="profile.png"></img></NavLink>
                </div>
            </div>
        </div>
    )
}