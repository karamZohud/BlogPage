import React, { Component } from 'react'
import Badge from './Badges'
export default class 
 extends Component {
  render() {
    return (
        <div className='col-12 card mt-3 shadow-lg '>
        <h3 className='card-header p-3'>Tags</h3>
        <div className='card-body p-2'>
<Badge badge="New York"/>
<Badge badge="London"/>
<Badge badge="IKEA"/>
<Badge badge="NORWAY"/>
<Badge badge="DIY"/>
<Badge badge="Ideas"/>
<Badge badge="Baby"/>
<Badge badge="Family"/>
<Badge badge="Clothing"/>
<Badge badge="Shopping"/>
<Badge badge="Sports"/>
            </div>
            </div>
    )
  }
}
