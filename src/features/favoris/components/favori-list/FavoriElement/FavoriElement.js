import React, { Component } from "react";
import Style from './FavoriElement.module.scss';

export default class FavoriElement extends Component {

    render () {
        const { favori } = this.props;
        return (
            <div className={ "border d-flex flex-column m-1 bg-light " + Style.container }>
                <img alt="" width="250" height="350" src={ favori.img } />
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{ favori.title }</h5>
                    <hr className="w-100" />
                    <span className="flex-fill">{ favori.details }</span>
                    <div className="d-flex flex-row justify-content-end">
                        <button onClick={ this.props.removeFavori } className="btn btn-small btn-danger">Remove</button>
                    </div>
                </div>
            </div>
        );
    }

}