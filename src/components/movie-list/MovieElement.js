import React, { Component } from "react";

export default class MovieElement extends Component {

    render () {
        return (
            <div className="w-25 p-2">
                <div className="card">
                    <img src="http://fr.web.img5.acsta.net/r_640_360/newsv7/20/06/09/20/43/3300763.jpg" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">GLADIATOR</h5>
                        <p className="card-text">g2N2RAL mAXIMUS</p>
                    </div>
                </div>
            </div>
        );
    }

}