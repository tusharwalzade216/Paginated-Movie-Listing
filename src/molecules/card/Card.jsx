import PropTypes from "prop-types";
import { Card as BCard } from "react-bootstrap";

import styles from "./card.module.css";
import { TooltipOverlay } from "../tooltipOverlay";

const Card = ({ footer, header, imageUrl }) => (
  <BCard bg="light" className="shadow">
    <BCard.Header
      bsPrefix="card-header bg-white"
      className={styles.cardTitle}>
      <TooltipOverlay text={header} />
    </BCard.Header>
    <BCard.Img
      alt={header}
      className={styles.image}
      src={imageUrl}
      variant="top"
    />
    <BCard.Footer
      bsPrefix="card-footer bg-white d-flex justify-content-between">
      {footer}
    </BCard.Footer>
  </BCard>
);

Card.propTypes = {
  footer: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  imageUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

export default Card;
