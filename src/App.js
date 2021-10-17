import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Hojavida from './components/Hojavida';

function App() {
  return (
    <BrowserRouter> 
      <Switch>
        <Route component={Home} path="/" asename={process.env.PUBLIC_URL}/>
        <Route exact path="/documents/hojavida" component={Hojavida} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
