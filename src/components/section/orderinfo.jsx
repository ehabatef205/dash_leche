import React, { useState, useEffect } from "react";
import { getsomeuser } from "../../api/basis/getprofile";
import { useNavigate } from "react-router-dom";

export default function OrderInfo({ order }) {
  const navigate = useNavigate()

  return (
    <div className="my-3 mx-3" style={{ margin: "15px", display: "flex", justifyContent: "space-between", border: "0.5px solid #eee" }}>
      <button className="my-3 mx-3" onClick={() => { navigate('/vieworder/', { state: { order: order } }) }} style={{ border: "none" }}>{order.firstName} {order.lastName}</button>
      <div className="my-3 mx-3">{order.totalPrice} {" $"}</div>
      <div className="my-3 mx-3">  tele : {order.phone}</div>
    </div>
  );
}
