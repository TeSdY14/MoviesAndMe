const API_TOKEN = "7ac8a596e1cc2302c3ec11bc26da8d8a"

export function getFilmsFromApiWithSearchedText(text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url)
        .then((response) => response.json())
        .catch((err) => console.error(err))
}
