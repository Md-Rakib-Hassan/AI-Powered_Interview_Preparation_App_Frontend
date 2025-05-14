import React, { use, useContext } from 'react';
import { Menu, Bell, Search, Laptop } from 'lucide-react';
import { motion } from 'framer-motion';
import ProfileAvatar from '../ui/ProfileAvatar';
import { UserContext } from '../../context/userContext';
import { Link, useNavigate } from 'react-router-dom';
import ProfileAvatarMenu from '../ui/ProfileAvatarMenu';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();
  const onLogout = () => {
      localStorage.clear();
        clearUser();
        navigate("/");
    }
  console.log(user);
  return (
    <header className="sticky top-0 z-10 flex items-center h-16 px-4 bg-white border-b border-gray-200">
      

 
      <div className="flex items-center justify-between w-screen gap-4">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          
        >
          <Link to={'/'}>
          <div className="flex items-center">
            <Laptop className="h-8 w-8 text-blue-700" />
            <span className="ml-2 text-xl font-bold text-blue-900">InterviewAI</span>
          </div>
          </Link>
        </motion.button>

        <div className="flex items-center">
          <ProfileAvatarMenu onLogout={onLogout} ignore={true} imageUrl={user?.profileImageUrl} size='h-10 w-10'></ProfileAvatarMenu>
          <div className="ml-2 hidden sm:block">
            <div className="text-sm font-medium text-gray-700">{user?.email }</div>
            <div className="text-xs text-gray-500">{user?.name}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;