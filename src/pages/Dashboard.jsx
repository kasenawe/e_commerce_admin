import "./Dashboard.css";
import React from "react";
import Card from "react-bootstrap/Card";

import ListGroup from "react-bootstrap/ListGroup";

function Dashboard() {
  return (
    <div className="text-center">
      <h1 className="mt-2">Dashboard</h1>
      <div className="row mt-2">
        <div className="col-12 col-sm-6 d-flex justify-content-center mt-4">
          <Card style={{ width: "18rem" }} className="shadow">
            <ListGroup variant="flush" >
              <ListGroup.Item>
                <div className="d-flex justify-content-between">
                  <h4 className="card-header-text">Sales</h4>
                  <div className="circle">
                    <img
                      src="../src/assets/7898461_sales_business_finance_office_marketing_icon.svg"
                      alt="image-sales-icon"
                      className="img-icons"
                    />
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <h3 className="card-quantity-numbers">USD 10.356 </h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="me-2">-8.05%</span>
                <span className="card-reference-text-grey">
                  Since last month
                </span>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div className="col-12 col-sm-6 d-flex justify-content-center mt-4">
          <Card style={{ width: "18rem" }} className="shadow">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <div className="d-flex justify-content-between">
                  <h4 className="card-header-text">Earnings</h4>
                  <div className="circle">
                    <img
                      src="../src/assets/1737376_dollar_money_sign_icon.svg"
                      alt="image-sales-icon"
                      className="img-icons"
                    />
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <h3 className="card-quantity-numbers">USD 2.356</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="me-2">-15.08%</span>
                <span className="card-reference-text-grey">
                  Since last month
                </span>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div className="col-12 col-sm-6 d-flex justify-content-center mt-4">
          <Card style={{ width: "18rem" }} className="shadow">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <div className="d-flex justify-content-between">
                  <h4 className="card-header-text">Visitors</h4>
                  <div className="circle">
                    <img
                      src="../src/assets/8675239_ic_fluent_people_team_regular_icon.svg"
                      alt="image-sales-icon"
                      className="img-icons"
                    />
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <h3 className="card-quantity-numbers">15.790</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="me-2">-8.05%</span>
                <span className="card-reference-text-grey">
                  Since last month
                </span>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div className="col-12 col-sm-6 d-flex justify-content-center mt-4">
          <Card style={{ width: "18rem" }} className="shadow">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <div className="d-flex justify-content-between">
                  <h4 className="card-header-text">Orders</h4>
                  <div className="circle">
                    <img
                      src="../src/assets/9025885_shopping_cart_icon.svg"
                      alt="image-sales-icon"
                      className="img-icons"
                    />
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <h3 className="card-quantity-numbers">1.356 </h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="me-2">-8.05%</span>
                <span className="card-reference-text-grey">
                  Since last month
                </span>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-md-4 d-flex justify-content-center mt-4">
          <Card style={{ width: "18rem" }} className="shadow ">
            <Card.Body>
              <Card.Title className="card-header-text">Sales</Card.Title>
              <Card.Text>
                <img
                  src="/img/Excel-charts-11.png"
                  alt="VictorinoxLogo"
                  id="product3-victorinox-logo"
                  className="img-fluid"
                ></img>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center mt-4">
          <Card style={{ width: "18rem" }} className="shadow">
            <Card.Body>
              <Card.Title className="card-header-text">Earnings</Card.Title>
              <Card.Text>
                <img
                  src="/img/Excel-charts-11.png"
                  alt="VictorinoxLogo"
                  id="product3-victorinox-logo"
                  className="img-fluid"
                ></img>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-md-4 d-flex justify-content-center mt-4">
          <Card style={{ width: "18rem" }} className="shadow">
            <Card.Body>
              <Card.Title className="card-header-text">Visitors</Card.Title>
              <Card.Text>
                <img
                  src="/img/Excel-charts-11.png"
                  alt="VictorinoxLogo"
                  id="product3-victorinox-logo"
                  className="img-fluid"
                ></img>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
