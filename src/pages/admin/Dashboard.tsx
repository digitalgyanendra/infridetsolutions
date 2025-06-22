
import React from "react";
import { motion } from "framer-motion";
import AdminLayout from "@/components/ui/layout/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, FileText, Eye, TrendingUp, Calendar } from "lucide-react";
import { useDashboardData } from "@/hooks/useDashboardData";
import { formatDistanceToNow } from "date-fns";

const AdminDashboard = () => {
  const { data: dashboardData, isLoading, error } = useDashboardData();

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">Loading dashboard data...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i}>
                <CardHeader className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-8 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-red-500 mt-2">Error loading dashboard data: {error.message}</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  const stats = [
    { 
      title: "Total Blog Posts", 
      value: dashboardData?.stats.total_posts || 0, 
      icon: FileText, 
      color: "text-blue-500" 
    },
    { 
      title: "Published Posts", 
      value: dashboardData?.stats.published_posts || 0, 
      icon: BookOpen, 
      color: "text-green-500" 
    },
    { 
      title: "Draft Posts", 
      value: dashboardData?.stats.draft_posts || 0, 
      icon: FileText, 
      color: "text-orange-500" 
    },
    { 
      title: "Total Views", 
      value: dashboardData?.stats.total_views || 0, 
      icon: Eye, 
      color: "text-purple-500" 
    },
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
                    <span className="text-green-500">Live data</span>
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Blog Posts</CardTitle>
            </CardHeader>
            <CardContent>
              {dashboardData?.recent_posts && dashboardData.recent_posts.length > 0 ? (
                <div className="space-y-3">
                  {dashboardData.recent_posts.map((post, index) => (
                    <div key={index} className="flex items-center justify-between border-b pb-2">
                      <div>
                        <p className="font-medium text-sm">{post.title}</p>
                        <p className="text-xs text-muted-foreground flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{post.view_count} views</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No blog posts found</p>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Admin Users:</span>
                  <span className="font-medium">{dashboardData?.stats.total_users || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Published Posts:</span>
                  <span className="font-medium">{dashboardData?.stats.published_posts || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Draft Posts:</span>
                  <span className="font-medium">{dashboardData?.stats.draft_posts || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Total Views:</span>
                  <span className="font-medium">{dashboardData?.stats.total_views || 0}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
