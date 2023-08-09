import React, { useEffect } from "react";
import * as Products from "../../api/basis/products";

export default function Orderitems({ details }) {

    return (<div style={{ display: "flex", flex: "row", justifyContent: "space-between" }}>
        <div style={{ "flex": "0 25%" }}>
            <img className="my-3 mx-3  " style={{ height: "2.5rem", }} src={details.image} alt={details.name}></img>
        </div>
        <i>{details.name}</i>

        <i>{"السعر :" + details.price + "$"}</i>
        <i>{"عدد " + details?.quantity}</i>
        <i>{"مجموع جزئي :" + details.price * details.quantity}$</i>

    </div>)
}