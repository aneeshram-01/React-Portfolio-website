import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar=()=>{
    const [showMenu, setShowMenu] = useState(false);
    return(
        <nav className='navbar'>
            <img src={logo} alt='Logo' className='logo'></img>
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro'spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='skills'spy={true} smooth={true} offset={-75} duration={500}className='desktopMenuListItem'>Certificate</Link>
                <Link activeClass='active' to='Works'spy={true} smooth={true} offset={-100} duration={500}className='desktopMenuListItem'>Portfolio</Link>
                <Link activeClass='active' to='contact'spy={true} smooth={true} offset={-100} duration={500}className='desktopMenuListItem'>Contact Me</Link>
            </div>
            <img src={menu} alt='Menu' className='mobMenu' onClick={()=>(!showMenu)}/>
            <div className='navMenu' style={{display: showMenu ? 'flex':'none'}}>
                <Link activeClass='active' to='intro'spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills'spy={true} smooth={true} offset={-75} duration={500}className='ListItem' onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='Works'spy={true} smooth={true} offset={-100} duration={500}className='ListItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='contact'spy={true} smooth={true} offset={-100} duration={500}className='ListItem' onClick={()=>setShowMenu(false)}>Contact Me</Link>
            </div>
        </nav>
    )
}
export default Navbar;
