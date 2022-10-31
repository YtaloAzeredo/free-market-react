import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { SignIn } from '../pages/sign-in'
import { SignUp } from '../pages/sign-up'
import { Home } from '../pages/home'

export const MyRoutes = () => {
  return (
      <BrowserRouter>    
        <Switch>
          <Route exact path='/'><SignIn/></Route>
          <Route path='/home'><Home/></Route>
          <Route path='/signup'><SignUp/></Route>
        </Switch>
      </BrowserRouter>
  )
}
