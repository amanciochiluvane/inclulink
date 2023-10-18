import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import dash from '../../assets/collection.png'
import users from '../../assets/users.png'
import sett from '../../assets/Icon.png'
import log from '../../assets/logout.png'


export default function Navbar(){
    

    return(
        <div className='Navbar'>
           <div className='info'>
            
            <Link to='#' className='opnav'><label  htmlFor="Dashboard"><img className='opnavimg'  src={dash} alt="Dashboard" /></label> <p id='Dashboard' className='op'>Dashboard</p></Link>
            <Link to='#' className='opnav'><label   htmlFor="usuario"><img className='opnavimg'  src={users} alt="Usuarios"  /></label> <p id='usuario' className='op'>Usuário</p></Link>
            
           </div> 

           <div className='tecinfo'>
           <Link to='#' className='opnav'><label  htmlFor="settings"><img className='opnavimg' src={sett} alt="Settings"  /></label> <p id='settings' className='op'>Settings</p></Link>
           <Link to='#' className='opnav'><label  htmlFor="logout" ><img className='opnavimg'  src={log} alt="Logout"  /></label> <p id='logout' className='op'>Sign-out</p></Link>
            
            
           </div>
        </div>
    )
}