import axios from "../axios";

export const getImages = async () => {
    return await axios.get('/image/')
}

export const getImagesById = async (id) => {
    return await axios.get('/image/' + id)
}

export const createImage = async (image) => {
    return await axios.post('/image/', {
        image: image,
    })
}

export const updateImage = async (image, id) => {
    return await axios.put('/image/' + id, {image: image})
}

export const deleteImage = async (id) => {
    return await axios.delete('/image/' + id)
}