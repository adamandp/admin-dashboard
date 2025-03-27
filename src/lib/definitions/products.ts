export interface Product {
    name: string;
    category: string;
    price: number;
    company: string;
    status: string;
  }
  
  export interface ProductResponse {
    data: Product[];
  }
  