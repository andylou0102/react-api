import { useState} from 'react'
import {Route, Switch} from 'react-router-dom'

import Scenics from './container/Scenics/Scenics'
import CityScenics from './container/CityScenics/CityScenics'
import Navbar from './components/Nav/Navbar'

function App() {
  const [city, setCity] = useState('')

  const citySelect = (e) => {
    setCity(e.target.value )
  }


  return (
    <>
      <Navbar 
        chooseCity={citySelect}
        myCity={city}/>
      <Switch>
        <Route path={'/ScenicSpot/:city'} exact component={CityScenics}/>
        <Route path='/ScenicSpot' component={Scenics}/>
        {/* <Route render={() => <h1>404 Not found</h1>} /> */}
      </Switch>
    </>
  );
}

export default App;
