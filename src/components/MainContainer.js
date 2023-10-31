import React from 'react';
import VedioTitle from './VedioTitle';
import VedioBackground from './VedioBackground';
import { useSelector } from 'react-redux';
const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies)
    // ealry return
    if(movies === null) return;

    const mainMovie = movies[0];

    const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VedioTitle title={original_title} overview={overview}/>
      <VedioBackground movieId={id} />
    </div>
  );
}

export default MainContainer;
