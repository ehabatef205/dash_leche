import { React, useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { SideDash } from "../components/Navs/sidedash";
import deleteuser from "../api/basis/deleteuser";
import getAll from "../api/basis/allusers";

export default function DashpageUsers() {
  const [Users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getAll().then((res) => {
      setLoading(false);
      setUsers(res.data.response);
    });
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", direction: "rtl", "min-height": "75%" }}>
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
              <h3 style={{ marginRight: "45%" }}>المستخدمين</h3>
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
                        {Users?.map((user, key) => (
                          <div
                            key={user._id}
                            style={{
                              margin: "15px",
                              display: "flex",
                              border: "0.5px solid #eee",
                              justifyContent: "space-between",
                            }}
                          >
                            <div className="my-3 mx-3  ">
                              {" "}
                              {user.first_name} {user.last_name}
                            </div>
                            <div className="my-3 mx-3  "> {user.email}</div>
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
