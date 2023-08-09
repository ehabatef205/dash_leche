import { React, useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { SideDash } from "../components/Navs/sidedash";
import { useNavigate, useParams } from "react-router-dom";
import * as Products from "../api/basis/products";

export default function DashpageProduct() {
  const navigate = useNavigate()

  const [prod_by_cat, setProdByCat] = useState([])
  const { id } = useParams();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getProducts().then(e => {
      setLoading(false)
    })
  }
    , [id])

  const getProducts = async () => {
    await Products.getProductsOfCategory(id).then(res => {
      setProdByCat(res.data)
    })
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", direction: "rtl" }}>
        <SideDash></SideDash>
        <div
          className="cart_page"
          style={{
            height: "fit-content",
            backgroundColor: "#e7e7e7",
            width: "85%"
          }}
        >
          <Container className="my-4  " style={{ justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <button className="btn text-light" style={{ backgroundColor: "rgb(80, 192, 169)" }} onClick={() => { navigate("/dash/create/product", { state: { category_id: id } }) }}><i className="bi bi-plus-circle" color="#fff"></i></button>
              <h3 style={{ marginRight: "35%" }}>المنتجات -{ }</h3>
            </div>
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
                        {prod_by_cat?.map((product, key) => (

                          <div key={product._id} style={{ margin: "15px", display: "flex", border: "0.5px solid #eee" }}>
                            <div className="my-3 mx-3  " style={{ "flex": "0 25%", border: "none" }}>  {product.name}</div>

                            <div style={{ "flex": "0 25%" }}>
                              <img className="my-3 mx-3  " style={{ height: "2.5rem", }} src={product.images[0]} alt={product.name}></img>
                            </div>
                            <div className="my-3 mx-3  " style={{ "flex": "0 25%", color: "red" }}> {product.price_before}$</div>
                            <div className="my-3 mx-3  " style={{ "flex": "0 25%" }}> {product.price_after}$</div>
                            <div style={{ marginLeft: "7%", display: "flex" }}>


                              <button className="btn text-light my-3 mx-3  " style={{ backgroundColor: "rgb(80, 192, 169)" }}
                                onClick={() => { navigate(`/dash/product/edit/${product._id}`); }}><i className="bi bi-pencil-square" color="#fff"></i></button>

                              <button className="btn text-light my-3 mx-3  " style={{ backgroundColor: "red" }} onClick={async () => {
                                await Products.deleteProduct(product._id).then(() => {
                                  getProducts()
                                })
                              }}><i className="bi bi-trash3" color="#fff"></i></button>

                            </div>
                          </div>
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
