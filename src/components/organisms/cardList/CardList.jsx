import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";

import styles from "./cardList.module.css";
import { Button, Title } from "../../atoms";
import { Card, CardSkeleton } from "../../molecules";

const CardList = ({ isLoading, list, title }) => (
  <>
    <Title as="h2" className="mt-2">{title}</Title>
    <Row
      className={`g-4 mx-0 my-2 ${styles.container}`}
      lg={5}
      md={3}
      sm={2}
      xl={5}
      xs={1}
      xxl={5}
    >
      {isLoading ?
        [...Array(11).keys()].slice(1)?.map((_, index) => (
          <Col key={index}>
            <CardSkeleton />
          </Col>
        ))
        :
        list?.map((element) => (
          <Col key={element?.imdbID}>
            <Card
              header={element?.Title}
              imageUrl={element?.Poster}
              footer={<>
                <Button size="sm" variant="outline-primary">LIKE</Button>
                <Button size="sm" variant="outline-success">OWN</Button>
              </>}
            />
          </Col>
        ))}
    </Row>
  </>
);

CardList.propTypes = {
  isLoading: PropTypes.bool,
  list: PropTypes.array.isRequired,
  title: PropTypes.string
};

CardList.defaultProps = {
  isLoading: false,
  title: 'Sample Movie List'
};

export default CardList;
