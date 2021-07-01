import React, {Component} from 'react'
import axios from "axios";
const {Card, validate} = require('../../../FlashCardProject/models/card');



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInfo: [],
      descriptions:""
    };
  }

  componentDidMount() {
    console.log("Component mounted!");
    this.fetchCardInfo();
  }

  //  test comment
  async fetchCardInfo() {
    try {
       let response = await axios.get('mongodb+srv://DCarr40:Y8q5tFUzq56ZY9d@cluster0.qms4x.mongodb.net/FlashCardDB?retryWrites=true&w=majority');
        this.setState({
         cardInfo: response.data,
      });
      console.log(this.state.cardInfo);
    } catch (err) {
      console.log(err);
    }
  }

  handleChange(event){

    event.preventDefault();// prevents whole page from reloading on event change
    this.setState({filters:event.target.value})// sets filters value to target event value
    console.log(this.state.filters)
  }





  render() {
    let newArrayOfAnimes = this.state.animeTitles.filter(anime => {
      return(
      song.title.toLowerCase().includes(this.state.filters.toLowerCase()) ||
      song.description.toLowerCase().includes(this.state.filters.toLowerCase()) 
      )
    });
      

    console.log(this.state.music);
    console.log("Component rendered!");
    return (
      <React.Fragment>
        <NavBar />
        <SearchBar handleChange={(event)=>this.handleChange(event)}/>
        <MusicTable music={newArrayOfMusic} />
        <FormComponent />
      </React.Fragment>
    );
  }
  
 
}

export default App;


