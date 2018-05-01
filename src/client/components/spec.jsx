import React from "react";
import PropTypes from "prop-types";
import getSpec from "./sample_spec.json";
import SwaggerUi, { presets } from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";

class SwaggerUI extends React.Component {
  componentDidMount() {
    SwaggerUi({
      dom_id: "#swaggerContainer",
      url: this.props.url,
      spec: this.props.spec,
      presets: [presets.apis]
    });
  }

  render() {
    return <div id="swaggerContainer" />;
  }
}

SwaggerUI.propTypes = {
  url: PropTypes.string,
  spec: PropTypes.object
};

SwaggerUI.defaultProps = {
  url: `http://petstore.swagger.io/v2/swagger.json`
};

class Spec extends React.Component {
  render() {
    //const sample_spec = getSpec;style={divStyles}

    return (
      <div>
        <SwaggerUI spec={getSpec} />
      </div>
    );
  }
}

export default Spec;
/*

import React, {Component} from 'react';
import SwaggerUi, {presets} from 'swagger-ui';
//import 'swagger-ui/dist/swagger-ui.css';
import "../styles/swagger.css";

class Spec extends Component {
  componentDidMount() {
    SwaggerUi({
      dom_id: '#swaggerContainer',
      url: `http://petstore.swagger.io/v2/swagger.json`,
      presets: [presets.apis],
    });
  }

  render() {
    return (
      <div id="swaggerContainer" />
    );
  }
}

export default Spec;
*/
