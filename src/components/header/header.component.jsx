import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';
import { getAuth, signOut } from "firebase/auth";

function Header({currentUser}) {
    
    return (
            <div className="header">
                <Link className="logo-container" to="/">
                    <Logo className="logo"/>
                </Link>
                <div className="options">
                    <Link className="option" to="/shop" >
                        SHOP
                    </Link>
                    <Link className="option" to="/contact" >
                        CONTACT
                    </Link>
                    {
                        currentUser ?
                        <div className='option' onClick={() => 
                                signOut(auth).then(() => {
                                    
                                    console.log(currentUser)
                                }).catch((error) => {
                                    console.log(error)
                                })
                        }>
                            Sign out
                        </div>
                        :
                        <Link className='option' to='/signin'>
                            Sign in
                        </Link>
                    }
                </div>
            </div>
    )
}

export default Header
