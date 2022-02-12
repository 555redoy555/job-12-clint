import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../Components/Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div style={{ minHeight: "600px" }}>
                <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            </div>
        );
    }
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    user.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location },
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default PrivateRoute;