import axios from "../axios";

export const getSliderImages = async () => {
    return await axios.get('/slider/')
}

export const getSliderImagesById = async (id) => {
    return await axios.get('/slider/' + id)
}

export const createSliderImage = async (image, category_id) => {
    return await axios.post('/slider/', {
        image: image,
        category_id: category_id
    })
}

export const updateSliderImage = async (image, id) => {
    return await axios.put('/slider/' + id, {image: image})
}

export const deleteSliderImage = async (id) => {
    return await axios.delete('/slider/' + id)
}