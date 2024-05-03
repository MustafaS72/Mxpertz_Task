import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({
  showUserModal,
  setShowUserModal,
  correctWords,
  timer,
  InCorrectWords,
  wordsPerMinute,
  accuracy,
  raw,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 overflow-auto ${
        showUserModal ? "block" : "hidden"
      }`}
      tabIndex="-1"
      role="dialog"
      style={{ display: `${showUserModal ? "block" : "none"}` }}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-neutral-700 rounded shadow-lg w-96">
          <div className="modal-header flex justify-between px-4 py-3 border-b">
            <h5 className="modal-title">Users Online</h5>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              onClick={() => setShowUserModal(false)}
            >
              <IoCloseSharp />
            </button>
          </div>
          <div
            className="modal-body px-4 py-2 overflow-y-auto"
            style={{ maxHeight: "420px" }}
          >
            <p>Raw: {raw}</p>
            <p>Accuracy: {accuracy ? accuracy : 0}%</p>
            <p>WPM: {wordsPerMinute}</p>
            <p>Time: {timer}s</p>
            <p>Incorrect: {InCorrectWords}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
