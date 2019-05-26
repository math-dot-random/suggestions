import React from 'react'
import axios from 'axios';


class App extends React.Component{
  constructor(props){
    super(props);
      
    this.state = {
      currentStockId: 2,
      relatedStocks: '',
      relatedStocksInfo: ''
    };
  }

  componentDidMount(){ 
    axios.get('/api' + window.location.pathname)
    .then((stock) => {
      // console.log(stock)
      var relatedStockIds = [];
      for(var i = 0 ; i < stock.data.length; i++){
        relatedStockIds.push(stock.data[i].other_stock_id)
      }
      // console.log(relatedStockIds)
      this.setState({
        relatedStocks: relatedStockIds
      })
      // console.log('this is the other one'+this.state.relatedStocks)
    })

    axios.get('/api' + window.location.pathname + '/2')
    .then((stock) => {
      // console.log(stock)
      // console.log(this.state.relatedStocks)
      var relatedStockArr = this.state.relatedStocks;
      var relatedStockData = [];
      relatedStockArr.map ((ele) => {
        for(var i = 0 ; i< stock.data.length; i++ ){
          if(ele === stock.data[i].id){
            // console.log(ele)
            // console.log(stock.data[i].id)
            // console.log(stock.data[i])
            relatedStockData.push(stock.data[i])

            // var stockData = stock.data[i]

            // relatedStockData.push(stockData)

          }
        }
        console.log(relatedStockData)
      })
      // console.log(stock.data)
      // console.log(this.state.relatedStocks)
      // var stockData = [];
      // for(var i = 0 ; i< this.state.relatedStocks.length; i++){
      //   // console.log(this.state.relatedStocks)
      //   for(var j = 0; j< stock.data.length; j++){
      //     if(stock.data[j] === this.state.relatedStocks[i].id){

            
      //       break;
        //   }
        // }
      // }
      // this.setState({
      //   relatedStocksInfo:stockData
      // })
    })
    // console.log(this.state.relatedStocksInfo)
  }

  
  


  

  // +---------------------+--------------+------+-----+---------+----------------+
  // | Field               | Type         | Null | Key | Default | Extra          |
  // +---------------------+--------------+------+-----+---------+----------------+
  // | id                  | int(11)      | NO   | PRI | NULL    | auto_increment |
  // | stock_name          | varchar(255) | YES  |     | NULL    |                |
  // | analyst_buy         | varchar(255) | YES  |     | NULL    |                |
  // | current_stock_price | varchar(255) | YES  |     | NULL    |                |
  // | price_change        | varchar(255) | YES  |     | NULL    |                |
  // +---------------------+--------------+------+-----+---------+----------------+

//   +----------------+---------+------+-----+---------+----------------+
// | Field          | Type    | Null | Key | Default | Extra          |
// +----------------+---------+------+-----+---------+----------------+
// | id             | int(11) | NO   | PRI | NULL    | auto_increment |
// | stock_id       | int(11) | YES  | MUL | NULL    |                |
// | other_stock_id | int(11) | YES  |     | NULL    |                |
// +----------------+---------+------+-----+---------+----------------+

// --------------+
// | id | stock_name                  | analyst_buy | current_stock_price | price_change | id | stock_id | other_stock_id |
// +----+-----------------------------+-------------+---------------------+--------------+----+----------+----------------+
// |  1 | Mueller, Goldner and Zemlak | 958.27      | 540.08              | 356.32       |  1 |        1 |             56 |
// |  1 | Mueller, Goldner and Zemlak | 958.27      | 540.08              | 356.32       |  2 |        1 |             70 |
// |  1 | Mueller, Goldner and Zemlak | 958.27      | 540.08              | 356.32       |  3 |        1 |             77 |
// +----+-----------------------------+-------------+---------------------+--------------+----+----------+----------------+

// select * from stock_info inner join related_stocks where stock_info.id = 1 AND related_stocks.stock_id = stock_info.id;


  // handleClick(event){
  //   axios.get('api/' + window.location.pathname)
  //   .then((stocks) => {
  //     for(var i = 0; i < stocks.data.data1.length; i++){
  //       for(var j = 0; j <stocks.data.data2.length; i++){
  //         if(stocks.data.data1[i].id === stocks.data.data2[j].stock_id){

  //         }
  //       }
  //     }
      
  //     console.log(event)
  //     // for(var i = 0; i< stocks.data.length; i++){
  //     //   if(stock_id === event)
  //     // }
  //     console.log (stocks)
  //   })
  //   .catch((err)=> {
  //     console.log(err)
  //   })
  // }


  // {this.state.relatedStocksInfo[0].stock_name}

  render(){
    // console.log(this.state.relatedStocksInfo)
    // console.log(this.state.relatedStocksInfo[0])
 
    return(

      <div className = "wrap" onClick = {this.handleClick}>
        <h1 id= "heading">People Also Bought</h1>
        
        <a id="stock1" >
          <div id = "upper1">Micron Technology</div>
            <span id = "upper2">56%</span>
          <div>
            <h1 id = "bottom1"> $35.67</h1>
            <span>
                <span id = "bottom2">3.03%</span>
            </span>
          </div>

        </a>

        <a id="stock2" >
          <div id = "upper1">Micron Technology</div>
            <span id = "upper2">56%</span>
          <div>
            <h1 id = "bottom1"> $35.67</h1>
            <span>
                <span id = "bottom2">3.03%</span>
            </span>
          </div>

        </a>

        <a id="stock3" >
          <div id = "upper1">Micron Technology</div>
            <span id = "upper2">56%</span>
          <div>
            <h1 id = "bottom1"> $35.67</h1>
            <span>
                <span id = "bottom2">3.03%</span>
            </span>
          </div>

        </a>
        
        <a id="stock4" >
          <div id = "upper1">Micron Technology</div>
            <span id = "upper2">56%</span>
          <div >
            <h1 id = "bottom1"> $35.67</h1>
            <span>
                <span id="bottom2">3.03%</span>
            </span>
          </div>

        </a>
      </div>
      
    )
  }
}

export default App;
