import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
       <p> Name:  {this.props.name} </p>
       <p> Producer:  {this.props.producer}</p>
       <p> Has Watermark: {this.props.hasWatermark ? 'Yes' : 'No'}</p>
       <p> Color:  {this.props.color} </p>
       <p> Weight:  {this.props.weight} </p>
      </div>
    );
  }
}
