import React from "react";
import Card from "react-bootstrap/Card";

function Dashboard() {
  return (
    <div className="ml-5">
      <h1 className="text-center">Dashboard</h1>
      <div className="row">
        <div className="col my-3 mx-3">
          <Card border="secondary" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Sales</Card.Title>
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
        <div className="col my-3 mx-3 ">
          <Card border="secondary" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Sales</Card.Title>
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
        <div className="col my-3 mx-3">
          <Card border="secondary" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Sales</Card.Title>
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
        <div className="col my-3 mx-3">
          <Card border="secondary" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Sales</Card.Title>
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
