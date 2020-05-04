import React from 'react'
import Result from './Result'

function Results(props) {
    return (
        <section className="results">
            {props.results.map((result,index) =>(
                <Result result={result} key={index} movieDetail={props.movieDetail}/>
            ))}         
        </section>
    )
}

export default Results
