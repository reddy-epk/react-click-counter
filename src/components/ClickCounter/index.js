import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClick = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="clicksy">
        <h1>
          The button has been clicked <span className="red">{count}</span> times
        </h1>
        <p>Click the button to increase the count</p>
        <button onClick={this.onClick} type="button">Click me</button>
      </div>
    )
  }
}
export default ClickCounter
