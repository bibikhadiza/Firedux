import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import CSSModules from 'react-css-modules';
import styles from './Loader.scss';

const Loader = () => (
  <CircularProgress className='loader' size={80} thickness={8} />
);

export default CSSModules(Loader, styles);
