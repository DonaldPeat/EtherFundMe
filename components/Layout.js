import React from 'react';

export default props => {
  return (
    <div>
      <h1> header </h1>
      {props.children}
      <h1> footer </h1>
    </div>
  );
};
