import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export const Nav = () => {


    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return (
        <div className='nav'>


            {
                isAuthenticated ?
                    (<button onClick={() => logout({ returnTo: window.location.origin })
                    }>
                        Log Out
                    </button>) :
                    (<button onClick={() => loginWithRedirect()}>Log In</button>)
            }

{isAuthenticated && <p>{user.email}</p>}

        </div>
    )
}
