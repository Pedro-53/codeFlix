const base_url = 'https://api.themoviedb.org/3';
const api_key = '7f1aecf212e67cc0629f0abf557c5ec5';

const funcFetch = async(endpoint)=>{
    const req = await fetch(`${base_url}${endpoint}`);
    const json = await req.json();
    return json;
}

export default{
    getHomeList: async ()=>{ 
        return[
            {
                slug:'originals',
                title:'Originais da Netflix',
                items: await funcFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug:'trending',
                title:'Recomendados para Você',
                items: await funcFetch(`/trending/all/week?language=pt-BR&api_key=${api_key}`)

            },
            {
                slug:'top-rated',
                title:'Em Alta',
                items: await funcFetch(`/movie/top_rated?language=pt-BR&api_key=${api_key}`)
            },
            {
                slug:'action',
                title:'Ação',
                items: await funcFetch(`/discover/movie?with_genres=28?language=pt-BR&api_key=${api_key}`),
            },
            {
                slug:'adventure',
                title:'Aventura',
                items: await funcFetch(`/discover/movie?with_genres=12?language=pt-BR&api_key=${api_key}`),
            },
            {
                slug:'documentary',
                title:'Documentário',
                items: await funcFetch(`/discover/movie?with_genres=99?language=pt-BR&api_key=${api_key}`),
                
            },
            {
                slug:'animation',
                title:'Animação',
                items: await funcFetch(`/discover/movie?with_genres=16?language=pt-BR&api_key=${api_key}`),

            },
            {
                slug:'drama',
                title:'Drama',
                items: await funcFetch(`/discover/movie?with_genres=18?language=pt-BR&api_key=${api_key}`),

            },
        ]
    }
}