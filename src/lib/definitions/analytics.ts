export interface AnalyticsStat {
  id: number;
  label: string;
  value: number;
  change: number;
}

export interface AnalyticsStatResponse {
  data: AnalyticsStat[];
}

export interface Client {
  name: string;
  email: string;
}

export interface OrderStatus {
  id: number;
  client: Client;
  date: string;
  status: "Completed" | "Failed" | "Pending";
  city: string;
  total: number;
}

export interface OrderStatusResponse {
  data: OrderStatus[];
}

export interface MonthlyRevenue {
  month: string;
  currentClients: number;
  subscribers: number;
  newCustomers: number;
}

export interface RevenueByCustomerResponse {
  category: string;
  totalRevenue: number;
  growthPercentage: number;
  data: MonthlyRevenue[];
}

export interface Category {
  name: string;
  value: number;
}

export interface SalesTrendResponse {
  data: Category[];
}

export interface TeamMember {
  name: string;
  email: string;
  progress: number;
}

export interface TeamProgressResponse {
  data: TeamMember[];
}

export interface WebsiteVisitors {
  id: number;
  label: string;
  visitors: number;
}

export interface WebsiteVisitorsResponse {
  label: string;
  totalVisitors: number;
  data: WebsiteVisitors[];
}
