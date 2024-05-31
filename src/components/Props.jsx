import React from 'react'
import PropTypes from 'prop-types';

const Props = (props) => {
  return (
    <div>
      <h1> {props.name}</h1>
      <h3> {props.description}</h3>
      <h3>{props.age}</h3>
      <h3>{props.marriagestatus}</h3>
       
    </div>
  )
}
Props.prototypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  marriagestatus: PropTypes.bool.isRequired
};



export default Props;
