import axios from "../axios";

const getOrders = async () => {
    return axios.get('/order_items')
}

const SelectOrder = async (_id) => {
    const token = localStorage.getItem("Authorization")

    return axios.get('/order_items/' + _id, {}, { headers: { authorization: token } }
    )
}
export { getOrders, SelectOrder }