import React from "react";
import DashboardStats from "./shared/DashboardStats";
import BuyerProfileChart from "./shared/BuyerProfileChart";
import TransactionChart from "./shared/TransactionChart";
import RecentOrder from "./shared/RecentOrder";
import PopularProducts from "./shared/PopularProducts";

const Dashboard = () => {
  return (
    <div className="flex gap-4 flex-col">
      <DashboardStats />
      <div className="flex flex-row gap-4">
        <TransactionChart />
        <BuyerProfileChart />
      </div>

      <div className="flex gap-4 flex-row">
        <RecentOrder />
        <PopularProducts />
      </div>
    </div>
  );
};

export default Dashboard;
