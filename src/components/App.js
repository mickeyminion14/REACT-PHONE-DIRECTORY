import React, { Component } from 'react';

import Aux from './hoc/Aux';
import Layout from './Layout/Layout'
import AddSubscriber from './AddSubscriber/AddSubscriber';
import DisplaySubscriber from './DisplaySubscriber/DisplaySubscriber';

class App extends Component {
  componentDidMount() {
    console.log(window.location.href);
  }

  state = {
    NavbarName : "PHONE DIRECTORY",

    directoryList : [],

    addVisibility : false,
   
  }

  changeNavbarName = () => {
    this.setState( { NavbarName: "ADD SUBSCRIBER" } );
    
  }
  addSubscriber = (name,phone) => {
    if(name==="" || phone ==="") {
      alert("Field empty");
    }
    else {
    const newSubsObj = {name: name, phone :phone};
    // this.state.directoryList.push(newSubsObj);
    this.setState({ directoryList: [...this.state.directoryList, newSubsObj]});
    }
  }

  deleteSubscriber = (index) => {
    const newdirectoryList = [...this.state.directoryList];
    newdirectoryList.splice(index,1);
    this.setState({directoryList : newdirectoryList});
  }

  changeAddVisibility = () => {
    let str = "";
    if(!this.state.addVisibility) {
      str  = " ADD SUBSCRIBER";
      window.history.pushState('add', 'addSubscriber', 'add');
    }

    else {
      str = "PHONE DIRECTORY"
      window.history.pushState('home', 'home', '/');
    }
    
    this.setState({addVisibility:!this.state.addVisibility, NavbarName : str});

  }


  render() {
    return (
      <Aux>
        <Layout NavbarName = {this.state.NavbarName}>
        { !this.state.addVisibility ?
         <DisplaySubscriber  directoryList = {this.state.directoryList} changeAddVisibility = {this.changeAddVisibility} deleteSubscriber = {this.deleteSubscriber} />
         :
        <AddSubscriber  addSubscriber = {this.addSubscriber} changeAddVisibility = {this.changeAddVisibility}/>
        }
        </Layout>
      </Aux>
    );
  }
}

export default App;
