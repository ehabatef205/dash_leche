import axios from "../axios";

export const getProduct = async (product_id) => {
    return await axios.get(`/product/id/${product_id}`)
}

export const createProduct = async (
    name,
    desc,
    images,
    SKU,
    category_id,
    price_before,
    price_after,
    quantity
) => {
    return await axios.post(`/product`, {
        name: name,
        desc: desc,
        images: images,
        SKU: SKU,
        category_id: category_id,
        price_before: price_before,
        price_after: price_after,
        quantity: quantity,
    });
};

export const deleteProduct = async (id) => {
    return await axios.delete('/product/' + id)
}

export const updateProduct = async (name, desc, price_before, price_after, quantity, images, id) => {
    return await axios.put(`/product/${id}`,
        {
            name: name,
            desc: desc,
            price_before: price_before,
            price_after: price_after,
            quantity: quantity,
            images: images,
        })
}

export const getCategoryByID = async (id) => {
    return await axios.get(`/product_category/${id}`)
}

export const getProductsOfCategory = async (cat) => {
    return axios.get('/product/category/' + cat)
}