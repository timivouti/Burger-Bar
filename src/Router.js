import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import OrderList from './components/OrderList';
import ProductChooser from './components/ProductChooser';
import DeliveryDetails from './components/DeliveryDetails';
import OrderOverview from './components/OrderOverview';

const RouterComponent = () => {
  const { navStyle, titleStyle, sceneStyle } = styles;

  return (
    <Router>
      <Scene key="root">
        <Scene key="auth" navigationBarStyle={navStyle} titleStyle={titleStyle}>
          <Scene
            sceneStyle={sceneStyle}
            key="login"
            component={LoginForm}
            title="Login"
            initial
          />
        </Scene>
        <Scene key="main" navigationBarStyle={navStyle} titleStyle={titleStyle}>
          <Scene
            sceneStyle={sceneStyle}
            key="orderList"
            component={OrderList}
            title="Burger Bar"
          />
          <Scene
            sceneStyle={{ paddingTop: 100 }}
            key="productChooser"
            component={ProductChooser}
            title="Burger Bar"
          />
          <Scene
            scenestyle={sceneStyle}
            key="deliveryDetails"
            component={DeliveryDetails}
            title="Burger Bar"
          />
          <Scene
            scenestyle={sceneStyle}
            key="orderOverview"
            component={OrderOverview}
            title="Burger Bar"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

const styles = {
  sceneStyle: {
    paddingTop: 54
  },
  navStyle: {
    backgroundColor: '#60CBEB'
  },
  titleStyle: {
    color: 'white'
  }
};

export default RouterComponent;
