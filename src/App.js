import './App.css';
import React, {Suspense} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {renderRouteAdmin, renderRoutesHome} from "./routes"; 
import PageNotPound from './containers/PageNotFound';
import DetailMoviePage from 'containers/HomeTemPlate/DetailMoviePage';
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
     <BrowserRouter>
     <Switch>
        {renderRoutesHome()}
       {renderRouteAdmin()}

       <Route path="/page-not-found" component={PageNotPound}/>
       <Route path="/detail" component={DetailMoviePage}/>

     </Switch>
     </BrowserRouter>
    </Suspense>
  );
}

export default App;
