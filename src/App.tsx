import { Route, Switch } from 'wouter'
import classes from './App.module.scss'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'

import Elira from './pages/Elira'
import Finana from './pages/Finana'
import ImageExample from './pages/ImageExample'
import Pomu from './pages/Pomu'

export default function App (): JSX.Element {
  return (
    <div className={classes.container}>
      <SiteHeader />
      <Switch>
        <Route path='/Elira'>
          <Elira />
        </Route>
        <Route path='/Finana'>
          <Finana />
        </Route>
        <Route path='/Pomu'>
          <Pomu />
        </Route>
        <Route>
          <div>Whomst?</div>
          <ImageExample />
        </Route>
      </Switch>
      <SiteFooter />
    </div>
  )
}
