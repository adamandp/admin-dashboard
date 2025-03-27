import fs from "fs";

const statuses = ["Paid", "Pending", "Shipped", "Cancelled"] as const;

const orders = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  customer: `Customer ${i + 1}`,
  total: Math.floor(Math.random() * 1000000),
  status: statuses[Math.floor(Math.random() * statuses.length)],
  date: new Date(
    2025,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 28) + 1,
    Math.floor(Math.random() * 24),
    Math.floor(Math.random() * 60),
    Math.floor(Math.random() * 60)
  )
    .toISOString()
    .replace("T", " ")
    .slice(0, -5),
}));

JSON.stringify(orders, null, 2);
