import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default (props) => {
  const token = localStorage.getItem('token');

  return token ? <Route {...props} /> : <Redirect to="/login" />;
};
