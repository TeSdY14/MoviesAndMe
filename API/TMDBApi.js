const API_TOKEN = "7ac8a596e1cc2302c3ec11bc26da8d8a"

export function getFilmsFromApiWithSearchedText(text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
    return fetch(url)
        .then((response) => response.json())
        .catch((err) => console.error(err))
}

export function getImageFromApi(name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}
