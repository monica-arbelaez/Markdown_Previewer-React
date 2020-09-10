  
import React, { Component } from 'react';
const marked = require('marked')

class Output extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    markDown(text){
        return {__html:text};
    }
    render() { 

        let {txt} = this.props

        return ( 
            <div
            dangerouslySetInnerHTML = {this.markDown(marked(txt))}
            className="output" />
         );
    }
}
 
export default Output;  
  
