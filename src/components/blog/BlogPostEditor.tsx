
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Image, Save, Upload, Link as LinkIcon } from "lucide-react";

interface BlogPostEditorProps {
  initialData?: BlogPostData;
  onSave: (data: BlogPostData) => void;
  isLoading?: boolean;
}

export interface BlogPostData {
  id?: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: Date | string;
  category: string;
  tags: string[];
  status: "Published" | "Draft";
  featuredImage?: string | File;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string;
  };
}

const BlogPostEditor: React.FC<BlogPostEditorProps> = ({ 
  initialData, 
  onSave,
  isLoading = false
}) => {
  const defaultData: BlogPostData = {
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "",
    date: new Date(),
    category: "",
    tags: [],
    status: "Draft",
    seo: {
      metaTitle: "",
      metaDescription: "",
      keywords: ""
    }
  };

  const [postData, setPostData] = useState<BlogPostData>(initialData || defaultData);
  const [tagsInput, setTagsInput] = useState("");
  const [activeTab, setActiveTab] = useState("content");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setPostData({
        ...postData,
        [parent]: {
          ...postData[parent as keyof BlogPostData],
          [child]: value,
        },
      });
    } else {
      setPostData({ ...postData, [name]: value });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setPostData({ ...postData, [name]: value });
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setPostData({ ...postData, date });
    }
  };

  const handleTagsChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagsInput.trim() !== "") {
      e.preventDefault();
      const newTag = tagsInput.trim();
      if (!postData.tags.includes(newTag)) {
        setPostData({
          ...postData,
          tags: [...postData.tags, newTag],
        });
      }
      setTagsInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setPostData({
      ...postData,
      tags: postData.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    
    setPostData({ 
      ...postData, 
      title,
      slug,
      seo: {
        ...postData.seo,
        metaTitle: title
      }
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPostData({ ...postData, featuredImage: file });
      
      // Preview image
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          // You could set a preview URL here if needed
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const insertIntoContent = (insertText: string) => {
    const textArea = document.querySelector('textarea[name="content"]') as HTMLTextAreaElement;
    if (textArea) {
      const start = textArea.selectionStart;
      const end = textArea.selectionEnd;
      const text = textArea.value;
      const newText = text.substring(0, start) + insertText + text.substring(end);
      setPostData({ ...postData, content: newText });
      
      // Set cursor position after insertion
      setTimeout(() => {
        textArea.focus();
        textArea.selectionStart = start + insertText.length;
        textArea.selectionEnd = start + insertText.length;
      }, 0);
    }
  };

  const insertImage = () => {
    const imageUrl = prompt("Enter image URL:", "");
    if (imageUrl) {
      insertIntoContent(`![Image description](${imageUrl})`);
    }
  };

  const insertLink = () => {
    const linkUrl = prompt("Enter link URL:", "https://");
    if (linkUrl) {
      const linkText = prompt("Enter link text:", "Link text");
      insertIntoContent(`[${linkText}](${linkUrl})`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(postData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">
          {initialData ? "Edit Blog Post" : "Create New Blog Post"}
        </h2>
        <div className="flex space-x-3">
          <Select
            value={postData.status}
            onValueChange={(value) => handleSelectChange("status", value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Published">Published</SelectItem>
              <SelectItem value="Draft">Draft</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" disabled={isLoading}>
            <Save className="mr-2 h-4 w-4" />
            {isLoading ? "Saving..." : "Save Post"}
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="content" className="flex-1">Content</TabsTrigger>
          <TabsTrigger value="media" className="flex-1">Media</TabsTrigger>
          <TabsTrigger value="seo" className="flex-1">SEO</TabsTrigger>
          <TabsTrigger value="settings" className="flex-1">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="content" className="space-y-4 pt-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={postData.title}
              onChange={handleTitleChange}
              placeholder="Enter post title"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              name="excerpt"
              value={postData.excerpt}
              onChange={handleInputChange}
              placeholder="Brief summary of the post"
              className="mt-1"
              rows={3}
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <Label htmlFor="content">Content</Label>
              <div className="flex space-x-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm"
                  onClick={insertImage}
                >
                  <Image className="h-4 w-4 mr-1" /> Insert Image
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm"
                  onClick={insertLink}
                >
                  <LinkIcon className="h-4 w-4 mr-1" /> Insert Link
                </Button>
              </div>
            </div>
            <Textarea
              id="content"
              name="content"
              value={postData.content}
              onChange={handleInputChange}
              placeholder="Write your post content here (Markdown supported)"
              className="mt-1 font-mono"
              rows={15}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="media" className="space-y-4 pt-4">
          <div>
            <Label htmlFor="featuredImage">Featured Image</Label>
            <div className="mt-2">
              <input
                type="file"
                id="featuredImage"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
              
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6">
                {!postData.featuredImage ? (
                  <div className="text-center">
                    <Image className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="mt-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={triggerFileInput}
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Image
                      </Button>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      PNG, JPG, GIF up to 5MB
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    {typeof postData.featuredImage === 'string' ? (
                      <div>
                        <img
                          src={postData.featuredImage}
                          alt="Featured"
                          className="mx-auto h-48 object-cover rounded-md"
                        />
                        <p className="mt-2">Current Image</p>
                        <Button
                          type="button"
                          variant="outline"
                          className="mt-2"
                          onClick={triggerFileInput}
                        >
                          Change Image
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <p>Image selected: {postData.featuredImage.name}</p>
                        <Button
                          type="button"
                          variant="outline"
                          className="mt-2"
                          onClick={triggerFileInput}
                        >
                          Change Image
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="seo" className="space-y-4 pt-4">
          <div>
            <Label htmlFor="seo.metaTitle">Meta Title</Label>
            <Input
              id="seo.metaTitle"
              name="seo.metaTitle"
              value={postData.seo?.metaTitle || ""}
              onChange={handleInputChange}
              placeholder="SEO title (leave blank to use post title)"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="seo.metaDescription">Meta Description</Label>
            <Textarea
              id="seo.metaDescription"
              name="seo.metaDescription"
              value={postData.seo?.metaDescription || ""}
              onChange={handleInputChange}
              placeholder="SEO description (leave blank to use excerpt)"
              className="mt-1"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="seo.keywords">Keywords (comma separated)</Label>
            <Input
              id="seo.keywords"
              name="seo.keywords"
              value={postData.seo?.keywords || ""}
              onChange={handleInputChange}
              placeholder="keyword1, keyword2, keyword3"
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="slug">URL Slug</Label>
            <div className="flex mt-1">
              <span className="inline-flex items-center px-3 border border-r-0 border-input rounded-l-md bg-muted text-muted-foreground text-sm">
                /blog/
              </span>
              <Input
                id="slug"
                name="slug"
                value={postData.slug}
                onChange={handleInputChange}
                className="rounded-l-none"
              />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-4 pt-4">
          <div>
            <Label htmlFor="author">Author</Label>
            <Input
              id="author"
              name="author"
              value={postData.author}
              onChange={handleInputChange}
              placeholder="Post author"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="date">Publication Date</Label>
            <div className="mt-1">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {postData.date instanceof Date
                      ? format(postData.date, "PPP")
                      : format(new Date(postData.date), "PPP")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={
                      postData.date instanceof Date
                        ? postData.date
                        : new Date(postData.date)
                    }
                    onSelect={handleDateSelect}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Select
              value={postData.category}
              onValueChange={(value) => handleSelectChange("category", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="YouTube">YouTube</SelectItem>
                <SelectItem value="SEO">SEO</SelectItem>
                <SelectItem value="Content">Content</SelectItem>
                <SelectItem value="Branding">Branding</SelectItem>
                <SelectItem value="AI">AI</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="tags">Tags</Label>
            <div className="mt-1">
              <Input
                id="tags"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                onKeyDown={handleTagsChange}
                placeholder="Add tags and press Enter"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {postData.tags.map((tag) => (
                  <div
                    key={tag}
                    className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm flex items-center"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="ml-1 text-primary hover:text-primary/80"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </form>
  );
};

export default BlogPostEditor;
