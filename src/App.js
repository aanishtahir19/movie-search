import './App.scss';
import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList.js';
import Header from './components/Header';
import { css } from '@emotion/react';
import { ClipLoader, RiseLoader } from 'react-spinners';
import { getMovieRequest } from './Utils/api';
const override = css`
  display: block;
  margin: 2;
  border-color: red;
`;
function App() {
  const initialState = [
      {
        Title: 'Star Wars',
        Year: '1977',
        imdbID: 'tt0076759',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      },
      {
        Title: 'Star Wars: Episode V - The Empire Strikes Back',
        Year: '1980',
        imdbID: 'tt0080684',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      },
      {
        Title: 'Star Wars: Episode VI - Return of the Jedi',
        Year: '1983',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      },
      {
        Title: 'Star Wars: Episode VII - The Force Awakens',
        Year: '2015',
        imdbID: 'tt2488496',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg',
      },
      {
        Title: 'Star Wars: Episode I - The Phantom Menace',
        Year: '1999',
        imdbID: 'tt0120915',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      },
      {
        Title: 'Star Wars: Episode III - Revenge of the Sith',
        Year: '2005',
        imdbID: 'tt0121766',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg',
      },
      {
        Title: 'Star Wars: Episode II - Attack of the Clones',
        Year: '2002',
        imdbID: 'tt0121765',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg',
      },
      {
        Title: 'Star Wars: Episode VIII - The Last Jedi',
        Year: '2017',
        imdbID: 'tt2527336',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg',
      },
      {
        Title: 'Star Wars: Episode IX - The Rise of Skywalker',
        Year: '2019',
        imdbID: 'tt2527338',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg',
      },
      {
        Title: 'Solo: A Star Wars Story',
        Year: '2018',
        imdbID: 'tt3778644',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg',
      },
    ];
  const [movies, setMovies] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('avengers');
  // const getMovieRequest = async () => {
  //   setLoading(true);
  //   const params = {
  //     apikey: 'f21935f6',
  //     s: searchValue,
  //   };
  //   const url = new URL('http://www.omdbapi.com/');
  //   Object.keys(params).forEach((key) => {
  //     url.searchParams.append(key, params[key]);
  //   });
  //   console.log(url)
  //   try {
  //     const response = await fetch(url.href, {'Access-Control-Allow-Origin': 'http://localhost:1234'});
  //     const responsejson = await response.json();
  //     console.log(responsejson);
  //     if (responsejson.Response === 'True') {
  //       setMovies(responsejson);
  //     }
  //     setLoading(false);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useEffect(() => {
  //   getMovieRequest();
  // }, [searchValue]);
  useEffect(async () => {
    setLoading(true);
    let response = await getMovieRequest(searchValue);
    if (response.Response === 'True') {
      // console.log(response);
      setMovies(response.Search);
      setLoading(false);
      console.log(response.Search)
    } else {
      console.log(response);
    }
  }, [searchValue]);
  return (
    <div id='App' className='min-h-screen text-white bg-bg pb-20'>
      <Header setSearch={setSearchValue} />
      {loading ? (
        <div className='flex justify-center items-center pt-40'>
          <RiseLoader color='#ffffff' loading={loading} size={15} margin={2} />
        </div>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
}

export default App;