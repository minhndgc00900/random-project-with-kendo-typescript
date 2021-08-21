import { Product } from '../interfaces/interfaces';

export const initialProduct: Product = {
    ProductID: 0,
    ProductName: '',
    SupplierID: 0,
    CategoryID: 0,
    QuantityPerUnit: '',
    UnitPrice: 0,
    UnitsInStock: 0,
    UnitsOnOrder: 0,
    ReorderLevel: 0,
    Discontinued: false,
    expanded: false,
    inEdit: false,
    locked: false,
};

export const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
