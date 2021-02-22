import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Waiting for your location..." />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default App;
