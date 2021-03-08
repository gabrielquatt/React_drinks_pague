import React from 'react'
import { BrowserRouter, Route ,Switch} from 'react-router-dom'

import DrinkNewContainer from '../pages/DrinkNewContainer'
import AllDrinksContainer from '../pages/AllDrinksContainer'
import HomeContainer from '../pages/HomeContainer'
import NotFound from '../pages/404'
//componente funcional 

const App = () => (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ HomeContainer } />
                <Route exact path="/home" component={ HomeContainer } />
                <Route exact path="/home/all" component={ AllDrinksContainer }/>
                <Route exact path="/home/new" component={ DrinkNewContainer }/>
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
