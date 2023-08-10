import axios from "../axios";

export const getOrders = async () => {
    return axios.get('/order_items')
}

export const SelectOrder = async (_id) => {
    const token = localStorage.getItem("Authorization")

    return axios.get('/order_items/' + _id, {}, { headers: { authorization: token } }
    )
}

export const update_order_item = async (_id, status) => {
    await axios.put(`/order_items/${_id}`, { status: status })
}