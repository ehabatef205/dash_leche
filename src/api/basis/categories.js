import axios from "../axios";

export const deleteCategory = async (id) => {
    return await axios.delete('/product_category/' + id);
}

export const createCategory = async (name, desc, image) => {
    return await axios.post(`/product_category`, { name: name, desc: desc, image: image })
}

export const getAllCategories = async () => {
    return await axios.get('/product_category/')
}

export const updateCategory = async (name, desc, image, id) => {
    return await axios.put(`/product_category/${id}`, { name: name, desc: desc, image: image })
}

export const getCategoryByID=async(id)=>{
    return await axios.get(`/product_category/${id}`)
}