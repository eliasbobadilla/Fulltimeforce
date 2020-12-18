import React from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import { Home } from '../home/home';
import 'antd/dist/antd.css';
import './App.scss';

// eslint-disable-next-line jsdoc/require-returns
/**
 * Aplicación creada con **Create React App** v4.0.1, para mas información
 * visita {@link https://create-react-app.dev/ create-react-app} o la documentación
 * oficial de {@link https://es.reactjs.org/docs/create-a-new-react-app.html React}
 *
 * @function App
 * @version 0.0.0
 * @author Elías Bobadilla <elias.bobadilla@gmail.com>
 * {@link https://github.com/eliasbobadilla GitHub}
 */
const App = () => {
  const { loading } = useSelector((state) => state.home);
  return (
    <Spin spinning={loading} size="large">
      <Home />
    </Spin>
  );
};

export default App;
