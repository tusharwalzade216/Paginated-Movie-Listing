import PropTypes from "prop-types";
import { OffcanvasTitle } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import { Tooltip } from "../../atoms";

const TooltipOverlay = ({ text }) => (
    <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={
            <Tooltip id={text}>
                {text}
            </Tooltip>
        }
    >
        <OffcanvasTitle>{text}</OffcanvasTitle>
    </OverlayTrigger>
)

TooltipOverlay.propTypes = {
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};

export default TooltipOverlay;
