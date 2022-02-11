const API_KEY = "0afef554d4cb904b0c5fc21450dd4c65";

const requests = {
  fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&region=US`,
  fetchNetflixOriginal: `/movie/upcoming?api_key=${API_KEY}&region=US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&region=US`,
  fetchTrending: `/trending/movie/week?api_key=${API_KEY}`,
  fetchActionMovie: `/discover/movie?api_key=${API_KEY}`,
  fetchComedy: `/discover/movie?api_key=${API_KEY}&with_people=287`,
  fetchRomance: `/discover/movie?api_key=${API_KEY}&with_people=108916`,
};

export default requests;
