// In another Javascript file, create the ErrorBoundary class component, it will hold an error property in the state. The error value is set to null.
// Use the componentDidCatch lifecycle to set the value of the error property.
// Render an error message with some details. (We will use this component to wrap the BuggyCounter component in our below simulations)
// Use this below code to show the Error

import React from "react";

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {error: null, errorInfo: null};
    }

    componentDidCatch(error, errorInfo) {
        this.setState({error, errorInfo});
    }
    
    render() {
        if (this.state.error !== null) {
          // this.state.error && this.state.error.toString()
          return (
            <details style={{ whiteSpace: 'pre-wrap' }}>
                {this.state.error?.toString()}
                <br />
                {this.state.errorInfo.componentStack}
            </details>
          )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;