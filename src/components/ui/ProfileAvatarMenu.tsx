import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProfileAvatar from "./ProfileAvatar";

interface ProfileAvatarMenuProps {
  imageUrl: string;
  onDashboard: () => void;
  onLogout: () => void;
  size?: string;
  name:string
}

const ProfileAvatarMenu = ({
  imageUrl,
  name,
  onDashboard,
  onLogout,
  size = "w-12 h-12",
}: ProfileAvatarMenuProps) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
 

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative md:inline-block text-left hidden" ref={menuRef}>
      <div 
        onClick={() => setOpen((prev) => !prev)}
      className="flex items-center gap-3"
      >
        <ProfileAvatar imageUrl={imageUrl} size="w-12 h-12"></ProfileAvatar>
        <span>{ name||""}</span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl z-50 overflow-hidden"
          >
            <button
              onClick={() => {
                setOpen(false);
                onDashboard();
              }}
              className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              Dashboard
            </button>
            <button
              onClick={() => {
                setOpen(false);
                onLogout();
              }}
              className="w-full text-left px-4 py-3 text-sm text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileAvatarMenu;
