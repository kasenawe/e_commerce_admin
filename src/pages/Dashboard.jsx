import "./Dashboard.css";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Sidemenu from "../components/Sidemenu";
import Orders from "./Orders";
import axios from "axios";

import visitorsImg from "../assets/8675239_ic_fluent_people_team_regular_icon.svg";

function Dashboard() {
  const admin = useSelector((state) => state.admin);
  const [orders, setOrders] = useState([]);
  const [earnings, setEarnings] = useState("");
  const [visitors, setVisitors] = useState("");
  const minVisitors = 3000;
  const maxVisitors = 5000;
  let randomNumberVisitors =
    Math.floor(Math.random() * (maxVisitors - minVisitors + 1)) + minVisitors;

  const minEarnings = 15000;
  const maxEarnings = 20000;
  let randomNumberEarnings =
    Math.floor(Math.random() * (maxEarnings - minEarnings + 1)) + minEarnings;

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_DOMAIN}api/admin/orders`,
        {
          headers: {
            Authorization: `Bearer ${admin.token}`,
          },
        }
      );
      setOrders(response.data);
      setVisitors(new Intl.NumberFormat("de-DE").format(randomNumberVisitors));
      setEarnings(new Intl.NumberFormat("de-DE").format(randomNumberEarnings));
    };

    getOrders();
  }, []);

  const calculateTotal = () => {
    let total = 0;
    if (orders.length > 0) {
      for (const order of orders) {
        total += Number(order.totalPrice);
      }
    }
    return total;
  };

  return (
    <>
      <Container fluid>
        <Row>
          {admin && (
            <Col xs={12} md={2} lg={2} className="fixed">
              <Sidemenu />
            </Col>
          )}
          <Col xs={12} md={10} lg={10}>
            <div className="container">
              <div className="d-flex justify-content-between">
                <div className="card-dash">
                  <div className="bg-dark p-2 card-dash shadow ">
                    <div className="text-center m-1">
                      <p className="fs-5 m-0 p-1">Sales</p>
                      <img
                        src="https://kairoswatches-admin.vercel.app/src/assets/7898461_sales_business_finance_office_marketing_icon.svg"
                        alt="image-sales-icon"
                        style={{ height: "40px" }}
                      />
                      <hr className="m-2" />
                    </div>
                    <div className="d-flex m-1 justify-content-center align-items-center">
                      <div className="d-flex flex-column text-center mx-2">
                        <div>
                          <p className="fs-5 m-0">USD</p>
                        </div>
                        <div className="d-flex flex-column text-center ">
                          <p className="fs-5 m-0">{calculateTotal()}</p>
                        </div>
                      </div>

                      <div className=" d-flex flex-column text-center">
                        <div>
                          <span className=" fs-5 text-success">+8.05%</span>
                        </div>
                        <div className="px-1">
                          <span
                            className="text-secondary"
                            style={{ fontSize: "0.8rem" }}
                          >
                            Since last month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-dash">
                  <div className="bg-dark p-2 card-dash shadow ">
                    <div className="text-center m-1">
                      <p className="fs-5 m-0 p-1">Earnings</p>
                      <img
                        src="https://kairoswatches-admin.vercel.app/src/assets/1737376_dollar_money_sign_icon.svg"
                        alt="image-earnings-icon"
                        style={{ height: "40px" }}
                      />
                      <hr className="m-2" />
                    </div>
                    <div className="d-flex m-1 justify-content-center align-items-center">
                      <div className="d-flex flex-column text-center mx-2">
                        <div>
                          <p className="fs-5 m-0">USD</p>
                        </div>
                        <div className="d-flex flex-column text-center ">
                          <p className="fs-5 m-0">{earnings}</p>
                        </div>
                      </div>

                      <div className=" d-flex flex-column text-center">
                        <div>
                          <span className=" fs-5 text-success">+15.08%</span>
                        </div>
                        <div className="px-1">
                          <span
                            className="text-secondary"
                            style={{ fontSize: "0.8rem" }}
                          >
                            Since last month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-dash ">
                  <div className="bg-dark p-2  card-dash shadow ">
                    <div className="text-center m-1">
                      <p className="fs-5 m-0 p-1">Visitors</p>
                      <img
                        src={visitorsImg}
                        alt="image-visitors-icon"
                        style={{ height: "40px" }}
                      />
                      <hr className="m-2" />
                    </div>
                    <div className="d-flex m-1 justify-content-center align-items-center">
                      <div className="d-flex flex-column text-center me-2">
                        <p className="fs-5">{visitors}</p>
                      </div>
                      <div className=" d-flex flex-column text-center">
                        <div>
                          <span className="me-2 fs-5 text-danger">-4.09%</span>
                        </div>
                        <div>
                          <span
                            className="text-secondary"
                            style={{ fontSize: "0.8rem" }}
                          >
                            Since last month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-dash">
                  <div className="bg-dark p-2  card-dash shadow ">
                    <div className="text-center m-1">
                      <p className="fs-5 m-0 p-1">Orders</p>
                      <img
                        src="../assets/9025885_shopping_cart_icon.svg"
                        alt="image-visitors-icon"
                        style={{ height: "40px" }}
                      />
                      <hr className="m-2" />
                    </div>
                    <div className="d-flex m-1 justify-content-center align-items-center">
                      <div className="d-flex flex-column text-center me-2">
                        <p className="fs-5">
                          {orders.length > 0 ? `${orders.length}` : 0}
                        </p>
                      </div>
                      <div className=" d-flex flex-column text-center">
                        <div>
                          <span className="me-2 fs-5 text-danger">-8.05%</span>
                        </div>
                        <div>
                          <span
                            className="text-secondary"
                            style={{ fontSize: "0.8rem" }}
                          >
                            Since last month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <Orders />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
