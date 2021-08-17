export interface Product {
    ProductID: number;
    ProductName?: string;
    SupplierID?: number;
    CategoryID?: number;
    QuantityPerUnit?: string;
    UnitPrice?: number;
    UnitsInStock?: number;
    UnitsOnOrder?: number;
    ReorderLevel?: number;
    Discontinued?: boolean;
    Category?: ProductCategory;
    expanded?: boolean;
    inEdit?: boolean | string;
    locked?: boolean;
}

export interface ProductCategory {
    CategoryID?: number;
    CategoryName?: string;
    Description?: string;
    details?: any;
}

export interface ContextState {
    languageId?: string;
    localeId?: string;
    firstName?: string;
    lastName?: string;
    middleName?: string;
    email?: string;
    phoneNumber?: string;
    avatar?: any;
    country?: string;
    isInPublicDirectory?: boolean;
    biography?: string;
    teamId?: number;
    onLanguageChange?: any;
    onProfileChange?: any;
}
