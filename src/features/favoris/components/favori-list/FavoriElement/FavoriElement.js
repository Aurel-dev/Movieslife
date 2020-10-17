import React, { Component } from "react";
import Style from './FavoriElement.module.scss';

export default class FavoriElement extends Component {

    render () {
        return (
            <div className={ "border d-flex flex-column m-1 bg-light " + Style.container }>
                <img alt="" width="250" height="350" src={ this.props.favori.img } />
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{ this.props.favori.title }</h5>
                    <hr className="w-100" />
                    <span className="flex-fill">{ this.props.favori.details }</span>
                    <div className="d-flex flex-row justify-content-end">
                        <button onClick={ () => {this.props.removeFavori(this.props.favori.title) }} className="btn btn-small btn-danger">Remove</button>
                    </div>
                </div>
            </div>
        );
    }

}