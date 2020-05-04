import React,{useState} from 'react';
import axios from 'axios';
import Search from './component/Search'
import Results from './component/Results'
import MovieDetail from './component/MovieDetail'


function App() {
  const api_key = process.env.REACT_APP_API_KEY;
  const apiurl = `http://www.omdbapi.com/?apikey=${api_key}`;

  const [state, setstate] = useState({
    s: "",
    results: [],
    selected: {}
  });

  const handleSearch = (e) => {
    if(e.key === "Enter"){
      axios(apiurl + '&s=' +state.s).then(({data}) => {
        let results = data.Search;
        setstate(prevState => {
          return{
            ...prevState,
            results: results
          }
        });
      })
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;
    setstate(prevState =>{
      return{...prevState, s:s}
    });

  };

  const movieDetail = (id) => {
    axios(apiurl + '&i=' + id).then(({data}) => {
      let result = data;
      setstate(prevState => {
        return{
          ...prevState,
          selected: result
        }
      }) 
    })
    
  }

  const closeMovieDetail = () => {
    setstate(prevState => {
      return{
        ...prevState,
        selected: {}
      }
    })
  }


  return (
    <div className="App">
      <header>
      <h1>Kho Phim</h1>
      </header>
      <main>
        <Search handleInput={handleInput} handleSearch={handleSearch}/>
        <Results results={state.results} movieDetail={movieDetail}/>
        {/* <MovieDetail selected={state.selected} closeMovieDetail={closeMovieDetail}/>  */}

        {(typeof state.selected.Title != "undefined") ? 
        <MovieDetail selected={state.selected} closeMovieDetail={closeMovieDetail}/> : false} 
      </main>
    </div>
  );
}

export default App;
