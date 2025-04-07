
import React, { useState } from "react";
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
import { 
  PlusCircle, 
  Edit, 
  Trash2, 
  Eye, 
  BarChart, 
  Users, 
  BookOpen 
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Sample course data - in a real app, this would come from an API
const initialCourses = [
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

const AdminCourses = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState<number | null>(null);
  const { toast } = useToast();

  const handleDeleteCourse = (id: number) => {
    setCourseToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (courseToDelete) {
      setCourses(courses.filter(course => course.id !== courseToDelete));
      toast({
        title: "Course deleted",
        description: "The course has been deleted successfully."
      });
      setIsDeleteDialogOpen(false);
      setCourseToDelete(null);
    }
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
          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
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
                <Button variant="outline" size="sm">
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
    </AdminLayout>
  );
};

export default AdminCourses;
