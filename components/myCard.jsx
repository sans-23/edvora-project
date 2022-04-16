import "./myCard.css"
import React, { Component }  from 'react';

class Card extends Component {
    render() { 
        return (
            <div className="main-section">
                <div className="tab-bar">
                <div className="ride">
                    <span className="ride-text">Nearest rides</span>
                </div>
                <div className="ride">
                    <span className="ride-text">Upcoming rides (4)</span>
                </div>
                <div className="ride">
                    <span className="ride-text">Past rides (2)</span>
                </div>

                <span className="ride">
                    <i className="fa fa-filter"></i>&nbsp;
                    <span>Filters</span>
                </span>
                </div>

                <div className="list">
                <div className="list-item">
                    <div className="thumbnail">
                    <img
                        src="assets/images/img_avatar.png"
                        className="img"
                        alt="Avatar"
                    />
                    </div>

                    <div className="content">
                    <div className="content-text">Ride Id : 002</div>
                    <div className="content-text">Origin Station : 20</div>
                    <div className="content-text">
                        station_path : [20, 39, 40, 42, 54, 63, 72, 88, 98]
                    </div>
                    <div className="content-text">Date : 15th Feb 2022 16:33</div>
                    <div className="content-text">Distance : 0</div>
                    </div>
                    <div className="tag">
                    <span className="tag-text">City</span>
                    </div>
                    <div className="tag">
                    <span className="tag-text">State</span>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
 
export default Card;