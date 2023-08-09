import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { SideDash } from "../components/Navs/sidedash";
import * as Products from "../api/basis/products";

export default function Createproduct() {
  const location = useLocation();
  const [category_id] = useState(location.state.category_id)
  const integerValues = [1, 2, 3, 4, 5];
  const [selectedValue, setSelectedValue] = useState(1);
  const [images, setImages] = useState(Array(5).fill(""));
  const handleSelectChange = (event) => {
    const value = parseInt(event.target.value);
    setSelectedValue(value);
  };

  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    SKU: "",
    price_before: 0,
    price_after: 0,
    quantity: 0,
  });
  const navigate = useNavigate();

  const create = async () => {
    await Products.createProduct(
      formData.name,
      formData.desc,
      images.slice(0, selectedValue),
      formData.SKU,
      category_id,
      parseInt(formData.price_before),
      parseInt(formData.price_after),
      parseInt(formData.quantity)
    ).then((res) => {
      if (res.data.response) navigate(-1);
    });
  };

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
                          <label className="my-3 mx-3" style={{ width: "15%" }}>
                            الاسم
                          </label>
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
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <label className="my-3 mx-3" style={{ width: "15%" }}>
                            الوصف
                          </label>
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
                          <label className="my-3 mx-3" style={{ width: "15%" }}>
                            SKU
                          </label>
                          <input
                            className="my-3 mx-3"
                            style={{ flex: "0 %25", width: "75%" }}
                            value={formData?.SKU}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                SKU: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          <label className="my-3 mx-3" style={{ width: "15%" }}>
                            السعر قبل
                          </label>
                          <input
                            className="my-3 mx-3"
                            style={{ flex: "0 %25", width: "75%" }}
                            value={formData?.price}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                price_before: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          <label className="my-3 mx-3" style={{ width: "15%" }}>
                            السعر بعد
                          </label>
                          <input
                            className="my-3 mx-3"
                            style={{ flex: "0 %25", width: "75%" }}
                            value={formData?.price}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                price_after: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          <label className="my-3 mx-3" style={{ width: "15%" }}>
                            الكمية
                          </label>
                          <input
                            className="my-3 mx-3"
                            style={{ flex: "0 %25", width: "75%" }}
                            value={formData?.quantity}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                quantity: e.target.value,
                              })
                            }
                          />
                        </div>

                        <select
                          value={selectedValue}
                          onChange={handleSelectChange}
                        >
                          {integerValues.map((value) => (
                            <option key={value} value={value}>
                              {value}
                            </option>
                          ))}
                        </select>
                        {Array.isArray(images) &&
                          images?.map((img, index) =>
                            index < selectedValue ? (
                              <React.Fragment key={index}>
                                <div>
                                  <label
                                    className="my-3 mx-3"
                                    style={{ width: "15%" }}
                                  >
                                    صورة الوصف {index + 1}
                                  </label>
                                  <input
                                    className="my-3 mx-3"
                                    style={{ width: "79%" }}
                                    value={img}
                                    onChange={(e) =>
                                      setImages((prevImages) => {
                                        const updatedImages = [...prevImages];
                                        updatedImages[index] = e.target.value;
                                        return updatedImages;
                                      })
                                    }
                                  />
                                </div>
                                <img
                                  className="my-3 mx-3"
                                  src={img}
                                  alt={"خطأفي الصورة"}
                                />
                              </React.Fragment>
                            ) : (
                              <></>
                            )
                          )}

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
                            onClick={() => {
                              create();
                            }}
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
