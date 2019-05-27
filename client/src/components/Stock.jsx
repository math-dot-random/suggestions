import React,{Component} from 'react';
import styled from 'styled-components';


const StockBox = styled.div`
background: #1b1b1d;
padding: 20px;
border: 1px solid #0e0d0d ;
margin-right: 12px;

`;

const StockName = styled.div`
color: white;
font-size: 13px;
font-weight: 400;
letter-spacing: 0.25px;
line-height: 19px;
font-weight: 500;
text-decoration: none;
`;

const StockBuyer = styled.div`
color: white;
font-size: 13px;
font-weight: 400;
letter-spacing: 0.25px;
line-height: 19px;
display: inline-block;
margin-top: 5px;
text-decoration: none;  
`;

const StockPrice = styled.h1`
color: #21ce99;
display: block;
font-size: 26px;
font-weight: 500;
letter-spacing: -0.14px;
line-height: 30px;
`;

const StockChange = styled.div`
color: #21ce99;
display: block;
font-size: 13px;
font-weight: 400;
letter-spacing: 0.25px;
line-height: 19px;
`;

class Stock extends React.Component {

  render () {

    
    // var strArr = this.props.value.stock_name.split(" ");
    var buyersPercent = (this.props.value.analyst_buy/100).toFixed(2) + '%';
    var changePercent = (this.props.value.price_change/100).toFixed(2) + '%';
    var stockPrice = '$' + this.props.value.current_stock_price;
    return (

      <StockBox>
        <StockName> {this.props.value.stock_name}</StockName>
        <StockBuyer >{buyersPercent}</StockBuyer>
        <StockPrice > {stockPrice}</StockPrice>
        <StockChange >{changePercent}</StockChange>
      </StockBox>
    )
  }
}
 
 
  export default Stock;