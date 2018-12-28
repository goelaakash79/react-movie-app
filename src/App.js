import React, {Component} from 'react';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';

class App extends Component {

  getMovie = (e) => {
    e.preventDefault();
    const movie = e.target.elements.movie.value;
    if (movie) {
      axios.get('http://www.omdbapi.com/?apikey=thewdb&s='+movie)
      .then((res) => {
        console.log(res);
      });
    } else return;
  }

  render() {
    return (
      <div className="App">


        <Header/>
        <Search getMovie={this.getMovie}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
