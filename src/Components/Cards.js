
export default function Cards({ movies = [] }) {
    console.log(movies)
    return (
        <div className="container">
            <div className="row">

                {movies.map((movie) => {
                    return (
                        <div key={movie.imdbID} className="card col-lg-3 col-md-4 col-sm-12 my-2">
                            <img src={movie.Poster} className="card-img-top" style={{ height: "300px" }} alt={movie.Title} />
                            <div className="card-body">
                                <h5 className="card-title text-center">{movie.Title}</h5>
                                <div className="d-flex justify-content-around">
                                    <p className="card-text">{movie.Type}</p>
                                    <p className="card-text">{movie.Year}</p>
                                </div>
                                <a href="#l" className="btn btn-outline-success me-3 shadow-lg">Watched List</a>
                                <a href="#l" className="btn btn-success">Watched</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}