import "./Dashboard.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Sidemenu from "../components/Sidemenu";
import Orders from "./Orders";

function Dashboard() {
  const admin = useSelector((state) => state.admin);

  return (
    <>
      <Container fluid>
        <Row>
          {admin && (
            <Col xs={12} md={2} lg={2} className="fixed">
              <Sidemenu />
            </Col>
          )}
          <Col xs={12} md={10} lg={10} className="pe-5">
            <div className="container">
              <div className="row" style={{ width: "100%" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center card-dash">
                    <div className="bg-dark p-2 card-dash shadow ">
                      <div className="text-center m-1">
                        <p className="fs-5 m-0 p-1">Sales</p>
                        <img
                          src="../src/assets/7898461_sales_business_finance_office_marketing_icon.svg"
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
                            <p className="fs-5 m-0">50.000</p>
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

                  <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center card-dash">
                    <div className="bg-dark p-2 card-dash shadow ">
                      <div className="text-center m-1">
                        <p className="fs-5 m-0 p-1">Earnings</p>
                        <img
                          src="../src/assets/1737376_dollar_money_sign_icon.svg"
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
                            <p className="fs-5 m-0">2.356</p>
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

                  <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center card-dash ">
                    <div className="bg-dark p-2  card-dash shadow ">
                      <div className="text-center m-1">
                        <p className="fs-5 m-0 p-1">Visitors</p>
                        <img
                          src="../src/assets/8675239_ic_fluent_people_team_regular_icon.svg"
                          alt="image-visitors-icon"
                          style={{ height: "40px" }}
                        />
                        <hr className="m-2" />
                      </div>
                      <div className="d-flex m-1 justify-content-center align-items-center">
                        <div className="d-flex flex-column text-center me-2">
                          <p className="fs-5">8.678</p>
                        </div>
                        <div className=" d-flex flex-column text-center">
                          <div>
                            <span className="me-2 fs-5 text-danger">
                              -4.09%
                            </span>
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

                  <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center card-dash">
                    <div className="bg-dark p-2  card-dash shadow ">
                      <div className="text-center m-1">
                        <p className="fs-5 m-0 p-1">Orders</p>
                        <img
                          src="../src/assets/8675239_ic_fluent_people_team_regular_icon.svg"
                          alt="image-visitors-icon"
                          style={{ height: "40px" }}
                        />
                        <hr className="m-2" />
                      </div>
                      <div className="d-flex m-1 justify-content-center align-items-center">
                        <div className="d-flex flex-column text-center me-2">
                          <p className="fs-5">15.790</p>
                        </div>
                        <div className=" d-flex flex-column text-center">
                          <div>
                            <span className="me-2 fs-5 text-danger">
                              -8.05%
                            </span>
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
