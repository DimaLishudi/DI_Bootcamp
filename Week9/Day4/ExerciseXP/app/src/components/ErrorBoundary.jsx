import React from "react";

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true});
        console.log(error);
        console.log(errorInfo);
    }
    
    render() {
        if (this.state.hasError) {
          return (
            <h1> An error has occured.</h1>
          )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;