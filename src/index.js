import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import Header from './components/Header'
import TabContainer from './components/TabContainer'

import About from './components/tabs/About'
import Experience from './components/tabs/Experience'
import Projects from './components/tabs/Projects'
import Skills from './components/tabs/Skills'
import Contact from './components/tabs/Contact'

const Root = () => (
  <BrowserRouter>
    <div>
      <Header />
      <TabContainer />
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/portfolio'} component={About} />
        <Route exact path={process.env.PUBLIC_URL + '/experience'} component={Experience} />
        <Route exact path={process.env.PUBLIC_URL + '/projects'} component={Projects} />
        <Route exact path={process.env.PUBLIC_URL + '/skills'} component={Skills} />
        <Route exact path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
      </Switch>
    </div>
  </BrowserRouter>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
registerServiceWorker();
