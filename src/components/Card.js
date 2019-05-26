import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, picture, alttext} = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={alttext} />
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;