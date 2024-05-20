import React, { Component } from 'react'

export default class TitleCompnants extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
       
     
       <div className='card shadow-lg mb-4'>
          <img className='header-img col-12'  src={this.props.src} />
<div className='card-body'>
<h4 className='mb-1'>{this.props.title}</h4>
<p>Title description,<span className='text-secondary ms-2'>{this.props.date}</span> </p>
<p>{this.props.desc}</p>
<div className='container-fluid'>
    <button className='btn btn-outline-secondary'>Read More  </button>
    <span className='float-end p-2 '>Comments<span className='bg-black text-white p-2 ms-2'>{this.props.numComments}</span></span>
</div>
</div>
       </div>

     
    )
  }
}
