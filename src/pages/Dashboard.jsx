import "./Dashboard.css";
import React from "react";

function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center card-dash">
            <div className="bg-dark p-2 card-dash shadow ">
              <div className="text-center m-1">
                <p className="fs-4 m-0 p-1">Sales</p>
                <img
                  src="../src/assets/7898461_sales_business_finance_office_marketing_icon.svg"
                  alt="image-sales-icon"
                  style={{ height: "40px" }}
                />
                <hr className="m-2" />
              </div>
              <div className="d-flex m-1 justify-content-center align-items-center">
                <div className="d-flex flex-column text-center me-2">
                  <p className="fs-5">USD 50.000</p>
                </div>
                <div className=" d-flex flex-column text-center">
                  <div>
                    <span className="me-2 fs-5 text-success">+8.05%</span>
                  </div>
                  <div>
                    <span className="me-2 fs- text-secondary">
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
                <p className="fs-4 m-0 p-1">Earnings</p>
                <img
                  src="../src/assets/1737376_dollar_money_sign_icon.svg"
                  alt="image-earnings-icon"
                  style={{ height: "40px" }}
                />
                <hr className="m-2" />
              </div>
              <div className="d-flex m-1 justify-content-center align-items-center">
                <div className="d-flex flex-column text-center me-2">
                  <p className="fs-5">USD 2.356</p>
                </div>
                <div className=" d-flex flex-column text-center">
                  <div>
                    <span className="me-2 fs-5 text-success">+15.08%</span>
                  </div>
                  <div>
                    <span className="me-2 fs- text-secondary">
                      Since last month
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center ">
            <div className="bg-dark p-2  card-dash shadow ">
              <div className="text-center m-1">
                <p className="fs-4 m-0 p-1">Visitors</p>
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
                    <span className="me-2 fs-5 text-danger">-4.09%</span>
                  </div>
                  <div>
                    <span className="me-2 fs- text-secondary">
                      Since last month
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center ">
            <div className="bg-dark p-2  card-dash shadow ">
              <div className="text-center m-1">
                <p className="fs-4 m-0 p-1">Orders</p>
                <img
                  src="../src/assets/9025885_shopping_cart_icon.svg"
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
                    <span className="me-2 fs-5 text-danger">-8.05%</span>
                  </div>
                  <div>
                    <span className="me-2 fs- text-secondary">
                      Since last month
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
