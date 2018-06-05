import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import Header from './components/Header'
import TabContainer from './components/tabs/TabContainer'

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
        <Route exact path="/portfolio" component={About} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  </BrowserRouter>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
registerServiceWorker();
