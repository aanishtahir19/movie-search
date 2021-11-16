import styled from 'styled-components';

function MovieDetail({ movie }) {
  

  return (
    <Wrapper >
      <div id='left' className=''>
        <img
          src={movie.Poster}
          className='w-full h-full object-cover'
          alt='movie POster'
        />
      </div>
      <div id='right' className="max-w-lg p-5 lg:pl-0">
        <h2 className='text-2xl'>{movie.Title}</h2>
        <p className="mt-4 text-base text-gray-400">{movie.Genre}</p>
        
        <p className="mt-3"><span className="bg-gray-400 px-2 py-1">{movie.imdbRating}</span> <span className="ml-1">{movie.Runtime}</span><span className="ml-2 bg-gray-400 px-2 py-1">{movie.Year}</span></p>
        
        <p className="mt-5 text-justify">{movie.Plot}</p>
        <p className="mt-5 text-base text-gray-400">{movie.Language}</p>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(100px, 400px) 1fr;
    grid-template-rows: minmax(0, 500px);
    grid-gap:20px;
    background-color:#1F1F1F;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
  }
    
  `;
export default MovieDetail;
