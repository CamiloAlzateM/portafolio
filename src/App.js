import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';

function App() {
  return (
    <BrowserRouter> 
      <Switch>
        <Route component={Home} path="/" asename={process.env.PUBLIC_URL}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
