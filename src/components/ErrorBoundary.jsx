import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-900 text-neutral-300">
          <h1 className="mb-4 text-4xl font-bold text-red-500">Something went wrong.</h1>
          <p className="mb-8 text-lg">We're sorry, an unexpected error occurred.</p>
          <button
            onClick={() => window.location.reload()}
            className="rounded-full bg-cyan-600 px-6 py-2 font-medium text-white transition-colors hover:bg-cyan-700"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
