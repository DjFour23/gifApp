
export const getGifs = async(valorBusqueda) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=gxWn7kSet3nfTafSWnf9zvJgmojIk0LZ&q=minimalist&limit=25&offset=0&rating=g&lang=en`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( (id, title, images) => {
        return {
            id: id,
            title: title,
            url : images.downsized.url
            
        }
    })
    return gifs;
}

