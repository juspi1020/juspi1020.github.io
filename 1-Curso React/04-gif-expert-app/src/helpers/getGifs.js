


export const getGifs = async( category ) => {
//    const url = `https://api.giphy.com/v1/gifs/search?api_key=F22f6GAaJcqADWN5HCwqJAX5WsOcQPQ5&q=${encodeURI(category)}&limit=10&offset=0&rating=g&lang=en`;

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;


}