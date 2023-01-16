import React from "react";

import { Alert } from "../../molecules";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorMessage: '' };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, errorMessage: error };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <Alert
                isOpen={this.state.hasError}
                message={this.state.errorMessage}
                title="Something went wrong"
            />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
