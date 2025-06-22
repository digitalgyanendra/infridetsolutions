
import { useQuery } from '@tanstack/react-query';
import { apiCall } from '@/config/api';

interface DashboardStats {
  total_posts: number;
  published_posts: number;
  draft_posts: number;
  total_users: number;
  total_views: number;
}

interface RecentPost {
  title: string;
  created_at: string;
  view_count: number;
}

interface DashboardData {
  stats: DashboardStats;
  recent_posts: RecentPost[];
}

export const useDashboardData = () => {
  return useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: async (): Promise<DashboardData> => {
      const response = await apiCall('/get-dashboard-stats.php');
      if (!response.success) {
        throw new Error(response.message || 'Failed to fetch dashboard data');
      }
      return {
        stats: response.stats,
        recent_posts: response.recent_posts
      };
    },
    refetchInterval: 30000, // Refetch every 30 seconds
  });
};
