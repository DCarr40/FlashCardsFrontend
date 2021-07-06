import React, {Component, useState} from 'react';
import axios from "axios";
import FlashcardList from './components/FlashcardList/FlashcardList';
import FlashCard from './components/FlashCard/FlashCard';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      collection: [],
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
   console.log(this.fetchCollection)
    let flashcard = this.state.collection
    console.log(this.state.collection);
    console.log("Component rendered!");
    return (
      <React.Fragment>
        <div>Hello World</div>
        <FlashCard flashcard={FlashCard}/>
        {/* <NavBar />
        <SearchBar handleChange={(event)=>this.handleChange(event)}/>
        <MusicTable music={newArrayOfMusic} />
        <FormComponent /> */}
      </React.Fragment>
    );
  }
}


