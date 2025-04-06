
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Settings, Grid, Bookmark, Heart, Lock } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState("videos");
  
  const profileVideos = [
    { id: 1, thumbnail: 'https://picsum.photos/200/350?random=10', views: '245K' },
    { id: 2, thumbnail: 'https://picsum.photos/200/350?random=11', views: '189K' },
    { id: 3, thumbnail: 'https://picsum.photos/200/350?random=12', views: '967K' },
    { id: 4, thumbnail: 'https://picsum.photos/200/350?random=13', views: '1.1M' },
    { id: 5, thumbnail: 'https://picsum.photos/200/350?random=14', views: '345K' },
    { id: 6, thumbnail: 'https://picsum.photos/200/350?random=15', views: '782K' },
  ];
  
  return (
    <div className="min-h-screen pb-20">
      <div className="p-4 sticky top-0 bg-background z-10 flex justify-between">
        <h1 className="text-lg font-bold">@username</h1>
        <button className="text-lg">
          <Settings className="h-6 w-6" />
        </button>
      </div>
      
      <div className="px-4 py-2">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
            <img 
              src="https://randomuser.me/api/portraits/women/44.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover" 
            />
          </div>
          <h2 className="text-xl font-bold">@username</h2>
          
          <div className="flex space-x-8 mt-4 mb-6">
            <div className="flex flex-col items-center">
              <span className="font-bold">125</span>
              <span className="text-sm text-muted-foreground">Following</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold">12.4K</span>
              <span className="text-sm text-muted-foreground">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold">342K</span>
              <span className="text-sm text-muted-foreground">Likes</span>
            </div>
          </div>
          
          <div className="w-full max-w-xs">
            <Button className="w-full mb-3">Edit profile</Button>
          </div>
          
          <p className="text-center text-sm mb-6">✨ Creating videos and having fun! ✨</p>
        </div>
      </div>
      
      <Tabs defaultValue="videos" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="w-full grid grid-cols-3 bg-background border-b rounded-none h-auto py-0">
          <TabsTrigger value="videos" className="py-2 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
            <Grid className="h-5 w-5" />
          </TabsTrigger>
          <TabsTrigger value="likes" className="py-2 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
            <Heart className="h-5 w-5" />
          </TabsTrigger>
          <TabsTrigger value="bookmarks" className="py-2 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
            <Bookmark className="h-5 w-5" />
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="videos" className="mt-0">
          <div className="grid grid-cols-3 gap-1">
            {profileVideos.map((video) => (
              <div key={video.id} className="aspect-[9/16] relative">
                <img 
                  src={video.thumbnail} 
                  alt="Video thumbnail" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1 left-1 text-white text-xs">
                  {video.views}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="likes" className="mt-0 p-6 flex flex-col items-center justify-center h-60">
          <Lock className="h-12 w-12 mb-4 text-muted-foreground" />
          <h3 className="text-lg font-medium">This user's liked videos are private</h3>
          <p className="text-muted-foreground text-sm text-center mt-1">
            Videos liked by this user are currently hidden
          </p>
        </TabsContent>
        
        <TabsContent value="bookmarks" className="mt-0 p-6 flex flex-col items-center justify-center h-60">
          <Bookmark className="h-12 w-12 mb-4 text-muted-foreground" />
          <h3 className="text-lg font-medium">Saved videos</h3>
          <p className="text-muted-foreground text-sm text-center mt-1">
            Videos you bookmark will appear here
          </p>
        </TabsContent>
      </Tabs>
      
      <Navbar />
    </div>
  );
};

export default Profile;
