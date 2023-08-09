import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { SideDash } from "../components/Navs/sidedash";
import * as CategoriesList from "../api/basis/categories";

export default function CreateCategory() {
  const [formData, setFormData] = useState({
    name: '', desc: '', image: ''
  }
  );
  const navigate = useNavigate()

  const create = async () => {

    await CategoriesList.createCategory(formData.name, formData.desc, formData.image).then(res => {
      if (res.status === 200) (
        navigate(-1)
      )
    })

  }


  return (
    <div style={{ direction: "rtl" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideDash></SideDash>
        <div
          className="cart_page"
          style={{
            height: "fit-content",
            backgroundColor: "#e7e7e7",
            width: "85%",
          }}
        >
          <Container className="my-4  " style={{ justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h3 style={{ marginLeft: "35%" }}>فئة جديدة</h3>
            </div>
            <div>
              <div className="" style={{ height: "fit-content" }}>
                <Container
                  className="my-4"
                  style={{ justifyContent: "center", backgroundColor: "white" }}
                >
                  <div className="d-flex justify-content-around flex-column">
                    <div>
                      <div
                        style={{
                          margin: "15px",
                          display: "flex",
                          border: "0.5px solid #eee",
                          flexDirection: "column",
                        }}
                      >
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <label className="my-3 mx-3" style={{ width: "15%" }}>الاسم</label>
                          <input
                            className="my-3 mx-3"
                            style={{ flex: "0 %25", width: "80%" }}
                            value={formData?.name}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                name: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }} >
                          <label className="my-3 mx-3" style={{ width: "15%" }}>الوصف</label>
                          <input
                            className="my-3 mx-3"
                            style={{ flex: "0 %25", width: "80%" }}
                            value={formData?.desc}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                desc: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          <label style={{ width: "15%" }}>الصورة</label>
                          <input
                            className="my-3 mx-3"
                            style={{ flex: "0 %25", width: "75%" }}
                            value={formData?.image}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                image: e.target.value,
                              })
                            }
                          />
                        </div>
                        <img className="my-3 mx-3  " style={{ height: "5rem", width: "5rem" }} src={formData?.image} alt={"خطأفي الصورة"}></img>
                        <div
                          style={{
                            marginLeft: "7%",
                            display: "flex",
                            direction: "ltr",
                          }}
                        >
                          <button
                            className="btn text-light my-3 mx-3 "
                            style={{ backgroundColor: "rgb(80, 192, 169)" }}
                            onClick={() => { create() }}
                          >
                            <i className="bi bi-check-all" color="#fff"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
