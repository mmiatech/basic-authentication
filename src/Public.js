import { container } from 'aws-amplify';
import React from 'react';
import Container from './Container';

const Public = () => (
  <container>
    <h1>Public Route</h1>
  </container>
);

export default Public;