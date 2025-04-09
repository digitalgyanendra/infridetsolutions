import React, { useState, useEffect } from "react";
import AdminLayout from "@/components/ui/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  PlusCircle, 
  Edit, 
  Trash2, 
  Eye, 
  BarChart, 
  Users, 
  BookOpen,
  Save
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

// Define proper type for courses
interface Course {
  id: number;
  title: string;
  description: string;
  price: string;
  students: number;
  lessons: number;
  imageUrl: string;
  status: "Published" | "Draft";
}

// Sample course data - in a real app, this would come from an API
const initialCourses: Course[] = [
  {
    id: 1,
    title: "AI Money Mastery",
    description: "Learn how to leverage AI for financial success",
    price: "₹2,999",
    students: 124,
    lessons: 18,
    imageUrl: "https://placehold.co/600x400/orange/white?text=AI+Money+Mastery",
    status: "Published"
  },
  {
    id: 2,
    title: "YouTube Growth Unleashed",
    description: "Master YouTube algorithms and grow your channel",
    price: "₹1,999",
    students: 87,
    lessons: 24,
    imageUrl: "https://placehold.co/600x400/red/white?text=YouTube+Growth",
    status: "Published"
  },
  {
    id: 3,
    title: "Digital Marketing Fundamentals",
    description: "Complete guide to digital marketing strategies",
    price: "₹3,499",
    students: 251,
    lessons: 32,
    imageUrl: "https://placehold.co/600x400/blue/white?text=Digital+Marketing",
    status: "Published"
  },
  {
    id: 4,
    title: "Social Media Mastery",
    description: "Dominate social media platforms with strategic content",
    price: "₹2,499",
    students: 168,
    lessons: 22,
    imageUrl: "https://placehold.co/600x400/purple/white?text=Social+Media",
    status: "Published"
  },
  {
    id: 5,
    title: "E-commerce Essentials",
    description: "Build and scale your online store",
    price: "₹4,999",
    students: 96,
    lessons: 28,
    imageUrl: "https://placehold.co/600x400/green/white?text=E-commerce",
    status: "Published"
  },
  {
    id: 6,
    title: "SEO Masterclass (Draft)",
    description: "Rank higher on search engines with proven SEO tactics",
    price: "₹3,299",
    students: 0,
    lessons: 15,
    imageUrl: "https://placehold.co/600x400/gray/white?text=SEO+Draft",
    status: "Draft"
  }
];

interface CourseFormData {
  id?: number;
  title: string;
  description: string;
  price: string;
  lessons: number;
  imageUrl: string;
  status: "Published" | "Draft";
  students?: number;
}

const AdminCourses = () => {
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState<number | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [currentCourse, setCurrentCourse] = useState<CourseFormData>({
    title: "",
    description: "",
    price: "",
    lessons: 0,
    imageUrl: "",
    status: "Draft"
  });
  const { toast } = useToast();

  // Fetch courses from Supabase (in a real app)
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // In a real implementation, this would fetch from Supabase
        // const { data, error } = await supabase.from('courses').select('*');
        // if (error) throw error;
        // if (data) setCourses(data);
        
        // For now, we'll use the initial data
        console.log("Courses would be fetched from Supabase here");
      } catch (error) {
        console.error("Error fetching courses:", error);
        toast({
          title: "Error",
          description: "Failed to load courses. Please try again.",
          variant: "destructive"
        });
      }
    };
    
    fetchCourses();
  }, [toast]);

  const handleDeleteCourse = (id: number) => {
    setCourseToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (courseToDelete) {
      try {
        // In a real implementation, this would delete from Supabase
        // const { error } = await supabase.from('courses').delete().eq('id', courseToDelete);
        // if (error) throw error;
        
        // For now, we'll just update the state
        setCourses(courses.filter(course => course.id !== courseToDelete));
        toast({
          title: "Course deleted",
          description: "The course has been deleted successfully."
        });
      } catch (error) {
        console.error("Error deleting course:", error);
        toast({
          title: "Error",
          description: "Failed to delete course. Please try again.",
          variant: "destructive"
        });
      } finally {
        setIsDeleteDialogOpen(false);
        setCourseToDelete(null);
      }
    }
  };

  const handleEditCourse = (course: Course) => {
    setCurrentCourse(course);
    setIsEditDialogOpen(true);
  };

  const handleCreateNewCourse = () => {
    setCurrentCourse({
      title: "",
      description: "",
      price: "",
      lessons: 0,
      imageUrl: "https://placehold.co/600x400/gray/white?text=New+Course",
      status: "Draft"
    });
    setIsCreateDialogOpen(true);
  };

  const handleSaveCourse = async () => {
    try {
      if (currentCourse.id) {
        // Update existing course
        // In a real implementation, this would update in Supabase
        // const { error } = await supabase.from('courses').update({
        //   title: currentCourse.title,
        //   description: currentCourse.description,
        //   price: currentCourse.price,
        //   lessons: currentCourse.lessons,
        //   imageUrl: currentCourse.imageUrl,
        //   status: currentCourse.status
        // }).eq('id', currentCourse.id);
        // if (error) throw error;
        
        // For now, we'll just update the state
        setCourses(prevCourses => 
          prevCourses.map(course => 
            course.id === currentCourse.id ? {
              ...course,
              title: currentCourse.title,
              description: currentCourse.description,
              price: currentCourse.price,
              lessons: currentCourse.lessons,
              imageUrl: currentCourse.imageUrl,
              status: currentCourse.status
            } : course
          )
        );
        
        toast({
          title: "Course updated",
          description: "The course has been updated successfully."
        });
        setIsEditDialogOpen(false);
      } else {
        // Create new course
        // Fix the type issue by ensuring all required properties are included
        const newCourse: Course = {
          id: Math.max(...courses.map(c => c.id)) + 1,
          title: currentCourse.title,
          description: currentCourse.description,
          price: currentCourse.price,
          lessons: currentCourse.lessons,
          imageUrl: currentCourse.imageUrl,
          status: currentCourse.status,
          students: 0 // Ensure students is always set
        };
        
        setCourses(prevCourses => [...prevCourses, newCourse]);
        
        toast({
          title: "Course created",
          description: "The new course has been created successfully."
        });
        setIsCreateDialogOpen(false);
      }
    } catch (error) {
      console.error("Error saving course:", error);
      toast({
        title: "Error",
        description: "Failed to save course. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCurrentCourse(prev => ({
      ...prev,
      [name]: name === "lessons" ? parseInt(value) : value
    }));
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Course Management</h1>
            <p className="text-muted-foreground mt-2">
              Create, edit, and manage your online courses
            </p>
          </div>
          <Button 
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
            onClick={handleCreateNewCourse}
          >
            <PlusCircle size={18} className="mr-2" />
            Create New Course
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className={course.status === "Draft" ? "border-muted" : ""}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.imageUrl} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
                {course.status === "Draft" && (
                  <div className="absolute top-2 right-2 bg-background/80 text-xs px-2 py-1 rounded-md">
                    Draft
                  </div>
                )}
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                <div className="text-lg font-bold mb-4">{course.price}</div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" />
                    {course.students} students
                  </div>
                  <div className="flex items-center">
                    <BookOpen size={16} className="mr-1" />
                    {course.lessons} lessons
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 flex-wrap">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleEditCourse(course)}
                >
                  <Edit size={14} className="mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  <Eye size={14} className="mr-1" />
                  Preview
                </Button>
                <Button variant="outline" size="sm">
                  <BarChart size={14} className="mr-1" />
                  Analytics
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-destructive border-destructive/20 hover:bg-destructive/10"
                  onClick={() => handleDeleteCourse(course.id)}
                >
                  <Trash2 size={14} className="mr-1" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Delete confirmation dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure you want to delete this course?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. All course content, student enrollments, and analytics data will be permanently removed.
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
              Delete Course
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit course dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Course</DialogTitle>
            <DialogDescription>
              Make changes to the course details below.
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
                value={currentCourse.title}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                value={currentCourse.description}
                onChange={handleInputChange}
                className="col-span-3"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                id="price"
                name="price"
                value={currentCourse.price}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="lessons" className="text-right">
                Lessons
              </Label>
              <Input
                id="lessons"
                name="lessons"
                type="number"
                value={currentCourse.lessons}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="imageUrl" className="text-right">
                Image URL
              </Label>
              <Input
                id="imageUrl"
                name="imageUrl"
                value={currentCourse.imageUrl}
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
                value={currentCourse.status}
                onChange={handleInputChange}
                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              onClick={handleSaveCourse}
            >
              <Save size={16} className="mr-2" />
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Create new course dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create New Course</DialogTitle>
            <DialogDescription>
              Fill in the details for your new course.
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
                value={currentCourse.title}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="Course Title"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                value={currentCourse.description}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="Course Description"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                id="price"
                name="price"
                value={currentCourse.price}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="₹9,999"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="lessons" className="text-right">
                Lessons
              </Label>
              <Input
                id="lessons"
                name="lessons"
                type="number"
                value={currentCourse.lessons}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="10"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="imageUrl" className="text-right">
                Image URL
              </Label>
              <Input
                id="imageUrl"
                name="imageUrl"
                value={currentCourse.imageUrl}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                Status
              </Label>
              <select
                id="status"
                name="status"
                value={currentCourse.status}
                onChange={handleInputChange}
                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              onClick={handleSaveCourse}
            >
              <Save size={16} className="mr-2" />
              Create Course
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminCourses;
