export const imagesMapper = (images) => {
    return images.map(imageMapper)
}

export const imageMapper = (image) => {
    return {
        id: image.photo_id,
        url: image.photo_url
    }
}
