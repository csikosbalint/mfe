import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles'

const generateClassName = createGenerateClassName({
    productionPrefix: 'dash'
})

export default ({ history, onSignIn }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}