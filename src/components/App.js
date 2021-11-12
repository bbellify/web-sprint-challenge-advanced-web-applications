import React from 'react';
import { Route, Redirect } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import styled from 'styled-components';

import Header from './Header';
import LambdaHeader from './LambdaHeader';
import View from './View';
import Login from './Login';
import Logout from './Logout';

const App = () => {
  return (
    <AppContainer>
      <LambdaHeader/>
      <Header/>
      <RouteContainer>
        <PrivateRoute path='/view' component={View} />
        <PrivateRoute path='/logout' component={Logout} />
        <Route exact path="/">
          <Login/>
        </Route>          
      </RouteContainer>
    </AppContainer>
  )
}

export default App;

//Task List
//1. Create and import PrivateRoute component. X
//2. Create a Route for Login pointing to '/login.' X
//3. Create a PrivateRoute for View component point to '/view.' X
//4. Create a PrivateRoute for Logout component pointing to '/logout.' X


const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`
