
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, PlusSquare, MessageCircle, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const isActive = (path: string) => {
    return window.location.pathname === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t z-50 px-2 py-1">
      <nav className="flex justify-around items-center max-w-md mx-auto">
        <NavItem to="/" icon={<Home />} active={isActive('/')} label="Home" />
        <NavItem to="/discover" icon={<Search />} active={isActive('/discover')} label="Discover" />
        <NavItem to="/upload" icon={<PlusSquare />} active={isActive('/upload')} label="Upload" />
        <NavItem to="/inbox" icon={<MessageCircle />} active={isActive('/inbox')} label="Inbox" />
        <NavItem to="/profile" icon={<User />} active={isActive('/profile')} label="Profile" />
      </nav>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  active: boolean;
  label: string;
}

const NavItem = ({ to, icon, active, label }: NavItemProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex flex-col items-center p-2 rounded-md transition-colors",
        active ? "text-primary" : "text-muted-foreground hover:text-foreground"
      )}
    >
      <div className="text-xl">{icon}</div>
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};

export default Navbar;
