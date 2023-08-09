import { React, useState } from "react";

import { Container } from "react-bootstrap";

import { SideDash } from "../components/Navs/sidedash";
import { useLocation } from "react-router-dom";
import Orderitems from "../components/section/orderitems";

export default function ViewOrder() {
  const location = useLocation();
  const [order] = useState(location.state.order);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", direction: "rtl" }}>
        <SideDash></SideDash>
        <div
          className="cart_page"
          style={{
            height: "fit-content",
            backgroundColor: "#fff",
            width: "85%",
          }}
        >
          <Container className="my-4" style={{ justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h3 style={{ marginRight: "35%" }}>طلب {order.firstName} {order.lastName}</h3>
            </div>
            <div>
              <div className="" style={{ height: "fit-content" }}>
                <Container
                  className="my-4"
                  style={{ justifyContent: "center" }}
                >
                  <div className="d-flex justify-content-around flex-column">

                    <div className="whiteSpaceNoWrap" >
                      <div className="my-3 mx-3">
                        {order.firstName} {order.lastName}
                      </div>

                      <div className="my-3 mx-3">
                        الهاتف: {order.phone}
                      </div>
                      <div className="my-3 mx-3">
                        البلد: {order.country}
                      </div>
                      <div className="my-3 mx-3">المدينة: {order.city}</div>
                      <div className="my-3 mx-3">كود المنطقة: {order.zipCode}</div>
                    </div>
                    {order.products.map((product, key) => (
                      <Orderitems details={product}></Orderitems>
                    ))}
                    <div className="my-3 mx-3">{"المجموع الكلي :    " + order.totalPrice + " $"}</div>

                    <div className="my-3 mx-3">{"الدفع  :    " + order.payment}</div>
                  </div>
                </Container>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
