import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import Layout from './hocs/Layout'
import Home from './containers/Home'
import Login from './containers/Login'
import Register from './containers/Register'
import Dashboard from './containers/Dashboards'
import {Provider} from 'react-redux'
import store from './store'
 
function App(){
    return(
        <Provider store={store}>
            <Layout>
                <Routes>
                    <Route  path='/home' element={<Home/>} />
                    <Route  path='/register' element={<Register/>} />
                    <Route exact path='/login' element={<Login/>} />
                    <Route exact path='/dashboard' component={<Dashboard/>} />          
                </Routes>
            </Layout>
        </Provider>
    )
}

export default App