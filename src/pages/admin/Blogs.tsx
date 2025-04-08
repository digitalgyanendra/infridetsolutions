import React, { useState, useEffect } from "react";
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
  Search,
  Save 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";

// Define proper type for blogs
interface Blog {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  status: "Published" | "Draft";
  category: string;
  views: number;
}

// Sample blog data - in a real app, this would come from an API
const initialBlogs: Blog[] = [
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

interface BlogFormData {
  id?: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  status: "Published" | "Draft";
  category: string;
  views?: number;
}

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<BlogFormData>({
    title: "",
    excerpt: "",
    author: "",
    date: new Date().toISOString().split('T')[0],
    status: "Draft",
    category: ""
  });
  const { toast } = useToast();

  // Fetch blogs from Supabase (in a real app)
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // In a real implementation, this would fetch from Supabase
        // const { data, error } = await supabase.from('blogs').select('*');
        // if (error) throw error;
        // if (data) setBlogs(data);
        
        // For now, we'll use the initial data
        console.log("Blogs would be fetched from Supabase here");
      } catch (error) {
        console.error("Error fetching blogs:", error);
        toast({
          title: "Error",
          description: "Failed to load blogs. Please try again.",
          variant: "destructive"
        });
      }
    };
    
    fetchBlogs();
  }, [toast]);

  const handleDeleteBlog = (id: number) => {
    setBlogToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (blogToDelete) {
      try {
        // In a real implementation, this would delete from Supabase
        // const { error } = await supabase.from('blogs').delete().eq('id', blogToDelete);
        // if (error) throw error;
        
        // For now, we'll just update the state
        setBlogs(blogs.filter(blog => blog.id !== blogToDelete));
        toast({
          title: "Blog deleted",
          description: "The blog post has been deleted successfully."
        });
      } catch (error) {
        console.error("Error deleting blog:", error);
        toast({
          title: "Error",
          description: "Failed to delete blog. Please try again.",
          variant: "destructive"
        });
      } finally {
        setIsDeleteDialogOpen(false);
        setBlogToDelete(null);
      }
    }
  };

  const handleEditBlog = (blog: Blog) => {
    setCurrentBlog(blog);
    setIsEditDialogOpen(true);
  };

  const handleCreateNewBlog = () => {
    setCurrentBlog({
      title: "",
      excerpt: "",
      author: "Rahul Sharma", // Default author
      date: new Date().toISOString().split('T')[0],
      status: "Draft",
      category: ""
    });
    setIsCreateDialogOpen(true);
  };

  const handleSaveBlog = async () => {
    try {
      if (currentBlog.id) {
        // Update existing blog
        // In a real implementation, this would update in Supabase
        // const { error } = await supabase.from('blogs').update({
        //   title: currentBlog.title,
        //   excerpt: currentBlog.excerpt,
        //   author: currentBlog.author,
        //   date: currentBlog.date,
        //   status: currentBlog.status,
        //   category: currentBlog.category
        // }).eq('id', currentBlog.id);
        // if (error) throw error;
        
        // For now, we'll just update the state
        setBlogs(prevBlogs => 
          prevBlogs.map(blog => 
            blog.id === currentBlog.id ? {
              ...blog,
              title: currentBlog.title,
              excerpt: currentBlog.excerpt,
              author: currentBlog.author,
              date: currentBlog.date,
              status: currentBlog.status,
              category: currentBlog.category
            } : blog
          )
        );
        
        toast({
          title: "Blog updated",
          description: "The blog post has been updated successfully."
        });
        setIsEditDialogOpen(false);
      } else {
        // Create new blog
        // In a real implementation, this would insert into Supabase
        // const { data, error } = await supabase.from('blogs').insert({
        //   title: currentBlog.title,
        //   excerpt: currentBlog.excerpt,
        //   author: currentBlog.author,
        //   date: currentBlog.date,
        //   status: currentBlog.status,
        //   category: currentBlog.category,
        //   views: 0
        // }).select();
        // if (error) throw error;
        
        // For now, we'll just update the state
        const newBlog: Blog = {
          ...currentBlog,
          id: Math.max(...blogs.map(b => b.id)) + 1,
          views: 0,
          status: currentBlog.status
        };
        
        setBlogs(prevBlogs => [...prevBlogs, newBlog]);
        
        toast({
          title: "Blog created",
          description: "The new blog post has been created successfully."
        });
        setIsCreateDialogOpen(false);
      }
    } catch (error) {
      console.error("Error saving blog:", error);
      toast({
        title: "Error",
        description: "Failed to save blog. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCurrentBlog(prev => ({
      ...prev,
      [name]: value
    }));
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
          <Button 
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
            onClick={handleCreateNewBlog}
          >
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
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleEditBlog(blog)}
                      >
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
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete the blog post from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit blog dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit Blog Post</DialogTitle>
            <DialogDescription>
              Make changes to your blog post here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input 
                id="title" 
                name="title"
                defaultValue={currentBlog.title}
                onChange={handleInputChange}
                className="col-span-3" 
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="excerpt" className="text-right">
                Excerpt
              </Label>
              <Textarea 
                id="excerpt" 
                name="excerpt"
                defaultValue={currentBlog.excerpt}
                onChange={handleInputChange}
                className="col-span-3" 
                rows={3}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="author" className="text-right">
                Author
              </Label>
              <Input 
                id="author" 
                name="author"
                defaultValue={currentBlog.author}
                onChange={handleInputChange}
                className="col-span-3" 
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Date
              </Label>
              <Input 
                type="date"
                id="date" 
                name="date"
                defaultValue={currentBlog.date}
                onChange={handleInputChange}
                className="col-span-3" 
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Input 
                id="category" 
                name="category"
                defaultValue={currentBlog.category}
                onChange={handleInputChange}
                className="col-span-3" 
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                Status
              </Label>
              <select 
                id="status" 
                name="status"
                defaultValue={currentBlog.status}
                onChange={handleInputChange}
                className="col-span-3 bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
              >
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700" onClick={handleSaveBlog}>
              <Save size={16} className="mr-2" />
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Create new blog dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Create New Blog Post</DialogTitle>
            <DialogDescription>
              Fill in the details for your new blog post.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input 
                id="title" 
                name="title"
                value={currentBlog.title}
                onChange={handleInputChange}
                className="col-span-3" 
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="excerpt" className="text-right">
                Excerpt
              </Label>
              <Textarea 
                id="excerpt" 
                name="excerpt"
                value={currentBlog.excerpt}
                onChange={handleInputChange}
                className="col-span-3" 
                rows={3}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="author" className="text-right">
                Author
              </Label>
              <Input 
                id="author" 
                name="author"
                value={currentBlog.author}
                onChange={handleInputChange}
                className="col-span-3" 
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Date
              </Label>
              <Input 
                type="date"
                id="date" 
                name="date"
                value={currentBlog.date}
                onChange={handleInputChange}
                className="col-span-3" 
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Input 
                id="category" 
                name="category"
                value={currentBlog.category}
                onChange={handleInputChange}
                className="col-span-3" 
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                Status
              </Label>
              <select 
                id="status" 
                name="status"
                value={currentBlog.status}
                onChange={handleInputChange}
                className="col-span-3 bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
              >
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setIsCreateDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              onClick={handleSaveBlog}
            >
              <PlusCircle size={16} className="mr-2" />
              Create Post
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminBlogs;
