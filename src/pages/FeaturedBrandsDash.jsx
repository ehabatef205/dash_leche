import { React, useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { Container } from "react-bootstrap";

import { SideDash } from "../components/Navs/sidedash";
import { useNavigate } from "react-router-dom";

import * as FeaturedBrandsDash from "../api/basis/featuredBrands";


export default function DashFeaturedBrands() {
  const navigate = useNavigate()
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getImages().then(e => {
      setLoading(false)
    })
  }
    , [])

  const getImages = async () => {
    await FeaturedBrandsDash.getFeaturedBrands().then(res => {
      setImages(res.data.response)
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
              <button className="btn text-light" style={{ backgroundColor: "rgb(80, 192, 169)" }} onClick={() => { navigate("/dash/featured_brands/create") }}><i className="bi bi-plus-circle" color="#fff"></i></button>
              <h3 style={{ marginRight: "35%" }}>FeaturedBrands</h3>
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
                        {images?.map((image, key) => (

                          <div key={key} style={{ margin: "15px", display: "flex", border: "0.5px solid #eee" }}>
                            <div style={{ "flex": "0 25%" }}>
                              <img className="my-3 mx-3  " style={{ height: "2.5rem", }} src={image.image}></img>
                            </div>
                            <div style={{ marginLeft: "7%", display: "flex" }}>
                              <button className="btn text-light my-3 mx-3  " style={{ backgroundColor: "red" }} onClick={() => {
                                FeaturedBrandsDash.deleteFeaturedBrands(image._id).then(e => {
                                  getImages()
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
