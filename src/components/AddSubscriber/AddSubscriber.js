import React from 'react';
import Aux from '../hoc/Aux'
import AddSubscribers from './AddSubscribers/AddSubscribers'

const  AddSubscriber =  (props) => {
  console.log(props);
   return(
    <Aux>
    <div className = "main">
      <div >
      <button onClick= {props.changeAddVisibility} className ="button">BACK</button>
      </div>
    </div>
    <div className ="main">
      <AddSubscribers addSubscriber = {props.addSubscriber} changeAddVisibility = {props.changeAddVisibility}/>
    </div>
    </Aux>
   )
 }

export default AddSubscriber;