export const optionsApi = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '66308cabd4msh2fe74b36ead3fc3p1b66d1jsn22801a31a6b8',
      'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}



  // url: 'https://movies-app1.p.rapidapi.com/api/genres',