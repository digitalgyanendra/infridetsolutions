
import React, { useState } from "react";
import AdminLayout from "@/components/ui/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Save, Upload, Globe, BellRing, ShieldCheck, CreditCard, Mail, ServerIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const siteSettingsSchema = z.object({
  siteName: z.string().min(2, { message: "Site name must be at least 2 characters." }),
  siteDescription: z.string().min(10, { message: "Description must be at least 10 characters." }),
  contactEmail: z.string().email({ message: "Please enter a valid email address." }),
  logoUrl: z.string().url({ message: "Please enter a valid URL for the logo." }).optional(),
  footerText: z.string().optional(),
});

const notificationSettingsSchema = z.object({
  emailNotifications: z.boolean(),
  newUserAlerts: z.boolean(),
  orderAlerts: z.boolean(),
  marketingEmails: z.boolean(),
});

const AdminSettings = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("general");
  const [isLoading, setIsLoading] = useState(false);
  
  const siteForm = useForm<z.infer<typeof siteSettingsSchema>>({
    resolver: zodResolver(siteSettingsSchema),
    defaultValues: {
      siteName: "Infridet Solutions",
      siteDescription: "Premium digital marketing and AI solutions for businesses of all sizes.",
      contactEmail: "contact@infridet.com",
      logoUrl: "https://example.com/logo.png",
      footerText: "© 2025 Infridet Solutions. All rights reserved.",
    },
  });
  
  const notificationForm = useForm<z.infer<typeof notificationSettingsSchema>>({
    resolver: zodResolver(notificationSettingsSchema),
    defaultValues: {
      emailNotifications: true,
      newUserAlerts: true,
      orderAlerts: true,
      marketingEmails: false,
    },
  });
  
  const onSaveSiteSettings = async (data: z.infer<typeof siteSettingsSchema>) => {
    setIsLoading(true);
    try {
      // In a real implementation, this would update in Supabase
      // const { error } = await supabase.from('settings').upsert({
      //   type: 'site',
      //   data: data
      // });
      // if (error) throw error;
      
      console.log("Saving site settings:", data);
      
      setTimeout(() => {
        toast({
          title: "Settings saved",
          description: "Your site settings have been updated successfully.",
        });
        setIsLoading(false);
      }, 800);
    } catch (error) {
      console.error("Error saving settings:", error);
      toast({
        title: "Error",
        description: "Failed to save settings. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };
  
  const onSaveNotificationSettings = async (data: z.infer<typeof notificationSettingsSchema>) => {
    setIsLoading(true);
    try {
      // In a real implementation, this would update in Supabase
      // const { error } = await supabase.from('settings').upsert({
      //   type: 'notifications',
      //   data: data
      // });
      // if (error) throw error;
      
      console.log("Saving notification settings:", data);
      
      setTimeout(() => {
        toast({
          title: "Settings saved",
          description: "Your notification settings have been updated successfully.",
        });
        setIsLoading(false);
      }, 800);
    } catch (error) {
      console.error("Error saving settings:", error);
      toast({
        title: "Error",
        description: "Failed to save settings. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };
  
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-2">
            Manage your site settings and preferences
          </p>
        </div>
        
        <Tabs defaultValue="general" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="general" className="flex items-center">
              <Globe className="mr-2 h-4 w-4" />
              General
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center">
              <BellRing className="mr-2 h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center">
              <ShieldCheck className="mr-2 h-4 w-4" />
              Security
            </TabsTrigger>
            <TabsTrigger value="api" className="flex items-center">
              <ServerIcon className="mr-2 h-4 w-4" />
              API
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>Site Settings</CardTitle>
                <CardDescription>
                  Manage basic information about your website
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...siteForm}>
                  <form onSubmit={siteForm.handleSubmit(onSaveSiteSettings)} className="space-y-4">
                    <FormField
                      control={siteForm.control}
                      name="siteName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Site Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription>
                            This is your website's name as it appears to visitors.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={siteForm.control}
                      name="siteDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Site Description</FormLabel>
                          <FormControl>
                            <Textarea {...field} rows={3} />
                          </FormControl>
                          <FormDescription>
                            Briefly describe your website. This may be used in search results.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={siteForm.control}
                      name="contactEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Email</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription>
                            Primary email for customer inquiries.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={siteForm.control}
                      name="logoUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Logo URL</FormLabel>
                          <div className="flex items-center gap-3">
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <Button variant="outline" size="sm" type="button">
                              <Upload className="h-4 w-4 mr-2" /> Upload
                            </Button>
                          </div>
                          <FormDescription>
                            URL to your site logo. Recommended size: 200x60px.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={siteForm.control}
                      name="footerText"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Footer Text</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription>
                            Text displayed in the website footer.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700" disabled={isLoading}>
                      {isLoading ? (
                        <span className="flex items-center">
                          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></span>
                          Saving...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Save className="mr-2 h-4 w-4" />
                          Save Settings
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Configure how and when you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...notificationForm}>
                  <form onSubmit={notificationForm.handleSubmit(onSaveNotificationSettings)} className="space-y-4">
                    <FormField
                      control={notificationForm.control}
                      name="emailNotifications"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between space-x-2 rounded-md border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">Email Notifications</FormLabel>
                            <FormDescription>
                              Receive email notifications for important system events
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={notificationForm.control}
                      name="newUserAlerts"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between space-x-2 rounded-md border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">New User Alerts</FormLabel>
                            <FormDescription>
                              Get notifications when new users register
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={notificationForm.control}
                      name="orderAlerts"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between space-x-2 rounded-md border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">Order Alerts</FormLabel>
                            <FormDescription>
                              Get notifications for new course enrollments
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={notificationForm.control}
                      name="marketingEmails"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between space-x-2 rounded-md border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">Marketing Emails</FormLabel>
                            <FormDescription>
                              Receive marketing update emails
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700" disabled={isLoading}>
                      {isLoading ? (
                        <span className="flex items-center">
                          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></span>
                          Saving...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Save className="mr-2 h-4 w-4" />
                          Save Settings
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Manage your account security preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account by enabling two-factor authentication.
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Button variant="outline">Enable 2FA</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-4 border-t">
                    <h3 className="text-lg font-medium">Password Management</h3>
                    <p className="text-sm text-muted-foreground">
                      Update your password or generate a new secure password.
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Button variant="outline">Change Password</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-4 border-t">
                    <h3 className="text-lg font-medium">Login Sessions</h3>
                    <p className="text-sm text-muted-foreground">
                      Manage active login sessions across different devices.
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Button variant="outline">View Active Sessions</Button>
                      <Button variant="destructive">Revoke All Sessions</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="api">
            <Card>
              <CardHeader>
                <CardTitle>API Settings</CardTitle>
                <CardDescription>
                  Manage API keys and integration settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">API Keys</h3>
                    <p className="text-sm text-muted-foreground">
                      Generate and manage API keys for external integrations.
                    </p>
                    <div className="border rounded-md p-4 mt-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Live API Key</p>
                          <p className="text-sm text-muted-foreground">For production environment</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <code className="px-2 py-1 bg-muted rounded text-sm">
                            ••••••••••••••••••••••
                          </code>
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Regenerate</Button>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-md p-4 mt-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Test API Key</p>
                          <p className="text-sm text-muted-foreground">For testing environment</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <code className="px-2 py-1 bg-muted rounded text-sm">
                            ••••••••••••••••••••••
                          </code>
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Regenerate</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-4 border-t">
                    <h3 className="text-lg font-medium">Webhook Endpoints</h3>
                    <p className="text-sm text-muted-foreground">
                      Configure webhook endpoints to receive event notifications.
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Button variant="outline">Add Webhook</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
