import React from 'react'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

// pages
import Home from './Home'
import Buttons from './Buttons'
import Inputs from './Inputs'
import Modals from './Modals'

function Router() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/buttons' component={Buttons} />
            <Route
                exact
                path='/inputs'
                render={() => <Redirect to='/inputs/text' />}
            />
            <Route path='/inputs/:step?' component={Inputs} />
            <Route path='/modals' component={Modals} />
        </Switch>
    )
}

export default withRouter(Router)
