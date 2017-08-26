import React, {Component} from 'react';
export default class Form extends Component {
  constructor(props) {
    super(props);


  }


  render() {

    return (
      <div className="card col-md-10 text-center myForm">

          <h3>What is your name, pilot?</h3>
          <form className="card-block" onSubmit={this.props.handleSubmit}>
          <input className="form_input" name="name" type="text" placeholder="Enter Your Name" onChange={this.props.handleNameChange} value={this.props.name}/>
          <br></br>
          <button className="btn btn-primary" type="submit" value= "submit">Submit</button>
        </form>
        <div className="show_name">
        <span className='displayName'>{this.props.pilot}</span>
        </div>
      </div>

    )
  }
}
