import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Container, Row, Col, Card } from "react-bootstrap";
import Loader from "./Loading";
 

const Exchange = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  // if (error)
  //   return <ErrorComponent message={"Error While Fetching Exchanges"} />;

  return (
    <Container fluid>
      {loading ? (
        <Loader />
      ) : (
        <Row className="justify-content-center">
          {exchanges.map((i) => (
            <ExchangeCard
              key={i.id}
              name={i.name}
              img={i.image}
              rank={i.trust_score_rank}
              url={i.url}
            />
          ))}
        </Row>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => (
  <Col md={3} className="rocket">
    <Card className="shadow">
      <a href={url} target={"blank"}>
        <div className="ing">
        <Card.Img
          variant="top"
          src={img}
          style={{ height: "5rem", objectFit: "contain" }}
          alt="Exchange"
        />
        </div>
      </a>
      <Card.Body>
        <div className="card_tittle">
        <Card.Title>{rank}</Card.Title>
        </div>
        <div className="card_text">
        <Card.Text>{name}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  </Col>
);

export default Exchange;
