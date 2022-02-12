import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import AdminRoute from '../AdminRoute/AdminRoute';
import Footer from '../Footer/Footer';
import useAuth from '../Hooks/useAuth';
import AddACar from './AddACar/AddACar';
import AddReview from './AddReview/AddReview';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import ManageProducts from './ManageProducts/ManageProducts';
import MyOrders from './MyOrders/MyOrders';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();

    const drawer = (
        <div className="flex md:flex-col justify-between ">
            <div>
                <Link className="no-underline text-lg block my-2" to={`/home`}>
                    <button>Back To Home</button>
                </Link>
                <Link className="no-underline text-lg block my-2" to={`${url}`}>
                    <button>My Orders</button>
                </Link>
                <Link
                    className="no-underline text-lg block my-2"
                    to={`${url}/pay`}
                >
                    <button>Payment</button>
                </Link>
                <Link
                    className="no-underline text-lg block my-2"
                    to={`${url}/addReview`}
                >
                    <button>Review</button>
                </Link>
                <p className="md:border-t-2 border-gray-500 my-5"></p>
            </div>

            {admin && (
                <div>
                    <Link
                        className="no-underline text-lg block my-2"
                        to={`${url}/manageAllOrders`}
                    >
                        Manage All Orders
                    </Link>
                    <Link
                        className="no-underline text-lg block my-2"
                        to={`${url}/manageProducts`}
                    >
                        Manage Products
                    </Link>
                    <Link
                        className="no-underline text-lg block my-2"
                        to={`${url}/addACar`}
                    >
                        Add A Product
                    </Link>
                    <Link
                        className="no-underline text-lg block my-2"
                        to={`${url}/makeAdmin`}
                    >
                        Make Admin
                    </Link>
                </div>
            )}
        </div>
    );
    return (
        <div>
            <div className="grid grid-cols-12 gap-5" style={{ minHeight: "500px" }}>
                <div className="col-span-12 md:col-span-2 p-5 bg-green-400">
                    {drawer}
                </div>
                <div className="col-span-12 md:col-span-10 py-10">
                    <Switch>
                        <Route exact path={path}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/pay`}>

                        </Route>
                        <Route path={`${path}/addReview`}>
                            <AddReview></AddReview>
                        </Route>
                        <AdminRoute path={`${path}/manageAllOrders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addACar`}>
                            <AddACar></AddACar>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                    </Switch>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;