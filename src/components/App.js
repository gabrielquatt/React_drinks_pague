import React from 'react'
import { BrowserRouter, Route ,Switch} from 'react-router-dom'

import Home from '../pages/Home'
import DrinkNew from '../pages/DrinkNew'
import NotFound from '../pages/NotFound'
//componente funcional 

const App = () => (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={ Home }/>
                <Route exact path="/home/new" component={ DrinkNew }/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
)

/* function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/home/new" component={DrinkNew}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
} */

export default App
