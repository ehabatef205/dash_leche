import axios from "../axios";

export const getFeaturedBrands = async () => {
    return axios.get('/featured_brands/')
}

export const createFeaturedBrands = async (image) => {
    return axios.post('/featured_brands/', {
        image: image
    })
}

export const deleteFeaturedBrands = async (id) => {
    return axios.delete('/featured_brands/' + id)
}