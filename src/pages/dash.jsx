import { React, useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { getOrders } from "../api/basis/orders";
import OrderInfo from "../components/section/orderinfo";
import { SideDash } from "../components/Navs/sidedash";

export default function DashpageOrders() {
  const [orders, setorders] = useState([]);

  const [loading] = useState(false);

  useEffect(() => {
    getOrders().then((res) => {
      setorders(res.data);
      console.log(res.data)
    });
  }, []);

  return (
    <>
      <div style={{display:"flex",flexDirection:"row",direction:"rtl"}}>
      <SideDash></SideDash>
      <div
        className="cart_page"
        style={{
          height: "fit-content",
          backgroundColor: "#e7e7e7",
          width:"85%"
        }}
      >
        <Container className="my-4  " style={{ justifyContent: "center" }}>
        <h3 style={{marginRight :"35%"}}>الطلبات</h3>
          <div>
            <div className="" style={{ height: "fit-content" }}>
              <Container
                className="my-4"
                style={{ justifyContent: "center", backgroundColor: "white" }}
              >
                <div className="d-flex justify-content-around flex-column">
                  {loading ? (
                    <FaSpinner
                      icon="spinner"
                      className="icon_pulse"
                      style={{ fontSize: "50px" }}
                    />
                  ) : (
                    <>
                      {orders?.map((order, index) => (
                        <OrderInfo key={index} order={order}></OrderInfo>
                      ))}
                    </>
                  )}
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
