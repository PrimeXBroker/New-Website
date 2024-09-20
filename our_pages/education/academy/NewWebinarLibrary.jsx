import React from "react";
import { IoPlayOutline } from "react-icons/io5";

const NewWebinarLibrary = () => {
  return (
    <div className="mt-20">
      <div className="container">
        <div className={``}>
          <div className="">
            <div className="relative overflow-hidden group">
              <img
                className="w-full transition-transform duration-700 transform group-hover:scale-110"
                src="/assets/images/academy/Academy_1.png"
                alt=""
              />
              <div className="absolute bottom-7 left-0 right-0 mx-auto text-center">
                <div className="relative w-15 h-15 border-2 border-white rounded-full mb-5 transition-all duration-500 group-hover:bg-yellow-400 flex justify-center items-center">
                  <a
                    className="text-black text-3xl"
                    href="https://youtu.be/tQ_wUAij9Qo"
                  >
                    <IoPlayOutline />
                  </a>
                </div>
                <div className="text-black">
                  <h4 className="text-lg font-semibold">Safe Investment</h4>
                  <span className="text-base">By Mustafa Riad</span>
                </div>
              </div>
            </div>
          </div>

          {/* Other Video Items */}
        </div>
      </div>
    </div>
  );
};

export default NewWebinarLibrary;
