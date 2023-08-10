import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { SideDash } from "../components/Navs/sidedash";
import * as Products from "../api/basis/products";

export default function EditProduct() {
  const [formData, setFormData] = useState();
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      Products.getProduct(id).then((res) => {
        console.log(res.data)
        setFormData(res.data);
        setImages(res.data.images);
      });
    }
  }, [id]);

  const update = async () => {
    if (true) {
      await Products.updateProduct(
        formData.name,
        formData.desc,
        formData.price_before,
        formData.price_after,
        formData.quantity,
        images,
        id
      ).then((res) => {
        console.log(res)
        navigate(-1);
      });
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      setFormData({
        ...formData,
        desc: formData.desc + '\n',
      })// Add a new line to the input value
    }
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
              <h3 style={{ marginLeft: "35%" }}>{id}</h3>
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
                          <textarea
                            className="my-3 mx-3"
                            style={{ flex: "0 %25", width: "80%" }}
                            value={formData?.desc}
                            onKeyPress={handleKeyPress}
                            rows={10}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                desc: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <label className="my-3 mx-3" style={{ width: "15%" }}>
                            السعر قبل $
                          </label>
                          <input
                            className="my-3 mx-3"
                            style={{ flex: "0 %25", width: "80%" }}
                            value={formData?.price_before}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                price_before: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <label className="my-3 mx-3" style={{ width: "15%" }}>
                            السعر بعد $
                          </label>
                          <input
                            className="my-3 mx-3"
                            style={{ flex: "0 %25", width: "80%" }}
                            value={formData?.price_after}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                price_after: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <label className="my-3 mx-3" style={{ width: "15%" }}>
                            الكمية
                          </label>
                          <input
                            className="my-3 mx-3"
                            style={{ flex: "0 %25", width: "80%" }}
                            value={formData?.quantity}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                quantity: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          {Array.isArray(images) && images?.map((img, index) => (
                            <React.Fragment key={index}>
                              <div>
                                <label className="my-3 mx-3" style={{ width: "15%" }}>
                                  صورة الوصف {index + 1}
                                </label>
                                <input
                                  className="my-3 mx-3"
                                  style={{ flex: "0 %25", width: "79%" }}
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
                          ))}
                        </div>
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
                              update();
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
