import axios from "axios";

const favoriteClient = axios.create({
    baseURL: "http://127.0.0.1:8000",
})

export const getFavorite = async (favoriteId) => {
    const { response } = await favoriteClient.get(`/favorites/${favoriteId}`);
    return response;
}

export const getFavorites = async () => {
    const { response } = await favoriteClient.get("/favorites");
    return response;
}

export const createFavorite = async (favorite) => {
    const { response } = await favoriteClient.post("/favorites", favorite);
    return response;
}

export const deleteFavorite = async (favoriteId) => {
    const { response } = await favoriteClient.delete(`/favorites/${favoriteId}`);
}

export const updateFavorite = async (favoriteId, favoritesData) => {
    const { response } = await favoriteClient.put(`/favorites/${favoriteId}`, favoritesData);
    return response;
}
