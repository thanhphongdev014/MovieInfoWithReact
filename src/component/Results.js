import React from 'react'
import Result from './Result'

function Results(props) {
    return (
        <section className="results">
            
            {props.results.map((result) =>(
                <Result result={result} key={result.imdbID} movieDetail={props.movieDetail}/>
            ))}         
        </section>
    )
}

export default Results
