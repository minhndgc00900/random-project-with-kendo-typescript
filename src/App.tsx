import '@progress/kendo-theme-default/dist/all.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import DrawerRouter from './layouts/DrawerRouter/drawer-router.component';
// tslint:disable-next-line:typedef
function App() {
  const DemoComponent = lazy(() => import('./pages/demo/demo.component'));
  const Dashboard = lazy(() => import('./pages/dashboard/dashboard.component'));

  return (

    <div className="App">
      <Suspense fallback={<div>...loading</div>}>
        <Router>
          <DrawerRouter>
            <Switch>
              <Route exact={true} path="/demo" component={DemoComponent} />
              <Route exact={true} path="/dashboard" component={Dashboard} />
            </Switch>
          </DrawerRouter>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
