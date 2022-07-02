import React from 'react';

function Sidebar() {
  return (
    <div className="flex-col flex-[0.2] rounded-2xl  mt-10 ml-2">
      <div className="relative block bg-white overflow-hidden border rounded-2xl hover:shadow-2xl transition-all duration-700 ease-in-out shadow-lg">
        <span className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="flex-col sm:flex relative">
          <div className="">
            <img
              className="object-cover w-full rounded-2xl shadow-lg hidden lg:block"
              src="https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="text background"
            />
          </div>
          <div className="flex-shrink-0 block">
            <img
              className="object-cover w-20 h-20 shadow-xl rounded-[50%] border-2 border-white mt-[-2.5em]
              hover:border-red-300 transition-all duration-700 ease-in-out m-auto  inset-0 hidden lg:block overflow-hidden"
              src="https://www.hyperui.dev/photos/man-5.jpeg"
              alt="avatar"
            />
          </div>

          <div className="p-2 ">
            <h5 className="text-xl font-bold text-gray-900 text-center">
              user
            </h5>
            <h6 className="block mt-1 text-xs font-medium text-gray-600 text-center">
              user.user@gmail.com
            </h6>
            <p className="text-sm text-gray-500 text-center">
              Lorem ipsum a a dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <dl className="flex justify-around mb-10 p-2">
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600 text-center">
                2500
              </dt>
              <dd className="text-xs text-gray-500">Who viewed you</dd>
            </div>

            <div className="flex flex-col-reverse ml-3 sm:ml-6 text-center">
              <dt className="text-sm font-medium text-gray-600">2500</dt>
              <dd className="text-xs text-gray-500">Views on post</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="mt-10 bg-white   border rounded-2xl hover:shadow-2xl transition-all duration-700 ease-in-out shadow-lg">
        <h2 className="font-bold text-center mt-2 mb-5">Recent</h2>
        <div className="hashtags flex-col p-2">
          <div className="block text-sm text-gray-500 hover:text-gray-900 text-center">
            #react
          </div>
          <div className="text-sm text-gray-500 hover:text-gray-900 text-center">
            #javascript
          </div>
          <div className="text-sm text-gray-500 hover:text-gray-900 text-center">
            #nodejs
          </div>
          <div className="text-sm text-gray-500 hover:text-gray-900 text-center">
            #express
          </div>
          <div className="text-sm text-gray-500 hover:text-gray-900 text-center">
            #mongodb
          </div>
          <div className="text-sm text-gray-500 hover:text-gray-900 text-center">
            #react-native
          </div>
          <div className="text-sm text-gray-500 hover:text-gray-900 text-center">
            #redux
          </div>
          <div className="text-sm text-gray-500 hover:text-gray-900 text-center">
            #node-js
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
