import React, { useState, useEffect } from "react";
import { getsomeuser } from "../../api/basis/getprofile";
import { useNavigate } from "react-router-dom";
import * as Orders from '../../api/basis/orders'

export default function OrderInfo(props) {
  const navigate = useNavigate()
  const options = ["Processing", "Shipping", "Pending", "Completed"];
  const [selectedOption, setSelectedOption] = useState(props.order.status);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    Orders.update_order_item(props.order._id, event.target.value).then(e => {
      props.getOrders()
    })
  };

  return (
    <div className="my-3 mx-3" style={{ margin: "15px", display: "flex", justifyContent: "space-between", border: "0.5px solid #eee" }}>
      <button className="my-3 mx-3" onClick={() => { navigate('/vieworder/', { state: { order: props.order } }) }} style={{ border: "none" }}>{props.order.firstName} {props.order.lastName}</button>
      <div className="my-3 mx-3">{props.order.totalPrice} {" $"}</div>
      <div className="my-3 mx-3">  tele : {props.order.phone}</div>
      <div className="my-3 mx-3">  status : <select value={selectedOption} onChange={handleOptionChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select></div>
    </div>
  );
}
