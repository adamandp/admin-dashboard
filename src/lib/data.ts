import axiosInstance from "@/utils/axios";
import {
  DashboardStatResponse,
  RecentOrder,
  RecentOrderResponse,
  TotalProfitResponse,
  TotalRevenueResponse,
  TotalSessionsResponse,
  UsersByCountryResponse,
  UsersByDeviceResponse,
} from "./definitions/dashboard";
import {
  AnalyticsStatResponse,
  OrderStatusResponse,
  RevenueByCustomerResponse,
  SalesTrendResponse,
  TeamProgressResponse,
  WebsiteVisitorsResponse,
} from "./definitions/analytics";
import { ProductResponse } from "./definitions/products";
import { AllUserResponse, UserStatResponse } from "./definitions/users";

// Dashboard

export const fetchDashboardStat = async (): Promise<DashboardStatResponse> => {
  return (
    await axiosInstance.get<DashboardStatResponse>("dashboard/dashboard-stats")
  ).data;
};

export const fetchTotalProfit = async (): Promise<TotalProfitResponse> => {
  return (
    await axiosInstance.get<TotalProfitResponse>("dashboard/total-profit")
  ).data;
};

export const fetchTotalRevenue = async (): Promise<TotalRevenueResponse> => {
  return (
    await axiosInstance.get<TotalRevenueResponse>("dashboard/total-revenue")
  ).data;
};

export const fetchTotalSessions = async (): Promise<TotalSessionsResponse> => {
  return (
    await axiosInstance.get<TotalSessionsResponse>("dashboard/total-sessions")
  ).data;
};

export const fetchUsersByCountry =
  async (): Promise<UsersByCountryResponse> => {
    return (
      await axiosInstance.get<UsersByCountryResponse>(
        "dashboard/users-by-country"
      )
    ).data;
  };

export const fetchRecentOrder = async (): Promise<RecentOrder[]> => {
  return (
    await axiosInstance.get<RecentOrderResponse>("dashboard/recent-order")
  ).data.data;
};

export const fetchUsersByDevice = async (): Promise<UsersByDeviceResponse> => {
  return (
    await axiosInstance.get<UsersByDeviceResponse>("dashboard/users-by-device")
  ).data;
};

//  Analytics

export const fetchAnalyticsStat = async (): Promise<AnalyticsStatResponse> => {
  return (
    await axiosInstance.get<AnalyticsStatResponse>("analytics/analytics-stat")
  ).data;
};

export const fetchOrderStatus = async (): Promise<OrderStatusResponse> => {
  return (
    await axiosInstance.get<OrderStatusResponse>("analytics/order-status")
  ).data;
};

export const fetchRevenueByCustomer =
  async (): Promise<RevenueByCustomerResponse> => {
    return (
      await axiosInstance.get<RevenueByCustomerResponse>(
        "analytics/revenue-by-customer"
      )
    ).data;
  };

export const fetchSalesTrend = async (): Promise<SalesTrendResponse> => {
  return (await axiosInstance.get<SalesTrendResponse>("analytics/sales-trend"))
    .data;
};

export const fetchTeamProgress = async (): Promise<TeamProgressResponse> => {
  return (
    await axiosInstance.get<TeamProgressResponse>("analytics/team-progress")
  ).data;
};

export const fetchWebsiteVisitors =
  async (): Promise<WebsiteVisitorsResponse> => {
    return (
      await axiosInstance.get<WebsiteVisitorsResponse>(
        "analytics/website-visitors"
      )
    ).data;
  };

//  Products

export const fetchProducts = async (): Promise<ProductResponse> => {
  return (await axiosInstance.get<ProductResponse>("products")).data;
};

//  Users

export const fetchAllUsers = async (): Promise<AllUserResponse> => {
  return (await axiosInstance.get<AllUserResponse>("all-users")).data;
};

export const fetchUsersStat = async (): Promise<UserStatResponse> => {
  return (await axiosInstance.get<UserStatResponse>("dashboard/dashboard-stat"))
    .data;
};
