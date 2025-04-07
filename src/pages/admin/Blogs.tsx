
import React, { useState } from "react";
import AdminLayout from "@/components/ui/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  PlusCircle, 
  Edit, 
  Trash2, 
  Eye, 
  FileText, 
  Calendar, 
  Search 
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";

// Sample blog data - in a real app, this would come from an API
const initialBlogs = [
  {
    id: 1,
    title: "10 Ways AI is Transforming Digital Marketing",
    excerpt: "Discover how artificial intelligence is revolutionizing marketing strategies and outcomes.",
    author: "Rahul Sharma",
    date: "2025-03-15",
    status: "Published",
    category: "AI",
    views: 1245
  },
  {
    id: 2,
    title: "Building Your Personal Brand on LinkedIn",
    excerpt: "Step-by-step guide to establishing yourself as an authority in your industry.",
    author: "Rahul Sharma",
    date: "2025-03-10",
    status: "Published",
    category: "Personal Branding",
    views: 876
  },
  {
    id: 3,
    title: "YouTube Algorithm: Latest Changes Explained",
    excerpt: "Understanding the recent YouTube algorithm updates and how to optimize your content.",
    author: "Priya Patel",
    date: "2025-03-05",
    status: "Published",
    category: "YouTube",
    views: 2190
  },
  {
    id: 4,
    title: "E-commerce Trends for 2025",
    excerpt: "Exploring the emerging trends that will shape e-commerce in the coming year.",
    author: "Rahul Sharma",
    date: "2025-02-28",
    status: "Published",
    category: "E-commerce",
    views: 945
  },
  {
    id: 5,
    title: "SEO Strategies That Actually Work in 2025",
    excerpt: "Proven SEO techniques that drive organic traffic and improve rankings.",
    author: "Vikram Singh",
    date: "2025-02-20",
    status: "Draft",
    category: "SEO",
    views: 0
  }
];

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const handleDeleteBlog = (id: number) => {
    setBlogToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (blogToDelete) {
      setBlogs(blogs.filter(blog => blog.id !== blogToDelete));
      toast({
        title: "Blog deleted",
        description: "The blog post has been deleted successfully."
      });
      setIsDeleteDialogOpen(false);
      setBlogToDelete(null);
    }
  };

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Blog Management</h1>
            <p className="text-muted-foreground mt-2">
              Create, edit, and publish blog content
            </p>
          </div>
          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
            <PlusCircle size={18} className="mr-2" />
            Create New Post
          </Button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="text"
            placeholder="Search blogs by title, category, or author..."
            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50%]">Post</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Views</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBlogs.map((blog) => (
                <TableRow key={blog.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{blog.title}</div>
                      <div className="text-sm text-muted-foreground truncate max-w-md">
                        {blog.excerpt}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        By {blog.author}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{blog.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1 text-muted-foreground" />
                      <span className="text-sm">{formatDate(blog.date)}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={blog.status === "Published" ? "bg-green-500" : "bg-muted"}>
                      {blog.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {blog.views > 0 ? blog.views.toLocaleString() : "-"}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        <Edit size={14} />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye size={14} />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-destructive hover:bg-destructive/10"
                        onClick={() => handleDeleteBlog(blog.id)}
                      >
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {filteredBlogs.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8">
                    <FileText className="mx-auto h-12 w-12 text-muted-foreground opacity-20 mb-2" />
                    <p className="text-muted-foreground">No blog posts found with your search criteria</p>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Delete confirmation dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure you want to delete this blog post?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This blog post will be permanently removed.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={confirmDelete}
            >
              Delete Blog Post
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminBlogs;
