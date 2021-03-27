import React, { useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './HomeComponents/Home';
import MyNavbar from "./MyNavbar";
import TodoApp from "./TodoAppComponents/TodoApp"


function RoutePaths() {

    var forUseEffect;
    useEffect(() => {
        localStorage.removeItem("redirectTo");
    }, [forUseEffect])

    return (
        <Router>
            <MyNavbar />

            <Switch>
        
                <Route path="/todo-app">
                    <TodoApp />
                </Route>

                <Route path="/">
                    {
                        localStorage.getItem('redirectTo') ? <Redirect to={localStorage.getItem('redirectTo')} /> 
                        : null
                        
                    }
                    <Home />
                </Route>

            </Switch>
        </Router>
    )
}

export default RoutePaths
