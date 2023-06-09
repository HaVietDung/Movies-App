import axios from "axios"
const getDataPopularMovies = async (page = 1) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
    const response = await axios.get(url);
    return await response.status ===200 ? await response.data : {};
}
const getDataMoviesID = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&append_to_response=videos,images&include_image_language=en-US,null`;
    const response = await axios.get(url);
    return await response.status ===200 ? await response.data : {};
}
const getDataMoviesByDate = async (starDate, endDate, page = 1) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&release_date.gte=${starDate}&release_date.lte=${endDate}&with_release_type=3|2`
    const response = await axios.get(url);
    return await response.status ===200 ? await response.data : {};
}
const getDataSearchMovies =async (page) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=batman&api_key=cfe422613b250f702980a3bbf9e90716&page=${page}`;
    const response = await axios.get(url);
    return await response.status === 200 ? await response.data : {};
}
export const api = {
    getDataPopularMovies,
    getDataMoviesID,
    getDataMoviesByDate,
    getDataSearchMovies
}

 