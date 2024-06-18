import axios from "axios";

const unsplashClient = axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
            "Client-ID edS1cs1W9n6W5XKaP0ROYpQqeXStUCqHcefluoRlXic"
    }
});

export const getPhotos = async (page, per_page, order_by) => {
    const { data } = await unsplashClient.get("photos", {
        params: {page, per_page, order_by}
    });
    return data;
}

export const searchPhotos = async (query, page, per_page) => {
    const { data } = await unsplashClient.get("search/photos", {
        params: {query, page, per_page}
    });
    return data;
}

export const getRandomPhotos = async (count) => {
    const { data } = await unsplashClient.get("photos/random", {
        params: {count}
    });
    return data;
}