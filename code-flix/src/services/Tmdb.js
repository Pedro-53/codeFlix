const base_url = 'https://api.themoviedb.org/3';
const api_key = '7f1aecf212e67cc0629f0abf557c5ec5';

const funcFetch = async(endpoint)=>{
    const req = await fetch(`${base_url}${endpoint}`);
    const json = await req.json();
    return json;
}

export default{
    getHomeList: ()=>{ 
        return[
            {
                slug:'originals',
                title:'Originais da Netflix',
                items: await funcFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug:'trending',
                title:'Recomendados para Você',
                items: await funcFetch(`/trending/all/?with_network=213&language=pt-BR&api_key=${api_key}`)

            },
            {
                slug:'top-rated',
                title:'Em Alta',
                items:[],
            },
            {
                slug:'action',
                title:'Ação',
                items:[],
            },
            {
                slug:'adventure',
                title:'Aventura',
                items:[],
            },
            {
                slug:'documentary',
                title:'Documentário',
                items:[],
            },
            {
                slug:'animation',
                title:'Animação',
                items:[],
            },
            {
                slug:'drama',
                title:'Drama',
                items:[],
            },
        ]
    }
}