import React, { Component } from 'react';
import '../App.css';


class DetailItemView extends Component{

  render() {
    return (
      <div className="detailPane">
        <div className="Xout" onClick={this.props.onClose}>x</div>
        <div className="detailPane-inner">
          <img className="productImageDetail" src={this.props.image} alt={this.props.altText} />
          <div className="productLabel">{this.props.description}</div>
          <p className= "productLabel">{this.props.information}</p>
        </div>
      </div>
    );
  }
}


export default DetailItemView;
