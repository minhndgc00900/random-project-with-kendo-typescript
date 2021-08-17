import '@progress/kendo-theme-default/dist/all.css';
import { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import { countries } from './configs/countries';
import { AppContext } from './contexts';
import { ContextState } from './interfaces/interfaces';
import DrawerRouter from './layouts/DrawerRouter/drawer-router.component';
// tslint:disable-next-line:typedef
function App() {
  const [contextState] = useState<ContextState>({
    localeId: 'en-US',
    firstName: 'Peter',
    lastName: 'Douglas',
    middleName: '',
    email: 'peter.douglas@progress.com',
    phoneNumber: '(+1) 8373-837-93-02',
    avatar: null,
    country: countries[33].name,
    isInPublicDirectory: true,
    biography: '',
    teamId: 1,
  });

  const DemoComponent = lazy(() => import('./pages/demo/demo.component'));
  const Dashboard = lazy(() => import('./pages/dashboard/dashboard.component'));

  return (

    <div className="App">
      <Suspense fallback={<div>...loading</div>}>
        <AppContext.Provider value={{ ...contextState }}>
          <Router>
            <DrawerRouter>
              <Switch>
                <Route exact={true} path="/demo" component={DemoComponent} />
                <Route exact={true} path="/dashboard" component={Dashboard} />
              </Switch>
            </DrawerRouter>
          </Router>
        </AppContext.Provider>
      </Suspense>
    </div>
  );
}

export default App;
