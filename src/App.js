import React from 'react';
import './App.css';
import Input from './components/Markdwon'
import Output from './components/TextOutput'
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {

  state = {
  text : '# ¡Hola! ...Bienvenido a mi React Markdown Previewer!'

    

  }

  updateState = (markdown) =>{
    this.setState({
      text : markdown
    })

  
  }
  render(){
  return(
    <div className="App ">
      <h1 className= 'title'>Markdown </h1>
      <div className = 'markdo'>
        <label className=" text-center ">Write you text!</label>
        <div className="col-sm-12 ">

         <Input update = {this.updateState} val = {this.state.text}/>
      </div>
      </div>
      <div className='out '>
      <label>Output text</label>
       <Output txt = {this.state.text}/>
      </div>
      
    </div>
  )


  }
}

export default App;