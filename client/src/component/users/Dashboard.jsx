import React from 'react';
import { useSelector } from 'react-redux';
import useGetUserDetials from '../../hooks/useGetUserDetails';
import { Link, useHistory } from "react-router-dom";
import BlogForm from './BlogForm';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const history = useHistory();
  const user = useSelector((store) => store.user?.userInfo);
  const userType = user?.type;
  const data = useSelector((store) => store.user?.userInfo?.analysis);
  const recentPosts = data?.post || [];

  useGetUserDetials(user?.userId);

  
  const handleCreateBlog = () => {
    if (userType === 'author') {
      history.push("/blogform");
    } else {
      history.push("/blog/#become-author");
    }
  };

  return (
    <div className="w-full">
      <main>
        <div className="">
          <section>
            <div id="main" className="main-content flex-1 mt-12 md:mt-2 pb-24 md:pb-5">
              <div className="pt-3">
                <div className="rounded-tl-3xl p-4 shadow text-2xl text-black flex items-center justify-between px-10">
                  <h1 className="text-black font-bold pl-2 text-5xl">Welcome Back , <span className="text-orange-600">{user?.username}</span></h1>
                  <button
                    className="font-semibold text-lg bg-orange-600 px-8 py-2 text-white rounded-lg hover:bg-orange-500"
                    onClick={handleCreateBlog}
                  >
                    Create Blog
                  </button>
                </div>
              </div>
              {/* Rest of your dashboard content */}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
