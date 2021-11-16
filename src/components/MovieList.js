import './MovieList.scss';
import { getMovieDetail } from '../Utils/api';
import { useState } from 'react';
import MovieDetail from './MovieDetail';
import styled from 'styled-components';

function MovieList({ movies }) {
  const [loadingDetail, setLoadingDetail] = useState(true);
  const [detail, setDetail] = useState(null);

  const fetchMovieData = async (movie) => {
    setLoadingDetail(true);
    const response = await getMovieDetail(movie.imdbID);
    if (response.Response === 'True') {
      console.log(response);
      setDetail(response);
      // let elem = document.getElementById('movie-detail');
      // elem.style.height = '100%';
      setLoadingDetail(false);
    }
  };
  return (
    // <div className='container mx-auto'>
    <div className=' px-5 mt-20 md:px-8 xl:px-11'>
      <h2 className='md:text-2xl '>Search Results</h2>
      <div
        id='movie-list'
        className='relative flex flex-row overflow-x-auto mt-2 '
      >
        {/* <div id="see-more" className="absolute top-1/2 right-0 z-20">
          See More
        </div> */}
        {movies.map((movie, index) => (
          <div
            onClick={() => fetchMovieData(movie)}
            key={index}
            id='movie-tile'
            className='relative flex-none flex flex-col justify-start mr-3 lg:mr-5'
          >
            <div className='image-container relative overflow-hidden'>
              <div id="image-container-overlay"></div>
              <div className="absolute top-0 w-full z-20 px-2 py-1 font-bold before:block befoer:w-full ">
                <span>{movie.Year}</span><span className="float-right">{movie.Type}</span>
              </div>
              <img src={movie.Poster} alt='movie image' className='object-cover ' />
            </div>

            <h2 className='text-lg md:text-md mt-3 text-center z-30 '>{movie.Title}</h2>
            {/* <div id="movie-overlay"className="absolute bg-cardoverlay bottom-0 w-full h-full opacity-0  z-50 text-center  transition-all ease duration-500">
              
            </div> */}
          </div>
        ))}
      </div>
      <MovieDetailWrapper id='movie-detail' animate={loadingDetail === false}>
        {loadingDetail === false ? <MovieDetail movie={detail} /> : null}
      </MovieDetailWrapper>
      {/* <div
        id='movie-detail'
        className='mt-5 h-0  overflow-hidden transition-all duration-1000  ease '
      >
        {loadingDetail === false ? <MovieDetail movie={detail} /> : null}
      </div> */}
    </div>
    // </div>
  );
}
const MovieDetailWrapper = styled.div`
  margin-top: 20px;
  transition: height 1s ease-in-out;
  height: ${(props) => (props.animate ? 'auto' : '0')};
  overflow: hidden;
`;
export default MovieList;
