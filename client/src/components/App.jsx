import React, {Component} from 'react'
import axios from 'axios';
import Stock from './Stock.jsx';
import styled from 'styled-components';


const AppWrap = styled.section`
  padding: 1em;
  background: #1b1b1d;
  color: white;
  font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
  text-decoration: none;
  
`;

const RelatedStocksWrap = styled.section`
width: 160.5px;
height: 184px;
display: flex;
flex-direction: row
text-decoration: none;
`;


class App extends React.Component{
  constructor(props){
    super(props);
      
    this.state = {
      currentStockId: 2,
      relatedStocks: [],
      relatedStocksInfo: []
    };
  }

  componentDidMount(){ 
    axios.get('/api' + window.location.pathname)
    .then((stock) => {
      var relatedStockIds = [];
      for(var i = 0 ; i < stock.data.length; i++){
        relatedStockIds.push(stock.data[i].other_stock_id)
      }
      this.setState({
        relatedStocks: relatedStockIds
      })
    })

    axios.get('/api' + window.location.pathname + '/2')
    console.log(window.location.pathname.pathname)
    .then((stock) => {
      var relatedStockArr = this.state.relatedStocks;
      var relatedStockData = [];
      relatedStockArr.map ((ele) => {
        for(var i = 0 ; i< stock.data.length; i++ ){
  
          if(ele === stock.data[i].id){
            relatedStockData.push(stock.data[i])
          }
        }
      })
      this.setState({
        relatedStocksInfo:relatedStockData
      })
    })
  }

  render(){
    var stockArr = this.state.relatedStocksInfo;
    return(
      <AppWrap>
        <h1 id= "heading">People Also Bought</h1>
       <RelatedStocksWrap >{stockArr.map(stock => <Stock value={stock} handleClick = {this.handleClick} key={stock.id}/>)}</RelatedStocksWrap>
      </AppWrap>
    )
  }
}

export default App;
