import React,{useState} from 'react';
import axios from 'axios';
import Search from './component/Search'
import Results from './component/Results'
import MovieDetail from './component/MovieDetail'
import Pagination from './component/Pagination'

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
        console.log(results);
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

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(6);

  const indexOfLastPost = currentPage*postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = state.results.slice(indexOfFirstPost,indexOfLastPost);

  const handleChangePage = (pageNumber) =>{
    setCurrentPage(pageNumber);
  }

  return (
    <div className="App">
      <header>
      <h1>Kho Phim</h1>
      </header>
      <main>
        <Search handleInput={handleInput} handleSearch={handleSearch}/>
        <Results results={currentPosts} movieDetail={movieDetail}/>
        {/* <MovieDetail selected={state.selected} closeMovieDetail={closeMovieDetail}/>  */}
        <Pagination postPerPage = {postPerPage} totalPosts={state.results.length}
         handleChangePage={handleChangePage}/>
        {(typeof state.selected.Title != "undefined") ? 
        <MovieDetail selected={state.selected} closeMovieDetail={closeMovieDetail}/> : false} 
      </main>
    </div>
  );
}

export default App;
