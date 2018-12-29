import React, {Component} from 'react';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import Footer from './components/Footer';

class App extends Component {

  state = {
    movies: [
      {
        movie_name: 'Koi mil gya',
        rating: '8.1',
        imdb_id: 'tt04d7e1'
      },
      {
        movie_name: 'Welcome',
        rating: '8.6',
        imdb_id: 'tt040201'
      },
      {
        movie_name: 'Judwaa',
        rating: '5.1',
        imdb_id: 'tt04d587'
      }
    ]
  }

  handleClick = (e) => {
    // console.log(e.target);
    this.setState({
      movie_name: 'Batman v/s Superman',
      rating: '9.8',
      imdb_id: 'tt8751dc'
    });
  }

  handleMouseOver = (e) => {
    console.log(e.pageX);
  }

  handleOnCopy = (e) => {
    console.log("Stop copying");
  }

  handleChange = (e) => {
    this.setState({
      movie_name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", this.state.movie_name);
  }

  render() {
    return (
      <div className="App">
        <button className="btn btn-outline-dark" style={{color: "#333"}} onClick={this.handleClick}>Click Here</button>
        <h1 onMouseOver={this.handleMouseOver}>hover here</h1>
        {this.state.movies[0].movie_name}
        <p onCopy={this.handleOnCopy}>{this.state.movie_name}<br/>{this.state.rating}</p>
        <hr/>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <input className="form-control" type="text" onChange={this.handleChange}/>
          <br/>
          <button className="btn btn-outline-info">Submit</button>
        </form>
        <Movie movies={this.state.movies}/>

      </div>
    );
  }
}

export default App;
