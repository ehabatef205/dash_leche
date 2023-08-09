import { React, useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { Container } from "react-bootstrap";

import { SideDash } from "../components/Navs/sidedash";
import { useNavigate } from "react-router-dom";

import * as CategoriesList from "../api/basis/categories";


export default function DashpageCategory() {
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getCategories().then(e => {
      setLoading(false)
    })
  }
    , [])

  const getCategories = async () => {
    await CategoriesList.getAllCategories().then(res => {
      setCategories(res.data.response)
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
              <button className="btn text-light" style={{ backgroundColor: "rgb(80, 192, 169)" }} onClick={() => { navigate("/dash/category/create") }}><i className="bi bi-plus-circle" color="#fff"></i></button>
              <h3 style={{ marginRight: "35%" }}>الفئة</h3>
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
                        {categories?.map((category, key) => (

                          <div key={category._id} style={{ margin: "15px", display: "flex", border: "0.5px solid #eee" }}>
                            <button className="my-3 mx-3  " style={{ "flex": "0 25%", border: "none" }} onClick={() => { navigate(`/dash/product/cat/${category._id}`) }}>  {category.name}</button>

                            <div style={{ "flex": "0 25%" }}>
                              <img className="my-3 mx-3  " style={{ height: "2.5rem", }} src={category.image} alt={category.name}></img>
                            </div>
                            <div className="my-3 mx-3  " style={{ "flex": "0 25%" }}> {category.desc}</div>
                            <div style={{ marginLeft: "7%", display: "flex" }}>


                              <button className="btn text-light my-3 mx-3  " style={{ backgroundColor: "rgb(80, 192, 169)" }}
                                onClick={() => { navigate(`/dash/category/edit/${category._id}`); }}><i className="bi bi-pencil-square" color="#fff"></i></button>

                              <button className="btn text-light my-3 mx-3  " style={{ backgroundColor: "red" }} onClick={() => { CategoriesList.deleteCategory(category._id).then(() => getCategories()) }}><i className="bi bi-trash3" color="#fff"></i></button>

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
