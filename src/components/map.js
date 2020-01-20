import React, { Component } from 'react'
import { Map } from 'react-leaflet'

export default class MyMap extends Component {
  render() {
    
    const { options } = this.props

    if (typeof window !== 'undefined') {
      return (
        <Map {...options}>
          {/* Map code goes here */}
        </Map>
      )
    }
    return null
  }
}