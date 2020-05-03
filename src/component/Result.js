import React from 'react'

function Result(props) {
    return (
        <div className="result" onClick={() => props.movieDetail(props.result.imdbID)}>
            <img src={props.result.Poster}/>
            <h3>{props.result.Title}</h3>
        </div>
    )
}

export default Result
