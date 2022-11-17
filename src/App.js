import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Layout from './hocs/Layout'
import Home from './containers/Home'
import Login from './containers/Login'
import Register from './containers/Register'
import Dashboard from './containers/Dashboards'


function App(){
    return(
        <Router>
            salam
            <Layout>
                <div>Salam</div>
                {/* <Route exact path='/' component={Home} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/dashboard' component={Dashboard} />           */}
            </Layout>
        </Router>
    )
}

export default App