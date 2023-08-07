import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import Loader from "./Loading";
// import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  // if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;

  return (
    <Container fluid className="px-5 py-3">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Form>
            <Row>
              <Col md={3}>
                <Form.Label htmlFor="currency" className="mb-0">
                  Currency:
                </Form.Label>
              </Col>
              <Col md={10}>
                <Form.Control
                  as="select"
                  id="currency"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="mb-3"
                >
                  <option value="inr">INR</option>
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                </Form.Control>
              </Col>
            </Row>
          </Form>

          <Row xs={3} md={6} lg={4} className="g-4">
            {coins.map((i) => (
              <Col key={i.id}>
                <CoinCard
                  id={i.id}
                  name={i.name}
                  price={i.current_price}
                  img={i.image}
                  symbol={i.symbol}
                  currencySymbol={currencySymbol}
                />
              </Col>
            ))}
          </Row>

          <div className="d-flex overflow-auto">
            {btns.map((item, index) => (
              <Button
                key={index}
                variant="dark"
                className="me-2"
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default Coins;
