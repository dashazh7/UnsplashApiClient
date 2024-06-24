import axios from "axios";
import { imageMapper, imagesMapper } from "./mappers.js";

const favoriteClient = axios.create({
    baseURL: "http://127.0.0.1:8000",
})

export const getFavorite = async (favoriteId) => {
    const { data } = await favoriteClient.get(`/favorites/${favoriteId}`);
    return imageMapper(data);
}

export const getFavorites = async () => {
    const { data } = await favoriteClient.get("/favorites");
    console.log(imagesMapper(data))
    return imagesMapper(data);
}

export const createFavorite = async (favorite) => {
    const { data } = await favoriteClient.post("/favorites", favorite);
    return imageMapper(data);
}

export const deleteFavorite = async (favoriteId) => {
    await favoriteClient.delete(`/favorites/${favoriteId}`);
}

export const updateFavorite = async (favoriteId, favoritesData) => {
    const { data } = await favoriteClient.put(`/favorites/${favoriteId}`, favoritesData);
    return data;
}


