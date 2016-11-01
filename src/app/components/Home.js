import React , {Component} from 'react'
import axios from 'axios'
export default class Home extends Component {
  constructor () {
    super()
  }
  componentWillMount() {
    axios({
      method:"get",
      url:"/twitch",
      data: {
        channel:"first"
      }
    }).then(function (response) {
      console.log(response)
    })

  }
  render () {
    return(
      <div>
        home
      </div>
    )
  }
}
