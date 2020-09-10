import React, { Component } from 'react';
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        
        return ( 
            <textarea rows="10" className="form-control  " onChange={(e)=>this.props.update(e.target.value)} value={this.props.val}></textarea>
         );
    }
}
 
export default Input;