import React from "react";
import  {Route, BrowserRouter, } from 'react-router-dom';

import Home from '../Homepage/Home'
import Filter from "../FilterPage/Filter";
import Details from "../DetailsPage/DatilsPage";
import Header from "../FilterPage/Header";

const Router=()=>{
    return(
    <BrowserRouter>
        {/* <Routes> */}
            <Route path='*' component={props => <Header {...props} />}></Route>  {/* Render header component in all Pages */}
            <Route exact path="/" component={props => <Home {...props} />}></Route>
            <Route path="/filter" component={props => <Filter {...props} />}></Route>
            <Route path="/details" component={props => <Details {...props} />}></Route>
        {/* </Routes> */}
    </BrowserRouter>
    )
}
export default Router;