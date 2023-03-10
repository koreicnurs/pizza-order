import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from "./components/UI/Layout/Layout";
import Dishes from "./containers/Dishes/Dishes";
import AddDish from "./containers/AddDish/AddDish";
import EditDish from "./containers/EditDish/EditDish";
import MakeOrders from "./containers/MakeOrders/MakeOrders";
import Orders from "./containers/Orders/Orders";


const App = () => {
  return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Dishes}/>
          <Route path="/add" exact component={AddDish}/>
            <Route path="/make" exact component={MakeOrders}/>
            <Route path="/orders" exact component={Orders}/>
            <Route path="/edit/:id" exact component={EditDish}/>
          <Route render={() => <h1>Not Found</h1>}/>
        </Switch>
      </Layout>
  )
};

export default App;
