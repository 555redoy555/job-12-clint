import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/LogIn/Login/Login';
import Register from './Components/LogIn/Register/Register';
import AuthProvider from './context/AuthProvider';
import ViewDetails from './Components/ViewDetails/ViewDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ExploreCars from './Components/ExploreCars/ExploreCars';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/details/:id'>
              <ViewDetails></ViewDetails>
            </PrivateRoute>
            <PrivateRoute path='/explore'>
              <ExploreCars></ExploreCars>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
