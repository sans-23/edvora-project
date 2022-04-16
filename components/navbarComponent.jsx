import React, { Component } from 'react';
import "./navbarComponent.css"

class Navbar extends Component {
    
    render() { 
        return (
            <div className="mynavbar">
                    <div className="logo">
                        <h1>Edvora</h1>
                    </div>

                    <div className="user">
                        <div className="name">
                            <h3>Dhruv singh</h3>
                        </div>
                        <div className="profile-pic">
                            <img
                            src="assets/images/img_avatar.png"
                            alt="Avatar"
                            className="pic"
                            width="44"
                            height="44"
                            />
                        </div>
                    </div>
            </div>
              
        );
    }
}
 
export default Navbar;