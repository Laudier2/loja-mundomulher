import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Header from "../components/header";
import Descricao from '../components/descricao/descricao-produto';
import Products from "../components/products";

export default function Router() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Products} />
                <Route exact path='/desc' component={Descricao} />
            </Switch>
        </div>
    )
}
