import React, { Component } from 'react';

const imagestyle = {
    height: "20vh",  
      width: "20vw",
      };

class eco extends Component {

  constructor(props){
    super(props);
    this.state = {
      ecos: []
    }
  }

  componentWillMount() {
    fetch('/eco', {
      method: "GET",
      headers:{
        "Content-Type": "application/json;charset=UTF-8",
        'Accept': 'application/json',
        },
      mode:"cors",
    }).then( res => {
      return res.json();
    })
    .then( ecos => {
      this.setState({ecos: ecos});
      console.log( "Network success - eco : ", ecos );
    })
    .catch( error =>
      console.log( "Network Error : ", error )
    );
  }

  render() {
    return (
      <div className='container'>
      <div className='App'>
        <h1> 경제 카테고리 </h1><br/><br/>
        <div class="container input-group mb-1">
        <input class="form-control" id="search-input"></input>
        <button class="input-group-append btn btn-danger" id="search">검색</button>
        </div>
        <table>
           <tbody>
               <tr className='trList'>
                {
                this.state.ecos.map ( eco =>
                   <td className='cell' key={eco._id}>
                       <div className='inner'>
                          <h3>{eco.title}</h3>
                          <img src={eco.img} style = {imagestyle}/>
                        </div>
               </td>
                )}
            </tr>
         </tbody>
          </table>
      </div>
      </div>

    );
  }
}



export default eco;