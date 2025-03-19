import React from "react";

const AddTask = ({ title,setTitle,
                   desc, setDesc,
                   date, setDate,
                   setStatus, setAddTask,handleCreateTask }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 p-4 z-10">
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Add your Task
            </h1>
            <button onClick={() => setAddTask(false)}>
              <h1 className="text-red-600">X</h1>
            </button>
          </div>

          <form
            className="space-y-4 md:space-y-6"
            onSubmit={(e) => handleCreateTask(e)}
          >
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                placeholder="Your description"
                maxLength={150}
                rows={4}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    name="due_date"
                    id="due_date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className=""
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="due_date" className="text-gray-500">
                    finishDay
                  </label>
                </div>
              </div>

              <label htmlFor="status">Status:</label>
              <select
                name="status"
                id="status"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="pending">pending</option>
                <option value="in-progress">in-progress</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-[#2563eb] hover:bg-[#1d4ed8] focus:ring-4 focus:outline-none focus:ring-[#93c5fd] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Create Task
            </button>
          </form>
        </div>
      </div>
    </div> 
  );
};

export default AddTask;
