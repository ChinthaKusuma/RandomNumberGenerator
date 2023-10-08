// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  change1 = () => {
    this.setState({
      count: Math.ceil(Math.random() * 10),
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="bgContainer">
        <div className="bgContainer1">
          <h1 className="heading">Random Number</h1>
          <p className="para">Generate random number in the range 0 to 100</p>
          <button className="btn1" type="button" onClick={this.change1}>
            Generate
          </button>
          <h1 className="heading">{count}</h1>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
