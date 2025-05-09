
import React, { useState } from "react";
import AdminLayout from "@/components/ui/layout/AdminLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Save, Settings, Code, Globe, Search } from "lucide-react";

const AdminSettings = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("general");
  
  // General settings
  const [siteTitle, setSiteTitle] = useState("Infridet Solutions Private Limited");
  const [siteDescription, setSiteDescription] = useState("Digital consultancy that helps creators and businesses grow through YouTube strategy, SEO, and product growth solutions.");
  const [contactEmail, setContactEmail] = useState("Marketing@infridetsolutions.com");
  const [blogPostsPerPage, setBlogPostsPerPage] = useState(6);
  
  // SEO settings
  const [enableSitemap, setEnableSitemap] = useState(true);
  const [enableRobotsTxt, setEnableRobotsTxt] = useState(true);
  const [enableSchemaMarkup, setEnableSchemaMarkup] = useState(true);
  const [globalKeywords, setGlobalKeywords] = useState("YouTube growth, digital marketing, SEO, content strategy, channel management");
  const [googleAnalyticsId, setGoogleAnalyticsId] = useState("");
  const [googleVerificationId, setGoogleVerificationId] = useState("");
  
  // API settings
  const [enableApi, setEnableApi] = useState(false);
  const [apiUrl, setApiUrl] = useState("");
  const [apiKey, setApiKey] = useState("");
  
  // Social media settings
  const [facebook, setFacebook] = useState("https://facebook.com/infridetsolutions");
  const [twitter, setTwitter] = useState("https://twitter.com/infridetsolutions");
  const [instagram, setInstagram] = useState("https://instagram.com/infridetsolutions");
  const [youtube, setYoutube] = useState("https://youtube.com/c/infridetsolutions");
  const [linkedin, setLinkedin] = useState("https://linkedin.com/company/infridetsolutions");
  
  // Custom code settings
  const [headerScripts, setHeaderScripts] = useState("");
  const [footerScripts, setFooterScripts] = useState("");
  const [customCss, setCustomCss] = useState("");
  
  const handleSaveSettings = (section: string) => {
    // In a real app, this would save to a database
    toast({
      title: "Settings saved",
      description: `Your ${section} settings have been saved successfully.`,
    });
  };
  
  const regenerateSitemap = () => {
    // In a real app, this would trigger a sitemap regeneration
    toast({
      title: "Sitemap regenerated",
      description: "Your sitemap.xml file has been updated with the latest content.",
    });
  };
  
  const generateApiKey = () => {
    // Generate a random API key
    const newApiKey = Math.random().toString(36).substring(2, 15) + 
                      Math.random().toString(36).substring(2, 15);
    setApiKey(newApiKey);
    
    toast({
      title: "API key generated",
      description: "Your new API key has been generated. Make sure to save your changes.",
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            <Settings className="mr-2 h-6 w-6" />
            Site Settings
          </h1>
          <p className="text-muted-foreground mt-2">
            Configure various settings to customize your website's behavior and appearance.
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-5 w-full">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
            <TabsTrigger value="code">Custom Code</TabsTrigger>
          </TabsList>
          
          {/* General Settings Tab */}
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>
                  Configure the basic settings for your website.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-3">
                  <Label htmlFor="site-title">Site Title</Label>
                  <Input
                    id="site-title"
                    value={siteTitle}
                    onChange={(e) => setSiteTitle(e.target.value)}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="site-description">Site Description</Label>
                  <Textarea
                    id="site-description"
                    value={siteDescription}
                    onChange={(e) => setSiteDescription(e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="contact-email">Contact Email</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="blog-posts-per-page">Blog Posts Per Page</Label>
                  <Input
                    id="blog-posts-per-page"
                    type="number"
                    min="1"
                    max="50"
                    value={blogPostsPerPage}
                    onChange={(e) => setBlogPostsPerPage(parseInt(e.target.value))}
                  />
                </div>
                
                <Button onClick={() => handleSaveSettings("general")}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* SEO Settings Tab */}
          <TabsContent value="seo">
            <Card>
              <CardHeader>
                <CardTitle>SEO Settings</CardTitle>
                <CardDescription>
                  Configure search engine optimization settings to improve your site's visibility.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enable-sitemap">Enable Sitemap</Label>
                      <p className="text-muted-foreground text-sm">
                        Generate a sitemap.xml file for better search engine indexing.
                      </p>
                    </div>
                    <Switch
                      id="enable-sitemap"
                      checked={enableSitemap}
                      onCheckedChange={setEnableSitemap}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enable-robots">Enable Robots.txt</Label>
                      <p className="text-muted-foreground text-sm">
                        Use a robots.txt file to control which pages search engines can crawl.
                      </p>
                    </div>
                    <Switch
                      id="enable-robots"
                      checked={enableRobotsTxt}
                      onCheckedChange={setEnableRobotsTxt}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enable-schema">Enable Schema Markup</Label>
                      <p className="text-muted-foreground text-sm">
                        Add structured data to your pages for rich search results.
                      </p>
                    </div>
                    <Switch
                      id="enable-schema"
                      checked={enableSchemaMarkup}
                      onCheckedChange={setEnableSchemaMarkup}
                    />
                  </div>
                  
                  <div className="grid gap-3">
                    <Label htmlFor="global-keywords">Global Keywords</Label>
                    <Textarea
                      id="global-keywords"
                      value={globalKeywords}
                      onChange={(e) => setGlobalKeywords(e.target.value)}
                      placeholder="Comma separated keywords"
                      rows={2}
                    />
                  </div>
                  
                  <div className="grid gap-3">
                    <Label htmlFor="google-analytics">Google Analytics ID</Label>
                    <Input
                      id="google-analytics"
                      value={googleAnalyticsId}
                      onChange={(e) => setGoogleAnalyticsId(e.target.value)}
                      placeholder="GA-XXXXXXXX-X"
                    />
                  </div>
                  
                  <div className="grid gap-3">
                    <Label htmlFor="google-verification">Google Site Verification</Label>
                    <Input
                      id="google-verification"
                      value={googleVerificationId}
                      onChange={(e) => setGoogleVerificationId(e.target.value)}
                      placeholder="Google verification code"
                    />
                  </div>
                  
                  <div className="flex gap-3">
                    <Button onClick={() => handleSaveSettings("SEO")}>
                      <Save className="mr-2 h-4 w-4" />
                      Save SEO Settings
                    </Button>
                    <Button variant="outline" onClick={regenerateSitemap}>
                      <Globe className="mr-2 h-4 w-4" />
                      Regenerate Sitemap
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* API Settings Tab */}
          <TabsContent value="api">
            <Card>
              <CardHeader>
                <CardTitle>API Settings</CardTitle>
                <CardDescription>
                  Configure API access for external applications.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="enable-api">Enable API Access</Label>
                    <p className="text-muted-foreground text-sm">
                      Allow external applications to access your data via API.
                    </p>
                  </div>
                  <Switch
                    id="enable-api"
                    checked={enableApi}
                    onCheckedChange={setEnableApi}
                  />
                </div>
                
                {enableApi && (
                  <>
                    <div className="grid gap-3">
                      <Label htmlFor="api-url">API Endpoint URL</Label>
                      <Input
                        id="api-url"
                        value={apiUrl}
                        onChange={(e) => setApiUrl(e.target.value)}
                        placeholder="https://api.yourdomain.com"
                      />
                    </div>
                    
                    <div className="grid gap-3">
                      <Label htmlFor="api-key">API Key</Label>
                      <div className="flex gap-2">
                        <Input
                          id="api-key"
                          value={apiKey}
                          onChange={(e) => setApiKey(e.target.value)}
                          placeholder="Your API key"
                          className="flex-1"
                          readOnly
                        />
                        <Button type="button" variant="outline" onClick={generateApiKey}>
                          Generate
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        This key will be required for all API requests.
                      </p>
                    </div>
                    
                    <div className="grid gap-3">
                      <Label>Available Endpoints</Label>
                      <div className="bg-muted p-4 rounded-md">
                        <ul className="space-y-2">
                          <li className="text-sm">
                            <span className="font-medium">/api/posts</span> - Get all blog posts
                          </li>
                          <li className="text-sm">
                            <span className="font-medium">/api/posts/{"{id}"}</span> - Get a specific blog post
                          </li>
                          <li className="text-sm">
                            <span className="font-medium">/api/categories</span> - Get all categories
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}
                
                <Button onClick={() => handleSaveSettings("API")}>
                  <Save className="mr-2 h-4 w-4" />
                  Save API Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Social Media Tab */}
          <TabsContent value="social">
            <Card>
              <CardHeader>
                <CardTitle>Social Media Settings</CardTitle>
                <CardDescription>
                  Configure your social media profiles and sharing options.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-3">
                  <Label htmlFor="facebook">Facebook Page URL</Label>
                  <Input
                    id="facebook"
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                    placeholder="https://facebook.com/yourpage"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="twitter">Twitter Profile URL</Label>
                  <Input
                    id="twitter"
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                    placeholder="https://twitter.com/youraccount"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="instagram">Instagram Profile URL</Label>
                  <Input
                    id="instagram"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    placeholder="https://instagram.com/youraccount"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="youtube">YouTube Channel URL</Label>
                  <Input
                    id="youtube"
                    value={youtube}
                    onChange={(e) => setYoutube(e.target.value)}
                    placeholder="https://youtube.com/c/yourchannel"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="linkedin">LinkedIn Page URL</Label>
                  <Input
                    id="linkedin"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    placeholder="https://linkedin.com/company/yourcompany"
                  />
                </div>
                
                <Button onClick={() => handleSaveSettings("social media")}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Social Media Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Custom Code Tab */}
          <TabsContent value="code">
            <Card>
              <CardHeader>
                <CardTitle>Custom Code</CardTitle>
                <CardDescription>
                  Add custom scripts and styles to your website.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-3">
                  <Label htmlFor="header-scripts">Header Scripts</Label>
                  <Textarea
                    id="header-scripts"
                    value={headerScripts}
                    onChange={(e) => setHeaderScripts(e.target.value)}
                    placeholder="<script>...</script>"
                    rows={5}
                    className="font-mono text-sm"
                  />
                  <p className="text-xs text-muted-foreground">
                    These scripts will be added to the head section of your website.
                  </p>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="footer-scripts">Footer Scripts</Label>
                  <Textarea
                    id="footer-scripts"
                    value={footerScripts}
                    onChange={(e) => setFooterScripts(e.target.value)}
                    placeholder="<script>...</script>"
                    rows={5}
                    className="font-mono text-sm"
                  />
                  <p className="text-xs text-muted-foreground">
                    These scripts will be added to the end of the body section.
                  </p>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="custom-css">Custom CSS</Label>
                  <Textarea
                    id="custom-css"
                    value={customCss}
                    onChange={(e) => setCustomCss(e.target.value)}
                    placeholder=".my-class { color: red; }"
                    rows={5}
                    className="font-mono text-sm"
                  />
                </div>
                
                <Button onClick={() => handleSaveSettings("custom code")}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Custom Code
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
