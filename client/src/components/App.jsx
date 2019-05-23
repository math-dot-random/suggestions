import React from 'react'
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
      
    this.state = {
      relatedStockName: '',
      buyersPercent: '',
      stockPrice: '',
      changePercent:''
    };
  }
  

  handleClick(event){
    axios.get('/api/suggestions')
    .then((data) => {
      console.log (data)
    })
    .catch((err)=> {
      console.log(err)
    })
  }



  render(){
    return(

      <div className = "wrap" onClick = {this.handleClick}>
        <h1 id= "heading">People Also Bought</h1>
        <a id="stock1" href="https://html.com">
          <div id = "upper1">Micron Technology</div>
            <span id = "upper2">56%</span>
          <div>
            <h1 id = "bottom1"> $35.67</h1>
            <span>
                <span id = "bottom2">3.03%</span>
            </span>
          </div>

        </a>

        <a id="stock2" href="https://html.com">
          <div id = "upper1">Micron Technology</div>
            <span id = "upper2">56%</span>
          <div>
            <h1 id = "bottom1"> $35.67</h1>
            <span>
                <span id = "bottom2">3.03%</span>
            </span>
          </div>

        </a>

        <a id="stock3" href="https://html.com">
          <div id = "upper1">Micron Technology</div>
            <span id = "upper2">56%</span>
          <div>
            <h1 id = "bottom1"> $35.67</h1>
            <span>
                <span id = "bottom2">3.03%</span>
            </span>
          </div>

        </a>
        
        <a id="stock4" href="https://html.com">
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