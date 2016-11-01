import React , {Component} from 'react'
import axios from 'axios'
export default class Home extends Component {
  constructor () {
    super()
    this.state={url:null}
  }
  handleInput (e) {
    this.setState({channel:e.target.value})
  }
  selectChannel() {
    axios({
      method:"post",
      url:"/twitch",
      data: {
        channel:this.state.channel
      }
    }).then(function (response) {
      console.log(response)
      this.setState({url:"http://player.twitch.tv/?channel=" + response.data.name })
    }.bind(this))

  }
  render () {
    return(
      <div>
        home
        <label>channel name</label>
        <input onChange={this.handleInput.bind(this)}></input>
        <button onClick={this.selectChannel.bind(this)}>Go!</button>
        <iframe
         src="http://player.twitch.tv/?channel={c9sneaky}" 
         height="720"
         width="1280"
         frameborder="0"
         scrolling="no"
         allowfullscreen="true">
     </iframe>
        </div>
    )
  }
}
