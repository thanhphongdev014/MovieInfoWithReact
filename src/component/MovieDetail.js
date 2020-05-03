import React from 'react'

function MovieDetail(props) {
    return (
        <section className="movie-detail">
            <div className="content">
                <h2>{props.selected.Title} <span>{props.selected.year}</span></h2>
                <p className="rating">Đánh giá: {props.selected.imdbRating}</p>
                <div className="plot">
                    <img src={props.selected.Poster}/>
                    <p>{props.selected.Plot}</p>
                </div>
                <button className="close" onClick={ props.closeMovieDetail}>Đóng</button>
            </div>
        </section>
    )
}

export default MovieDetail
