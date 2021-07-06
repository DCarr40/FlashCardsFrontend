import React, {Component} from 'react'
import axios from "axios";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      music: [],
      filters:""
    };
  }

  componentDidMount() {
    console.log("Component mounted!");
    this.fetchCollection();
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default App;
