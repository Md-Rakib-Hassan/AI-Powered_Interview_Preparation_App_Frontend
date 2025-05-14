import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Laptop, ArrowRight, UserCircle, UploadCloud } from 'lucide-react';
import toast, { ToastBar, Toaster } from 'react-hot-toast';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { UserContext } from '../../context/userContext';
import uploadImage from '../../utils/uploadImage';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const { user, updateUser} = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement signup logic
    if (!imageFile) {
      return toast.error("Please upload your photo.");
    }
    try {
      const imageUploadRes = await uploadImage(imageFile);
      const profileImageUrl = imageUploadRes.imageUrl || "";
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        name,
        email,
        password,
        profileImageUrl,
      })
      console.log(response);
      
      if (response?.data?.success) {
        toast.success(response?.data?.message);
        return navigate('/login');
      }
    } catch (error) {
      return toast.error("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Toaster/>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg"
      >
        <div>
          <Link to="/" className="flex items-center justify-center gap-2 text-blue-600">
            <Laptop className="h-8 w-8" />
            <span className="text-2xl font-bold">InterviewAI</span>
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in
            </Link>
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="flex justify-center">
  <label htmlFor="avatar-upload" className="cursor-pointer relative group">
    <input
      id="avatar-upload"
      type="file"
      accept="image/*"
      className="hidden"
      onChange={(e) => {
        if (e.target.files && e.target.files[0]) {
          setImageFile(e.target.files[0]);
        }
      }}
    />
    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 shadow-md relative">
      {imageFile ? (
        <img
          src={URL.createObjectURL(imageFile)}
          alt="Avatar"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
          <UserCircle className="w-full h-full" />
        </div>
      )}

      {/* Upload icon overlay */}
      <div className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow group-hover:scale-110 transition-transform">
        <UploadCloud className="w-5 h-5 text-blue-600" />
      </div>
    </div>
  </label>
</div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-medium"
            >
              Create account
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          <p className="text-xs text-center text-gray-600">
            By signing up, you agree to our{' '}
            <a href="#" className="text-blue-600 hover:text-blue-500">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;