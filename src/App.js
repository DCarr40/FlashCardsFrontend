import React, {Component} from 'react'
import axios from "axios";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      collection: [],
      filters:""
    };
    
    this.flashcard = {
      title:'',
      description:''

    };

  }

  componentDidMount() {
    console.log("Component mounted!");
    this.fetchCollection();
  }

  async fetchCollection() {
    try {
       let response = await axios.get("http://localhost:5000/api/collections");
        this.setState({
         collection: response.data,
      });
      console.log(this.state.collection);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default App;
