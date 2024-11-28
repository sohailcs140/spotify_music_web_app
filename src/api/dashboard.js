import Client from "./axiosClient";

export const getRandomRecommendations = async ()=>{

    const genres = ["pop", "rock", "jazz", "hip-hop", "indie", "classical", "electronic"];
    const randomGenre = genres[Math.floor(Math.random() * genres.length)];

    const resp = Client.get(`search?q=songs&type=track&limit=20`)

    return (await resp).data

}