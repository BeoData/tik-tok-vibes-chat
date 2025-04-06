
import React from 'react';
import VideoFeed from '@/components/video/VideoFeed';
import Navbar from '@/components/layout/Navbar';

const Index = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-10 p-4 flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">For You</h1>
      </div>
      <VideoFeed />
      <Navbar />
    </div>
  );
};

export default Index;
