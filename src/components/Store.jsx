import React, { Component } from 'react';
import '../App.css';
import StoreItem from './StoreItem.js';
import DetailItemView from './DetailItemView.js'

import hellsKitchenPic from '../images/hellsKitchen.png'
import chelseaPic from '../images/chelsea.png'
import sohoPic from '../images/soho.png'
import tribecaPic from '../images/tribeca.png'
import chinaTownPic from '../images/chinaTown.png'

class Store extends Component{
    constructor(props) {
      super(props);
      var hellsKitchen = {image: hellsKitchenPic, altText: "dog cookie", description: "Hell's Kitchen", information:"Hell's Kitchen, also known as Clinton, is a neighborhood on the West Side of Midtown Manhattan in New York City. It is traditionally considered to be bordered by 34th Street to the south, 59th Street to the north, Eighth Avenue to the east, and the Hudson River to the west. The area provides transport, medical, and warehouse-infrastructure support to Midtown's business district."}
      var chelsea = {image: chelseaPic, altText: "dog cookie", description: "chelsea", information:"Chelsea is a neighborhood on the West Side of the borough of Manhattan in New York City. The district's boundaries are roughly 14th Street to the south, the Hudson River and West Street to the west, and Sixth Avenue to the east, with its northern boundary variously described as near the upper 20s[2][3] or 34th Street, the next major crosstown street to the north.[4][5]"}
      var soho = {image: sohoPic, altText: "dog cookie", description: "soho", information: "SoHo, sometimes written Soho,[2] is a neighborhood in Lower Manhattan, New York City, which in recent history came to the public's attention for being the location of many artists' lofts and art galleries, but is now better known for its variety of shops ranging from trendy upscale boutiques to national and international chain store outlets. The area's history is an archetypal example of inner-city regeneration and gentrification, encompassing socioeconomic, cultural, political, and architectural developments.[3]"}
      var tribeca = {image: tribecaPic, altText: "dog cookie", description: "tribeca", information: "Tribeca /traɪˈbɛkə/, originally written as TriBeCa, is a neighborhood in Lower Manhattan, New York City. Its name is a syllabic abbreviation from , or more accurately, a trapezoid, is bounded by Canal Street, West Street, Broadway, and either Chambers, Vesey, or Murray Streets."}
      var chinaTown = {image: chinaTownPic, altText: "dog cookie", description: "china town", information:"Manhattan's Chinatown (simplified Chinese: 曼哈顿华埠; traditional Chinese: 曼哈頓華埠; pinyin: Mànhādùn huábù; Jyutping: Maan6haa1deon6 waa1bou6) is a neighborhood in Lower Manhattan, New York City, bordering the Lower East Side to its east, Little Italy to its north, Civic Center to its south, and Tribeca to its west. Chinatown is home to the highest concentration of Chinese people in the Western Hemisphere.[1] With an estimated population of 90,000 to 100,000 people, Manhattan's Chinatown is also one of the oldest Chinese ethnic enclaves.[2]"}
  
      this.state = {
        inventory: [hellsKitchen, chelsea, soho, tribeca,chinaTown],
        detail: null,
      }
    }
  
  
    selectItem(id) {
      console.log("selected ",id)
      var item = this.state.inventory[id]
      var detailView = <DetailItemView onClose = {(ev) => this.setState({detail: null})} image = {item.image} altText = {item.altText} description = {item.description} information = {item.information} />
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
        elements.push(<StoreItem onClick = {this.selectItem.bind(this, i)} image = {item.image} altText = {item.altText} description = {item.description} information = {item.information} />)
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
  
  
  export default Store;
  

