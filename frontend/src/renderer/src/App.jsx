import { Route, Switch } from 'wouter'
import WelcomeComponent from './components/WelcomeComponent.jsx'
import UploadNewMerch from './components/UploadNewMerch.jsx'
import TableOfMerch from './components/TableOfMerch.jsx'

function App() {
  return (
    <Switch>
      <Route path="/" component={WelcomeComponent} />
      <Route path="/upload" component={UploadNewMerch} />
      <Route path="/table" component={TableOfMerch} />
    </Switch>
  )
}

export default App
