import React, { Component } from 'react';
import { ReactBingmaps } from 'react-bingmaps';

class Map extends Component {
  render() {
    return (
      <ReactBingmaps
        bingmapKey={
          'AotTd1MWJlZ9V0IuQu_M6w89x0UOGopE733R6bQgba2cERUfPalZoRNyqs9XzHUv'
        }
        center={this.props.latlng}
        pushPins={[
          {
            location: this.props.latlng,
            option: { color: 'red' }
          }
        ]}
      ></ReactBingmaps>
    );
  }
}
export default Map;
