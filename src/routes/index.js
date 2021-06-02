import React from 'react';
import { Route } from 'react-router-dom';

const Routes = ({ component: Component, ...rest }) => {
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          return <Component {...rest} {...props} />;
        }}
      />
    </div>
  );
};

export default Routes;
