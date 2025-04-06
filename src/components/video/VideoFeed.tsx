
import React from 'react';
import VideoCard from './VideoCard';

// In a real app, this would come from an API
const videos = [
  {
    id: '1',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4',
    username: 'cooluser',
    caption: '✨ Vibing in the city lights #neon #nightlife',
    sound: 'Original Sound - cooluser',
    likes: 1234,
    comments: 321,
    shares: 56,
    profilePic: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: '2',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
    username: 'naturevibes',
    caption: '🌸 Spring is here! #nature #spring #flowers',
    sound: 'Spring Melody - naturevibes',
    likes: 4567,
    comments: 123,
    shares: 89,
    profilePic: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: '3',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4',
    username: 'oceanlife',
    caption: '🌊 The ocean calls... #beach #waves #summer',
    sound: 'Ocean Waves - trending',
    likes: 8901,
    comments: 432,
    shares: 167,
    profilePic: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const VideoFeed = () => {
  return (
    <div className="snap-y snap-mandatory h-screen w-full overflow-y-scroll">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          videoUrl={video.videoUrl}
          username={video.username}
          caption={video.caption}
          sound={video.sound}
          likes={video.likes}
          comments={video.comments}
          shares={video.shares}
          profilePic={video.profilePic}
        />
      ))}
    </div>
  );
};

export default VideoFeed;
