import { process, State } from '@progress/kendo-data-query';
import {
    Grid,
    GridColumn as Column,
    GridDataStateChangeEvent,
    GridEvent,
    GridRowClickEvent,
} from '@progress/kendo-react-grid';
import categories from '../../data/categories.json';
import products from '../../data/products.json';
import '@progress/kendo-theme-default/dist/all.css';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Product } from '../../interfaces/interfaces';
import { useState } from 'react';
import { dataStateConfig } from '../../utils/index';
import { Window, WindowActionsEvent } from '@progress/kendo-react-dialogs';
import { initialProduct } from '../../configs/index';
import { ReactElement } from 'react';

function Demo(): ReactElement {
    const availableProducts = products.slice();

    const [gridData, setGridData] = useState<Product[]>(availableProducts.splice(0, 20));

    const [dropdownlistCategory, setDropdownlistCategory] = useState(null);

    const [dataState, setDataState] = useState<State>(dataStateConfig);

    const [windowVisible, setWindowVisible] = useState(false);

    const [gridClickedRow, setGridClickedRow] = useState<Product>(initialProduct);

    const scrollHandler = (event: GridEvent) => {
        const e = event.nativeEvent;
        if (
            e.target.scrollTop + 10 >=
            e.target.scrollHeight - e.target.clientHeight
        ) {
            const moreData = availableProducts.splice(0, 10);
            if (moreData.length > 0) {
                setGridData((oldData: any) => oldData.concat(moreData));
            }
        }
    };

    const handleDropDownChange = (e: DropDownListChangeEvent) => {
        const newDataState = { ...dataState };
        if (e.target.value.CategoryID !== null) {
            newDataState.filter = {
                logic: 'and',
                filters: [{ field: 'CategoryID', operator: 'eq', value: e.target.value.CategoryID }],
            };
            newDataState.skip = 0;
        } else {
            newDataState.filter = undefined;
            newDataState.skip = 0;
        }
        setDropdownlistCategory(e.target.value.CategoryID);
        setDataState(newDataState);
    };

    const onHandleDataState = (e: GridDataStateChangeEvent) => {
        // console.log('event GridDataStateChangeEvent', e);
        setDataState(e.dataState);
    };

    const handleGridRowClick = (e: GridRowClickEvent) => {
        setWindowVisible(true);
        console.log('e.dataItem', e.dataItem);

        setGridClickedRow(e.dataItem);
    };

    const closeWindow = (e: WindowActionsEvent) => {
        setWindowVisible(false);
    };

    return (
        <>
            <h1>Hello KendoReact!</h1>
            <p>
                <DropDownList
                    data={categories}
                    dataItemKey="CategoryID"
                    textField="CategoryName"
                    defaultItem={{ CategoryID: null, CategoryName: 'Product categories' }}
                    onChange={handleDropDownChange}
                />
                &nbsp; Selected category ID: <strong>{dropdownlistCategory}</strong>
            </p>
            <Grid
                pageable={true}
                sortable={true}
                filterable={true}
                data={process(gridData, dataState)}
                style={{
                    height: '400px',
                }}
                onScroll={scrollHandler}
                {...dataState}
                onRowClick={handleGridRowClick}
                onDataStateChange={(e: GridDataStateChangeEvent) => onHandleDataState(e)}
            >
                <Column field="ProductID" title="ID" width="100px" />
                <Column field="ProductName" title="Name" width="300px" />
                <Column field="Discontinued" width="250px" />
                <Column field="UnitPrice" width="250px" />
                <Column field="QuantityPerUnit" width="250px" />
                <Column field="Category.CategoryName" title="Category Name" width="250px" />
            </Grid>
            {windowVisible &&
                <Window
                    title="Product Details"
                    onClose={closeWindow}
                    height={250}>
                    <dl style={{ textAlign: 'left' }}>
                        <dt>Product Name</dt>
                        <dd>{gridClickedRow.ProductName}</dd>
                        <dt>Product ID</dt>
                        <dd>{gridClickedRow.ProductID}</dd>
                        <dt>Quantity per Unit</dt>
                        <dd>{gridClickedRow.QuantityPerUnit}</dd>
                    </dl>
                </Window>
            }
            <br />
            showing: {gridData.length} items
        </>
    );
}

export default Demo;
