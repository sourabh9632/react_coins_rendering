import React from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => (
  <Col xs={12} md={6} lg={4} className="mb-4">
    <Link to={`/coin/${id}`} className="text-decoration-none">
      <Card className="h-500 shadow">
        <Card.Body className="d-flex flex-column justify-content-between">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="cla">
            <Card.Img
              variant="top" 
              src={img}
              alt="Exchange"
               
            />
            </div>
            
            <Card.Title as="h6" className="m-6">
              {symbol}
            </Card.Title>
          </div>
          <Card.Text className="text-truncate mb-2">{name}</Card.Text>
          <Card.Text className="mb-0">
            {price ? `${currencySymbol}${price}` : "NA"}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  </Col>
);

export default CoinCard;
