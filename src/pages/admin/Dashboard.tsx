
import React from "react";
import { motion } from "framer-motion";
import AdminLayout from "@/components/ui/layout/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, FileText, ShoppingCart, TrendingUp } from "lucide-react";

const AdminDashboard = () => {
  // Sample stats data - in a real app, this would come from an API
  const stats = [
    { title: "Total Users", value: "1,234", icon: Users, color: "text-blue-500" },
    { title: "Total Courses", value: "6", icon: BookOpen, color: "text-orange-500" },
    { title: "Total Blogs", value: "48", icon: FileText, color: "text-green-500" },
    { title: "Total Sales", value: "₹89,765", icon: ShoppingCart, color: "text-purple-500" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome to the INFRIDET SOLUTIONS admin panel. Manage your content, courses, and users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <TrendingUp className="inline h-3 w-3 text-green-500 mr-1" />
                    <span className="text-green-500">12%</span> from last month
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Course Enrollments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Course enrollment data will appear here</p>
              {/* In a real app, this would show a list or chart of recent enrollments */}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Popular Blog Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Blog analytics data will appear here</p>
              {/* In a real app, this would show a list of popular blog posts */}
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
