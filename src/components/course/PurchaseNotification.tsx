
import React, { useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

const PurchaseNotification = () => {
  // List of popular Indian cities
  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", 
    "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat",
    "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane",
    "Bhopal", "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad"
  ];
  
  // List of common Indian names
  const names = [
    "Rahul", "Amit", "Neha", "Priya", "Raj", 
    "Ananya", "Vikram", "Pooja", "Sanjay", "Meera",
    "Arjun", "Aisha", "Rohan", "Kavita", "Deepak",
    "Ritu", "Suresh", "Anjali", "Vivek", "Sunita"
  ];

  useEffect(() => {
    // Function to show a random purchase notification
    const showNotification = () => {
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const randomName = names[Math.floor(Math.random() * names.length)];
      
      toast({
        title: "New Course Purchase!",
        description: `${randomName} from ${randomCity} just enrolled in the YouTube Growth Accelerator course.`,
        duration: 5000,
        className: "bg-gradient-to-r from-green-500/80 to-green-600/80 text-white border-green-500",
        icon: <Check className="h-5 w-5 text-white" />
      });
    };

    // Show first notification after 2 seconds
    const firstTimeout = setTimeout(showNotification, 2000);
    
    // Set interval to show notifications every 10 seconds
    const notificationInterval = setInterval(showNotification, 10000);
    
    // Clean up interval on component unmount
    return () => {
      clearTimeout(firstTimeout);
      clearInterval(notificationInterval);
    };
  }, []);

  // This component doesn't render anything visible itself
  return null;
};

export default PurchaseNotification;
