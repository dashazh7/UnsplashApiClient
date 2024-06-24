export const imageMapper = (images) => {
    return images.map((image) => ( {
        id: image.id,
        url: image.urls.regular
    }))
}

export const searchMapper = (searchResult) => ({
    results: imageMapper(searchResult.results),
    total: searchResult.total,
    total_pages: searchResult.total_pages
})