import React from "react";

const House = props => {
  console.log(props);
  const { name, address, city, state, zip } = props;
  return (
    <div className="House">
      <h3>House:</h3>
      <div className="propn">
        <h5>Property Name:</h5>
        {name}
      </div>
      <div className="add">
        <h5>Address:</h5>
        {address}
      </div>
      <div className="cit">
        <h5>City:</h5>
        {city}
      </div>
      <div className='st'>
      <h5>State:</h5>
      {state}
      </div>
      <div className='z'>
          <h5>Zip Code:</h5>
          {zip}
      </div>
      <button>Delete</button>
    </div>
  );
};

export default House;
