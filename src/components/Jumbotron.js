import React, {
  Component
} from 'react'

export default class Jumbotron extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <div className = "jumbotron" >
      <h1 className = "display-3" > Star Wars < /h1>

      <p className = "lead" > The Vehicles of Star Wars < /p>
      </div>

    )
  }
}
