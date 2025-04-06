
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Inbox = () => {
  const notifications = [
    {
      id: 1,
      type: 'like',
      username: 'dancequeen',
      profilePic: 'https://randomuser.me/api/portraits/women/22.jpg',
      time: '2h',
      message: 'liked your video',
    },
    {
      id: 2,
      type: 'comment',
      username: 'tech_guy',
      profilePic: 'https://randomuser.me/api/portraits/men/32.jpg',
      time: '3h',
      message: 'commented: "This is so cool! 🔥"',
    },
    {
      id: 3,
      type: 'follow',
      username: 'travel_addict',
      profilePic: 'https://randomuser.me/api/portraits/women/65.jpg',
      time: '1d',
      message: 'started following you',
    },
    {
      id: 4,
      type: 'mention',
      username: 'fitness_freak',
      profilePic: 'https://randomuser.me/api/portraits/men/45.jpg',
      time: '2d',
      message: 'mentioned you in a comment',
    },
  ];

  const messages = [
    {
      id: 1,
      username: 'bestfriend',
      profilePic: 'https://randomuser.me/api/portraits/women/22.jpg',
      lastMessage: 'Did you see my new video?',
      time: '2h',
      unread: true,
    },
    {
      id: 2,
      username: 'coolguy',
      profilePic: 'https://randomuser.me/api/portraits/men/32.jpg',
      lastMessage: 'Hey, how are you doing?',
      time: '1d',
      unread: false,
    },
    {
      id: 3,
      username: 'sis_account',
      profilePic: 'https://randomuser.me/api/portraits/women/65.jpg',
      lastMessage: 'Call me when you get home',
      time: '3d',
      unread: false,
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      <div className="p-4 sticky top-0 bg-background z-10 border-b">
        <h1 className="text-xl font-bold">Inbox</h1>
      </div>
      
      <Tabs defaultValue="notifications" className="w-full">
        <TabsList className="w-full grid grid-cols-2 bg-background border-b rounded-none h-auto">
          <TabsTrigger value="notifications" className="py-3 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
            Notifications
          </TabsTrigger>
          <TabsTrigger value="messages" className="py-3 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
            Messages
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="notifications" className="mt-0">
          <div className="divide-y">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-center p-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img 
                    src={notification.profilePic} 
                    alt={notification.username}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-medium">@{notification.username}</span>{' '}
                      <span className="text-muted-foreground">{notification.message}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{notification.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="messages" className="mt-0">
          <div className="divide-y">
            {messages.map((message) => (
              <div key={message.id} className="flex items-center p-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3 relative">
                  <img 
                    src={message.profilePic} 
                    alt={message.username}
                    className="w-full h-full object-cover" 
                  />
                  {message.unread && (
                    <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-primary"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-medium">@{message.username}</div>
                      <p className={`text-sm ${message.unread ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                        {message.lastMessage}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground">{message.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <Navbar />
    </div>
  );
};

export default Inbox;
