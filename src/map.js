import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
    render() {
        const MyMapComponent = withScriptjs(withGoogleMap(props => (
            <GoogleMap
              defaultZoom={10}
              defaultCenter={{ lat: 43.6532, lng: -79.3832 }}
            >
              {props.isMarkerShown && (
                <Marker
                  position={{
                    lat: this.props.coordinates[0],
                    lng: this.props.coordinates[1]
                  }}
                />
              )}
            </GoogleMap>
          )));
        return <div>
            <MyMapComponent isMarkerShown containerElement={<div style={{ height: `1000px`, width: "1000px" }} />} mapElement={<div style={{ height: `100%` }} />} loadingElement={<div style={{ height: `100%` }} />} googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9oYKl1lOYC7Cv25ElXXp3TpemEKbyAok" />
          </div>;
    }
};
export default Map;
