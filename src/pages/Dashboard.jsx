import "./Dashboard.css";
import React from "react";
import Card from "react-bootstrap/Card";

import ListGroup from "react-bootstrap/ListGroup";

function Dashboard() {
  return (
    <>
      <div className="text-center margin5 d-flex gap-4 flex-column">
        <h1 className="mt-2 family-pinyon">Dashboard</h1>
        <div className="row mt-2 d-flex">
          <div className="col-12 col-sm-3 d-flex justify-content-center mt-4">
            <div className="card-dash">
              <div className="card-section border-b">
                <p className="card-title">Sales</p>
                <img
                  src="../src/assets/7898461_sales_business_finance_office_marketing_icon.svg"
                  alt="image-sales-icon"
                  className="img-icons"
                />
              </div>
              <div className="card-section border-b">
                <p className="card-text">USD 50.000</p>
              </div>
              <div className="card-section-low">
                <span className="me-2 color-green">+8.05%</span>
                <span className="card-reference-text-grey">
                  Since last month
                </span>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-3 d-flex justify-content-center mt-4">
            <div className="card-dash">
              <div className="card-section border-b">
                <p className="card-title">Earnings</p>
                <img
                  src="../src/assets/1737376_dollar_money_sign_icon.svg"
                  alt="image-sales-icon"
                  className="img-icons"
                />
              </div>
              <div className="card-section border-b">
                <p className="card-text">USD 2.356</p>
              </div>
              <div className="card-section-low">
                <span className="me-2 color-green">+15.08%</span>
                <span className="card-reference-text-grey">
                  Since last month
                </span>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-3 d-flex justify-content-center mt-4">
            <div className="card-dash">
              <div className="card-section border-b">
                <p className="card-title">Visitors</p>
                <img
                  src="../src/assets/8675239_ic_fluent_people_team_regular_icon.svg"
                  alt="image-sales-icon"
                  className="img-icons"
                />
              </div>
              <div className="card-section border-b">
                <p className="card-text">15.790</p>
              </div>
              <div className="card-section-low">
                <span className="me-2 color-red">-4.09%</span>
                <span className="card-reference-text-grey">
                  Since last month
                </span>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-3 d-flex justify-content-center mt-4">
            <div className="card-dash">
              <div className="card-section border-b">
                <p className="card-title">Orders</p>
                <img
                  src="../src/assets/9025885_shopping_cart_icon.svg"
                  alt="image-sales-icon"
                  className="img-icons"
                />
              </div>
              <div className="card-section border-b">
                <p className="card-text">15.790</p>
              </div>
              <div className="card-section-low">
                <span className="color-red">-8.05%</span>
                <span className="card-reference-text-grey">
                  Since last month
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-around">
          <div className="col-12 col-sm-3 d-flex justify-content-center mt-4">
            <div className="card-dash-table">
              <div className="card-section border-b">
                <p className="card-title">Sales</p>
              </div>
              <div className="pt-3">
                <img
                  src="/img/Excel-charts-11.png"
                  alt="VictorinoxLogo"
                  id="product3-victorinox-logo"
                  className="w-100"
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-3 d-flex justify-content-center mt-4">
            <div className="card-dash-table">
              <div className="card-section border-b">
                <p className="card-title">Earnings</p>
              </div>
              <div className="pt-3">
                <img
                  src="/img/Excel-charts-11.png"
                  alt="VictorinoxLogo"
                  id="product3-victorinox-logo"
                  className="w-100"
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-3 d-flex justify-content-center mt-4">
            <div className="card-dash-table">
              <div className="card-section border-b">
                <p className="card-title">Visitors</p>
              </div>
              <div className="pt-3">
                <img
                  src="/img/Excel-charts-11.png"
                  alt="VictorinoxLogo"
                  id="product3-victorinox-logo"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
