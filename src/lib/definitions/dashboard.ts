export interface DashboardStat {
  id: number;
  label: string;
  value: number;
  change: number;
}

export interface DashboardStatResponse {
  data: DashboardStat[];
}

export interface RecentOrder {
  id: number;
  customer: string;
  total: number;
  status: "Cancelled" | "Paid" | "Shipped" | "Pending";
  date: string;
}

export interface RecentOrderResponse {
  data: RecentOrder[];
}

export interface TotalProfit {
  month: string;
  revenue: number;
  expenses: number;
}

export interface TotalProfitResponse {
  label: string;
  value: number;
  growthPercentage: number;
  data: TotalProfit[];
}

export interface TotalRevenue {
  month: string;
  revenue: number;
  expenses: number;
}

export interface TotalRevenueResponse {
  label: string;
  revenue: number;
  growthPercentage: number;
  data: TotalRevenue[];
}

export interface TotalSessions {
  month: string;
  revenue: number;
  expenses: number;
}

export interface TotalSessionsResponse {
  label: string;
  value: number;
  growthPercentage: number;
  data: TotalSessions[];
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface CountryData {
  id: number;
  name: string;
  percentage: number;
  users: number;
  coordinates: Coordinates;
}

export interface UsersByCountryResponse {
  category: string;
  totalUsers: number;
  growthPercentage: number;
  data: CountryData[];
}

export interface DeviceData {
  month: string;
  desktop: number;
  phoneApp: number;
  laptop: number;
}

export interface UsersByDeviceResponse {
  label: string;
  totalUsers: number;
  data: DeviceData[];
}
