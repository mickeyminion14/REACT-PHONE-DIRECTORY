import React from 'react';
import Aux from '../hoc/Aux'


const subscriber = (props) => {
  return (
    <Aux>

      
     
        <div>
        {props.directoryList.map( (subscriber, index) =>
        <div key={index} className="columns  ">
          <div className="column">{ subscriber.name }</div>
          <div className="column">{ subscriber.phone }</div>
          <div onClick = {() => props.deleteSubscriber(index)} className="column"><button  className ="button is-danger">DELETE</button></div>
        </div>
        )}
        </div>
        

      
      
    </Aux>
  );
}

export default subscriber;