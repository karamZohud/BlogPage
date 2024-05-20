import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className='container-flude bg-black mt-5'>
        <div className='container pt-3' >
        <button type="button" class="footer-button bg-black text-white btn-disable me-2">Previous</button>
                <button type="button" class="footer-button bg-black text-white w-25">Next</button>
        </div>
      </div>
    )
  }
}
