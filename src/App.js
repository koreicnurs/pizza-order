import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from "./components/UI/Layout/Layout";
import Dishes from "./containers/Dishes/Dishes";


const App = () => {
  return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Dishes}/>
          {/*<Route path="/orders" exact component={}/>*/}
          <Route render={() => <h1>Not Found</h1>}/>
        </Switch>
      </Layout>
  )
};

export default App;
