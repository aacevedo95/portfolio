import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import Header from './components/Header'
import TabContainer from './components/TabContainer'

import About from './components/tabs/About'
import Experiences from './components/tabs/Experiences'
import Projects from './components/tabs/Projects'
import Skills from './components/tabs/Skills'
import Contact from './components/tabs/Contact'

const Root = () => (
  <HashRouter>
    <div>
      <Header />
      <TabContainer />
      <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/experiences' component={Experiences} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/skills' component={Skills} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </div>
  </HashRouter>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
registerServiceWorker();
