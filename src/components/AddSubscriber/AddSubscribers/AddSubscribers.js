import React , {Component} from 'react';
import Aux from '../../hoc/Aux'

class AddSubscribers extends Component {

  constructor(props) {
    super(props);
    this.addSubscriberHandler = this.addSubscriberHandler.bind(this);
    console.log(props);
  }

  state = {
    name : "",
    phone : ""
  }

  handleChangeName = (e) => {
    this.setState({ name: e.target.value });
 
  }
  handleChangePhone = (e) => {
    this.setState({ phone: e.target.value });
 
  }                         

  addSubscriberHandler = () => {
    // console.log(this.props.msg);
    this.props.addSubscriber(this.state.name,this.state.phone);

    this.setState({name:"",phone : ""});
  }

  render(props) {
    return (
      <Aux>
        <div>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input 
                    style={{width :"200px"}} className="input" type="text" placeholder="Name" 
                    value={this.state.name} onChange={this.handleChangeName}/>
            </div>
          </div>

          <div className="field">
            <label className="label">Phone</label>
            <div className="control">
              <input 
                    style={{width :"200px"}} className="input" type="text" placeholder="Phone"
                    value={this.state.phone} onChange={this.handleChangePhone}/>
            </div>
          </div>
          <div>
          <p>Subscriber to be added :</p>
          <p>Name : {this.state.name}</p>
          <p>Phone : {this.state.phone}</p>  
          </div> 
          <div >
            <button onClick={()=>this.addSubscriberHandler()} style = {{marginTop:"20px"}}  className ="button is-primary">ADD</button>
          </div>     
        </div>
      </Aux>
    );
  }
}

export default AddSubscribers;