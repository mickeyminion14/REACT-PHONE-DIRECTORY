import React from 'react';
import Aux from '../hoc/Aux'
import  './DisplaySubscribe.css'
import Subscriber from '../Subscriber/subscriber'
const DisplaySubscriber = (props) => {  
  return(
      <Aux>
        <div className = "main">
          <div >
          <button onClick ={props.changeAddVisibility}  className ="button is-primary">Add</button>
          </div>

          <div className="columns subscribers ">
            <div className="column">NAME</div>
            <div className="column">PHONE</div>
          </div>
          <div className = " subscriber">
            <Subscriber directoryList = {props.directoryList} deleteSubscriber = {props.deleteSubscriber}/>
          </div>
        </div>
      </Aux>
    )
  }

export default DisplaySubscriber;