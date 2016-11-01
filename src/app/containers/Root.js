import React, { Component } from "react"


import Navbar from '../components/Navbar'
import Home from '../components/Home'

export default class Root extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    )
  }
}
