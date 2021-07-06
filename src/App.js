import React, {Component, useState} from 'react';
import axios from "axios";
import FlashcardList from './components/FlashcardList/FlashcardList';
import FlashCard from './components/FlashCard/FlashCard';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      collection: [],
      filters:"",
    }
    this.Sample_Flashcard = { [
          {
          id: 1,
          title:'Sample Card 1',
          description:'Just a sample'},
          {
          id: 2,
          title:'Sample Card 2',
          description:'Just a sample'},
          {
          id: 3,
          title:'Sample Card 3',
          description:'Just a sample'},
          {
          id: 4,
          title:'Sample Card 4',
          description:'Just a sample'}
        ]
      }
    };
    
    this.flashcard = [
      {title:'', description:''}
    ]
      ;



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
   
    const [flashcard, setFlashCard] = this.setState(this.state.Sample_Flashcard);
    console.log(this.state.collection);
    console.log("Component rendered!");
    return (
      <React.Fragment>
        <div>Hello World</div>
        <FlashcardList flashcard={flashcard}/>
        {/* <NavBar />
        <SearchBar handleChange={(event)=>this.handleChange(event)}/>
        <MusicTable music={newArrayOfMusic} />
        <FormComponent /> */}
      </React.Fragment>
    );
  }
}


