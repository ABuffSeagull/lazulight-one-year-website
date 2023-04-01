import { Route, Redirect, Switch } from 'wouter'
import LandingHome from './landing/pages/Home'
import ScrollToTop from './shared/components/ScrollToTop'

import { PageWrapper as Year1PageWrapper } from './year1/components/PageWrapper'
import Year1Home from './year1/pages/Home'
import Year1Elira from './year1/pages/Elira'
import Year1Finana from './year1/pages/Finana'
import Year1Pomu from './year1/pages/Pomu'
import Year1Fnf from './year1/pages/FNF'
import Year1DiamondCityLights from './year1/pages/DiamondCityLights'
import Year1VisualNovel from './year1/pages/VisualNovel'
import Year1Art from './year1/pages/Art'
import Year1Messages from './year1/pages/Messages'
import Year1About from './year1/pages/About'

import { PageWrapper as Year2PageWrapper } from './year2/components/PageWrapper'
import Year2Home from './year2/pages/Home'
import Year2Elira from './year2/pages/Elira'
import Year2Finana from './year2/pages/Finana'
import Year2Pomu from './year2/pages/Pomu'
import Year2Doujin from './year2/pages/Doujin'
import Year2Song from './year2/pages/Song'
import Year2About from './year2/pages/About'

export default function App (): JSX.Element {
  return (
    <>
      {/* Notes: (Brandon)
        This file switches the route and passes the name of the page to PageWrapper
        Doing this allows everything in PageWrapper to dynamically change based on the value of 'page'
        Because for some reason it wouldn't dynamically change based on 'location.pathname'

        Content of PageWrapper: header, footer, background
      */}
      <Switch>
        {/* Redirect the pages of the first anniversary version of the site */}
        <Route path='/elira'> <Redirect to='/anniversary1/elira' /> </Route>
        <Route path='/finana'> <Redirect to='/anniversary1/finana' /> </Route>
        <Route path='/pomu'> <Redirect to='/anniversary1/pomu' /> </Route>
        <Route path='/project-fnf'> <Redirect to='/anniversary1/project-fnf' /> </Route>
        <Route path='/project-dcl'> <Redirect to='/anniversary1/project-dcl' /> </Route>
        <Route path='/project-vn'> <Redirect to='/anniversary1/project-vn' /> </Route>
        <Route path='/all-art'> <Redirect to='/anniversary1/all-art' /> </Route>
        <Route path='/all-messages'> <Redirect to='/anniversary1/all-messages' /> </Route>
        <Route path='/about'> <Redirect to='/anniversary1/about' /> </Route>

        <Route path='/anniversary1/elira'>
          <Year1PageWrapper page='elira' animation='on'>
            <Year1Elira />
          </Year1PageWrapper>
        </Route>
        <Route path='/anniversary1/finana'>
          <Year1PageWrapper page='finana' animation='on'>
            <Year1Finana />
          </Year1PageWrapper>
        </Route>
        <Route path='/anniversary1/pomu'>
          <Year1PageWrapper page='pomu' animation='on'>
            <Year1Pomu />
          </Year1PageWrapper>
        </Route>
        <Route path='/anniversary1/project-fnf'>
          <Year1PageWrapper page='fnf' animation='off'>
            <Year1Fnf page='fnf' />
          </Year1PageWrapper>
        </Route>
        <Route path='/anniversary1/project-dcl'>
          <Year1PageWrapper page='dcl' animation='on'>
            <Year1DiamondCityLights page='dcl' />
          </Year1PageWrapper>
        </Route>
        <Route path='/anniversary1/project-vn'>
          <Year1PageWrapper page='vn' animation='on'>
            <Year1VisualNovel page='vn' />
          </Year1PageWrapper>
        </Route>
        {/* (Brandon) I intentionally give the following pages the incorrect 'page' variable - It's only used for styling */}
        <Route path='/anniversary1/all-art'>
          <Year1PageWrapper page='finana' animation='on'>
            <Year1Art page='finana' />
          </Year1PageWrapper>
        </Route>
        <Route path='/anniversary1/all-messages'>
          <Year1PageWrapper page='elira' animation='on'>
            <Year1Messages page='elira' />
          </Year1PageWrapper>
        </Route>
        <Route path='/anniversary1/about'>
          <Year1PageWrapper page='pomu' animation='on'>
            <Year1About page='pomu' />
          </Year1PageWrapper>
        </Route>
        <Route path='/anniversary1'>
          <Year1PageWrapper page='home' animation='off'>
            <Year1Home />
          </Year1PageWrapper>
        </Route>

        <Route path='/anniversary2/elira'>
          <Year2PageWrapper page='elira' animation='on'>
            <Year2Elira />
          </Year2PageWrapper>
        </Route>
        <Route path='/anniversary2/finana'>
          <Year2PageWrapper page='finana' animation='on'>
            <Year2Finana />
          </Year2PageWrapper>
        </Route>
        <Route path='/anniversary2/pomu'>
          <Year2PageWrapper page='pomu' animation='on'>
            <Year2Pomu />
          </Year2PageWrapper>
        </Route>
        <Route path='/anniversary2/project-doujin'>
          <Year2PageWrapper page='doujin' animation='off'>
            <Year2Doujin />
          </Year2PageWrapper>
        </Route>
        <Route path='/anniversary2/project-song'>
          <Year2PageWrapper page='song' animation='on'>
            <Year2Song />
          </Year2PageWrapper>
        </Route>
        <Route path='/anniversary2/about'>
          <Year2PageWrapper page='about' animation='on'>
            <Year2About />
          </Year2PageWrapper>
        </Route>
        <Route path='/anniversary2'>
          <Year2PageWrapper page='home' animation='off'>
            <Year2Home />
          </Year2PageWrapper>
        </Route>

        <Route>
          <LandingHome />
        </Route>
      </Switch>
      {/* Runs a function to scroll to top after route change */}
      <ScrollToTop />
    </>
  )
}
