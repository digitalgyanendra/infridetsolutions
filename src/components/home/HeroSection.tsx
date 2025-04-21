import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UserPlus, Search } from "lucide-react";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Node class for network visualization
    class Node {
      x: number;
      y: number;
      radius: number;
      color: string;
      velocity: { x: number; y: number };
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.color = Math.random() > 0.5 ? '#f97316' : '#0ea5e9';
        this.velocity = {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5
        };
      }
      
      update() {
        // Boundary check
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.velocity.x = -this.velocity.x;
        }
        
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.velocity.y = -this.velocity.y;
        }
        
        // Update position
        this.x += this.velocity.x;
        this.y += this.velocity.y;
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    // Create nodes
    const nodes: Node[] = [];
    const nodeCount = Math.min(Math.floor(window.innerWidth / 15), 100);
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node());
    }
    
    // Draw connections between nodes
    const drawConnections = () => {
      if (!ctx) return;
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Only draw connections if nodes are close enough
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            
            // Gradient line based on node colors
            const gradient = ctx.createLinearGradient(
              nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y
            );
            gradient.addColorStop(0, nodes[i].color);
            gradient.addColorStop(1, nodes[j].color);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.2;
            ctx.globalAlpha = 1 - (distance / 100); // Fade out with distance
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      nodes.forEach(node => {
        node.update();
        node.draw();
      });
      
      drawConnections();
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => window.removeEventListener('resize', setCanvasDimensions);
  }, []);
  
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Network background animation */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 bg-black"
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black z-10"></div>
      
      {/* Content */}
      <div className="container px-4 md:px-6 relative z-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Empowering Digital Creators and Businesses
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connect with expert consultants to accelerate your digital growth. 
            Specialized in YouTube growth, SEO, and brand development.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/register">
              <Button 
                size="lg" 
                className="text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-orange-500/25 transition-all px-8"
              >
                <UserPlus className="mr-2 h-5 w-5" />
                Become a Consultant
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-deepBlue-500 hover:bg-deepBlue-500/10 shadow-lg hover:shadow-deepBlue-500/25 transition-all px-8"
              >
                <Search className="mr-2 h-5 w-5" />
                Find a Consultant
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-3 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-background flex items-center justify-center">
                  <span className="text-xs font-medium">🧑‍💼</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Join <span className="text-primary font-medium">25 experts</span> already on our platform
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 w-full z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="currentColor" 
            className="text-background"
            d="M0,96L60,80C120,64,240,32,360,32C480,32,600,64,720,69.3C840,75,960,53,1080,42.7C1200,32,1320,32,1380,32L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
