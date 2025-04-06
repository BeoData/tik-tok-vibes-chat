
import React, { useState, useRef } from 'react';
import { Heart, MessageCircle, Share2, Music } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoCardProps {
  videoUrl: string;
  username: string;
  caption: string;
  sound: string;
  likes: number;
  comments: number;
  shares: number;
  profilePic: string;
}

const VideoCard = ({
  videoUrl,
  username,
  caption,
  sound,
  likes,
  comments,
  shares,
  profilePic,
}: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden snap-start">
      <video
        ref={videoRef}
        src={videoUrl}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      
      {/* Overlay gradient for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />
      
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-black/30 rounded-full flex items-center justify-center">
            <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
          </div>
        </div>
      )}

      {/* Video info */}
      <div className="absolute bottom-20 left-4 right-4 z-10 animate-slide-up">
        <div className="mb-4">
          <h3 className="font-bold text-white">@{username}</h3>
          <p className="text-white text-sm mt-1">{caption}</p>
          <div className="flex items-center space-x-1 mt-2">
            <Music size={16} className="text-white" />
            <p className="text-white text-xs">{sound}</p>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="absolute right-3 bottom-32 flex flex-col items-center space-y-4 z-10">
        <div className="flex flex-col items-center">
          <button
            onClick={toggleLike}
            className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center"
          >
            <Heart 
              size={28} 
              className={cn(
                "transition-colors", 
                isLiked ? "text-primary fill-primary" : "text-white"
              )} 
            />
          </button>
          <span className="text-white text-xs mt-1">{isLiked ? likes + 1 : likes}</span>
        </div>

        <div className="flex flex-col items-center">
          <button className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center">
            <MessageCircle size={28} className="text-white" />
          </button>
          <span className="text-white text-xs mt-1">{comments}</span>
        </div>

        <div className="flex flex-col items-center">
          <button className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center">
            <Share2 size={28} className="text-white" />
          </button>
          <span className="text-white text-xs mt-1">{shares}</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
            <img src={profilePic} alt={username} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
