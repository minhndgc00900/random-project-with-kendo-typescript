// import { process } from '@progress/kendo-data-query';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './products.json';
import '@progress/kendo-theme-default/dist/all.css';
import './App.css';

// tslint:disable-next-line:typedef
function App() {
  return (
    <div className="App">
      <h1>Hello KendoReact!</h1>
      <Grid
        data={products}>
        <GridColumn field="ProductName" />
        <GridColumn field="UnitPrice" />
        <GridColumn field="UnitsInStock" />
        <GridColumn field="Discontinued" />
      </Grid>
    </div>
  );
}

export default App;
