import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props) {
        super(props)
      
      }
  render() {
    return (

        <li className='list-group-item'>
            <div className='row'>
            <img className=' col-3 post-img' src={this.props.src}/>
          <div className='col-9'>
            <h4 >{this.props.name}</h4>
                <h6>{this.props.des}</h6>

            </div>
        </div>
        </li>
        
        
                
        
    
        

    
    )
  }
}
