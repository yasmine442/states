import React from 'react'
import logo from './logo.svg'

class App extends React.Component{

  state={
    fullName:'jihen',
    bio:'douane',
    imgSrc:logo, 
    profession:'je suis au calme',
    show:false,
    date:'16'
  }

  componentDidMount(){
    let dateee = new Date().getMinutes()
    setInterval(()=>{
      this.setState({date:dateee})
    },1000)
  }


  render(){
    return(
      <>

      {
        this.state.show && (<><p>{this.state.fullName}</p>
          <p>{this.state.bio}</p>
          <p>{this.state.profession}</p>
          <img src={this.state.imgSrc} /></>)
      }
 <button onClick={()=>this.setState({show:!this.state.show})}>change</button>
 <p>{this.state.date}</p>


      </>
    )
  }
}

export default App;
