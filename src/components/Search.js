import React from 'react';

const Search = (props) => {
  return (
    <div>
      <div className="wrapper">
        <div className="page-header section-dark" style={{backgroundImage: "url('https://images.pexels.com/photos/819848/pexels-photo-819848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=720&w=1280')"}}>
          <div className="filter"></div>
          <div className="content-center">
            <div className="container">
                <div className="searchcard">
                  <form onSubmit={props.getMovie}>
                    <i className="fa fa-search"></i><input type="text" name="movie" placeholder="Search for a Movie"/>
                    <button type="submit" className="btn btn-success btn-just-icon"><i className="fa fa-arrow-right"></i></button>
                  </form>
                </div>
              </div>
              <h2 className="presentation-subtitle text-center">Lorem ipsum dolor sit amet, consectetur.
              </h2>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Search;
