import PropTypes from "prop-types";
import { useLayoutEffect, useState } from "react";
import { Alert as BAlert } from "react-bootstrap";

const Alert = ({ isOpen, message, title, variant }) => {
    const [show, setShow] = useState(isOpen);

    useLayoutEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 3000);
    }, []);

    return (
        <BAlert
            dismissible
            show={show}
            onClose={() => setShow(false)}
            variant={variant}>
            <BAlert.Heading>{title}</BAlert.Heading>
            <p>{message}</p>
        </BAlert>
    );
}

Alert.propTypes = {
    isOpen: PropTypes.bool,
    message: PropTypes.string.isRequired,
    title: PropTypes.string,
    variant: PropTypes.oneOf([
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'dark',
        'light'
    ])
};

Alert.defaultProps = {
    isOpen: false,
    title: 'Error',
    variant: 'danger'
};

export default Alert;
