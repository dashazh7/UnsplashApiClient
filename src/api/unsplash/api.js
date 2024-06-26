import axios from "axios";
import { imageMapper, searchMapper } from "./mappers.js";

const unsplashClient = axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
            "Client-ID edS1cs1W9n6W5XKaP0ROYpQqeXStUCqHcefluoRlXic"
    }
});

export const searchPhotos = async (query, page, per_page) => {
    const { data } = await unsplashClient.get("search/photos", {
        params: {query, page, per_page}
    });
    return searchMapper(data);
}

export const getRandomPhotos = async (count) => {
    const { data } = await unsplashClient.get("photos/random", {
        params: {count}
    });
    return imageMapper(data);
}