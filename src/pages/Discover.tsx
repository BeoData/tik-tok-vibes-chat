
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { Search } from 'lucide-react';

const Discover = () => {
  const categories = [
    { id: 1, name: 'Comedy', icon: '😂' },
    { id: 2, name: 'Dance', icon: '💃' },
    { id: 3, name: 'Sports', icon: '⚽' },
    { id: 4, name: 'Food', icon: '🍔' },
    { id: 5, name: 'Animals', icon: '🐶' },
    { id: 6, name: 'Beauty', icon: '💄' },
    { id: 7, name: 'Fashion', icon: '👗' },
    { id: 8, name: 'Travel', icon: '✈️' },
  ];

  const trendingVideos = [
    { id: 1, thumbnail: 'https://picsum.photos/200/350?random=1', views: '1.2M' },
    { id: 2, thumbnail: 'https://picsum.photos/200/350?random=2', views: '894K' },
    { id: 3, thumbnail: 'https://picsum.photos/200/350?random=3', views: '2.5M' },
    { id: 4, thumbnail: 'https://picsum.photos/200/350?random=4', views: '632K' },
    { id: 5, thumbnail: 'https://picsum.photos/200/350?random=5', views: '1.8M' },
    { id: 6, thumbnail: 'https://picsum.photos/200/350?random=6', views: '754K' },
  ];

  return (
    <div className="min-h-screen pb-20">
      <div className="p-4 sticky top-0 bg-background z-10">
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Search videos, users, or hashtags"
            className="w-full pl-10 pr-4 py-2 rounded-full border bg-muted/30 text-foreground"
          />
        </div>
        
        <div className="flex overflow-x-auto space-x-3 pb-2 -mx-1 px-1">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex-shrink-0 px-4 py-2 bg-muted/50 rounded-full flex items-center space-x-2"
            >
              <span>{category.icon}</span>
              <span className="whitespace-nowrap text-sm">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Trending Now</h2>
        <div className="grid grid-cols-2 gap-3">
          {trendingVideos.map((video) => (
            <div key={video.id} className="relative rounded-md overflow-hidden aspect-[9/16]">
              <img 
                src={video.thumbnail} 
                alt="Video thumbnail" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                {video.views} views
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Navbar />
    </div>
  );
};

export default Discover;
