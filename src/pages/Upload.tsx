
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { Upload as UploadIcon, Clock, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Upload = () => {
  return (
    <div className="min-h-screen pb-20">
      <div className="p-4 sticky top-0 bg-background z-10 border-b">
        <div className="flex items-center justify-between">
          <button className="text-lg">
            <X />
          </button>
          <h1 className="text-lg font-bold">Upload</h1>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Next
          </Button>
        </div>
      </div>

      <div className="p-4 flex flex-col items-center justify-center h-[calc(100vh-8rem)]">
        <div className="w-full max-w-md bg-muted/30 border-2 border-dashed border-muted-foreground/50 rounded-lg p-12 flex flex-col items-center justify-center space-y-4">
          <div className="bg-primary/10 rounded-full p-4">
            <UploadIcon className="h-10 w-10 text-primary" />
          </div>
          <div className="text-center">
            <h3 className="font-medium text-lg">Select video to upload</h3>
            <p className="text-muted-foreground text-sm mt-1">Or drag and drop a file</p>
          </div>
          <div className="text-xs text-muted-foreground mt-2">
            <p>MP4 or WebM</p>
            <p>720x1280 resolution or higher</p>
            <p>Up to 60 seconds</p>
          </div>
          <Button className="mt-4 bg-primary hover:bg-primary/90">
            Select file
          </Button>
        </div>
      </div>

      <div className="fixed bottom-20 left-0 right-0 bg-background border-t p-4">
        <Button variant="outline" className="flex items-center space-x-2 w-full justify-center">
          <Clock className="h-4 w-4" />
          <span>Upload from your drafts</span>
        </Button>
      </div>
      
      <Navbar />
    </div>
  );
};

export default Upload;
