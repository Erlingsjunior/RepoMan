import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        <p>{rating}</p>
      </div>
    );
  }
}

export default Rating;

Rating.propTypes = { rating: PropTypes.number.isRequired };
