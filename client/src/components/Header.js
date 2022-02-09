import React, {useContext} from 'react'
import styles from './Header.module.css';
import {Link, useNavigate} from 'react-router-dom';
import {UserAuthContext} from '../Contexts/Contexts'

export default function Header() {

    const userAuthCtxValue = useContext(UserAuthContext);
    let navigate = useNavigate();

    let loggedInRoutes = 
        <>
         <Link to="login"> <button> Login </button></Link>
        </>

        if(userAuthCtxValue.jwt) {
            loggedInRoutes=
        <>
        <Link to='/manager'> <button> Manager </button></Link>
        <Link to = "cart"> <button> Cart </button> </Link>
        <button onClick={() => {
            userAuthCtxValue.logout()
            window.location.reload(false)
        } }> Logout </button>
        </>            
        }

    return (
        <nav className = {styles.container}>
            <Link to="">
                <h1 className = {styles.logo}> AWAFOOD </h1>
            </Link>
            
            <div className = {styles.navmenu}>
                {loggedInRoutes}
            </div>
        </nav>
    )
}
