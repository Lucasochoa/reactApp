import React, { Component } from 'react';
import '../App.css';
import StoreItem from './StoreItem.js';
import DetailItemView from './DetailItemView.js'

import peanutButterCookie from '../images/peanutButterCookie.jpg';
import baconCookie from '../images/baconCookie.jpg';
import sausageCookie from '../images/sausageCookie.jpg';

import hellsKitchenPic from '../images/hellsKitchen.png'
import chelseaPic from '../images/chelsea.png'
import sohoPic from '../images/soho.png'
import tribecaPic from '../images/tribeca.png'
import chinaTownPic from '../images/chinaTown.png'



class PlaceSelector extends Component{
    constructor(props) {
      super(props);
      var hellsKitchen = {image: hellsKitchenPic, altText: "dog cookie", description: "Hell's Kitchen"}
      var chelsea = {image: chelseaPic, altText: "dog cookie", description: "chelsea"}
      var soho = {image: sohoPic, altText: "dog cookie", description: "soho"}
      var tribeca = {image: tribecaPic, altText: "dog cookie", description: "tribeca"}
      var chinaTown = {image: chinaTownPic, altText: "dog cookie", description: "china town"}
  
      this.state = {
        inventory: [hellsKitchen, chelsea, soho, tribeca,chinaTown],
        detail: null,
      }
    }
  
  
    selectItem(id) {
      console.log("selected ",id)
      var item = this.state.inventory[id]
      var detailView = <DetailItemView onClose = {(ev) => this.setState({detail: null})} image = {item.image} altText = {item.altText} description = {item.description} />
      this.setState({detail: detailView})
    }
  
  
    renderDetailView() {
      if(this.state.detail !== null)
      {
        return this.state.detail
      }
    }
  
  
    renderInventory() {
      var elements = []
      for(var i=0; i < this.state.inventory.length; i++)
      {
        var item = this.state.inventory[i]
        elements.push(<StoreItem onClick = {this.selectItem.bind(this, i)} image = {item.image} altText = {item.altText} description = {item.description} />)
      }
      return (
        <div>
          {elements}
          {this.renderDetailView()}
        </div>
      )
    }
  
    render() {
      return (
        this.renderInventory()
      );
    }
  }
  
  
  export default PlaceSelector;
  

