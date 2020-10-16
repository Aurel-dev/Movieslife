import React, { Component } from "react";
import Style from './MovieElement.module.scss';

export default class MovieElement extends Component {


    mouseEnter = () => {
        this.props.updateSelectedMovie(this.props.movie.title)
    }

    render () {
        return (
            <div onClick={ this.mouseEnter } className={ "border d-flex flex-column m-1 bg-light " + Style.container }>
                <img alt="" width="250" height="350" src={ this.props.movie.img } />
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{ this.props.movie.title }</h5>
                    <hr className="w-100" />
                    <span>{ this.props.movie.details }</span>
                </div>
            </div>
        );
    }

}