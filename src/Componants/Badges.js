import React, { Component } from 'react'

export default class Badge extends Component {
constructor(props) {
  super(props)
}
  render() {
    return (
        <span class="badge bg-secondary me-1">{this.props.badge}</span>
    )
  }
}
