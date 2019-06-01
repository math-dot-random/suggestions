import React, {Component} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Stock from './Stock.jsx';

const AppWrap = styled.section`
  padding: 1em;
  background: #1b1b1d;
  color: white;
  font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
  text-decoration: none;
`;

const Title = styled.div`
  color: white;
  font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.14px;
  line-height: 30px;
`;

const RelatedStocksWrap = styled.section`
  width: 160.5px;
  height: 184px;
  display: flex;
  flex-direction: row
  text-decoration: none;
  margin-top: 25px
`;

class App extends React.Component{
  constructor(props){
    super(props);
      
    this.state = {
      currentStockId: null,
      relatedStocks: [],
      relatedStocksInfo: []
    };
  }

  componentDidMount(){ 
    axios.get('/api/stocks'+window.location.pathname)
    .then((stock) => {
      console.log(stock.data.data1)
      var relatedStockIds = [];
      for(var i = 0 ; i < stock.data.data1.length; i++){
        relatedStockIds.push(stock.data.data1[i].other_stock_id)
      }
      console.log(relatedStockIds)
   
      var relatedStockArray = [];
      
      relatedStockIds.forEach(function(id) {
        for(var i = 0 ; i < stock.data.data2.length; i++ ){
          if(id === stock.data.data2[i].id){
            console.log('id', id)
            console.log('idfdfd', stock.data.data2[i].id)
            relatedStockArray.push(stock.data.data2[i]);
          } else {
            console.log('error')
          }
        }
        return relatedStockArray;
      })
      this.setState({
        relatedStocks: relatedStockIds,
        relatedStocksInfo: relatedStockArray
      })
    })
  }

  render(){
    var stockArr = this.state.relatedStocksInfo;
    console.log('array',stockArr)
    return(
      <AppWrap>
        <Title >People Also Bought</Title>   
       <RelatedStocksWrap >{stockArr.map(stock => <Stock value={stock} handleClick = {this.handleClick} key={stock.id}/>)}</RelatedStocksWrap>
      </AppWrap>
    )
  }
}

export default App;