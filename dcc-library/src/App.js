import React, {Component} from 'react'
import axios from "axios";
import MusicTable from "./components/MusicTable/MusicTable";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import FormComponent from "./components/Form/FormComponent";


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
    this.fetchMusic();
  }

  //  test comment
  async fetchMusic() {
    try {
       let response = await axios.get("http://localhost:5000/api/songs");
        this.setState({
         music: response.data,
      });
      console.log(this.state.music);
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
    let newArrayOfMusic = this.state.music.filter(song => {
      return(
      song.title.toLowerCase().includes(this.state.filters.toLowerCase()) ||
      song.album.toLowerCase().includes(this.state.filters.toLowerCase()) ||
      song.artist.toLowerCase().includes(this.state.filters.toLowerCase()) ||
      song.genre.toLowerCase().includes(this.state.filters.toLowerCase()) ||
      song.releaseDate.toLowerCase().includes(this.state.filters.toLowerCase())
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


