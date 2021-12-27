import React, {useState}  from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import MemberContext from './contexts/context'
import Members from './pages/members'
import ProfilePage from './pages/profile'

function App() {
  const [memberData, setMemberData] = useState({})

  return (
    <Router>
      <MemberContext.Provider value={{ memberData, setMemberData }}>
        <Switch>
          <Route path="/" component={Members} exact />
          <Route exact path="/profile" component={ProfilePage} />
        </Switch>
      </MemberContext.Provider>
    </Router>
  )
}

export default App
