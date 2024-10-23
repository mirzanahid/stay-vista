import { useState } from "react";

const ForgotPassModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleOutsideClick = (e) => {
    if (e.target.id === "modalBackground") {
      closeModal();
    }
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={openModal}
      >
        Forgot Password
      </button>

      {isOpen && (
        <div
          id="modalBackground"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleOutsideClick}
        >
          <div className="bg-white p-6 rounded-lg relative w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Forgot Password</h2>
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>

            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 px-4 py-2 mt-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassModal;
