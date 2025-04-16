
import React from "react";
import { motion } from "framer-motion";
import AdminLayout from "@/components/ui/layout/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, Save, Database, Shield, Globe, Mail } from "lucide-react";

const AdminSettings = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-2">
            Manage your account and application settings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Settings Categories</CardTitle>
                <CardDescription>Configure different aspects of your application</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    General
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Shield className="mr-2 h-4 w-4" />
                    Security
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Database className="mr-2 h-4 w-4" />
                    Database
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Globe className="mr-2 h-4 w-4" />
                    API
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Mail className="mr-2 h-4 w-4" />
                    Notifications
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription>Manage your basic application settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input 
                        id="company-name" 
                        placeholder="Infridet Solutions Private Limited" 
                        defaultValue="Infridet Solutions Private Limited"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Contact Email</Label>
                      <Input 
                        id="contact-email" 
                        type="email" 
                        placeholder="contact@infridet.com" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="website-url">Website URL</Label>
                      <Input 
                        id="website-url" 
                        placeholder="https://infridet.com" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Office Address</Label>
                      <Input 
                        id="address" 
                        placeholder="Mahagun Mantra 1, Sector 10, Noida, UP" 
                        defaultValue="Mahagun Mantra 1, Sector 10, Noida, UP"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="footer-text">Footer Text</Label>
                      <Input 
                        id="footer-text" 
                        placeholder="© 2024 Infridet Solutions Private Limited. All rights reserved." 
                      />
                    </div>
                    
                    <Button className="w-full sm:w-auto">
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
