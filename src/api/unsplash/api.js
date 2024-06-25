import axios from "axios";
import { imageMapper, searchMapper } from "./mappers.js";

const unsplashClient = axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
            "Client-ID 4dc0c9edd3f8399861773bf78562a506e26384e3c5d582c06359e3e1c4b70c33"
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