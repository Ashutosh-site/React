import React, { useState } from "react";

const App = () => {
  const [first, setfirst] = useState("");
  const [Second, secondFirst] = useState("");
  const [task, settask] = useState([]);

  const submitheandler = (e) => {
    e.preventDefault();

    const copytask = [...task];
  

    copytask.push({ first, Second });

    settask(copytask);
    setfirst("");
    secondFirst("");
  };
  

  const finish = (idx) => {
    const copytask = [...task];
      copytask.splice(idx,1)
      settask(copytask)

  };

  return (
    <div className="min-h-screen   bg-black text-white  lg:flex">
      <form
        className="flex  p-10  gap-4   lg:w-1/2 flex-col"
        onSubmit={submitheandler}
      >
        {/* FRIST INPUT FOR  TITLE */}
        <input
          type="text"
          placeholder="Type your Notes"
          className="px-5 py-2 border-2 rounded  font-medium  "
          value={first}
          onChange={(e) => {
            setfirst(e.target.value);
          }}
        />
        {/*  second input for details  */}
        <textarea
          placeholder="Type your thought.."
          className="px-5 py-2 border-2 rounded h-32 font-medium "
          value={Second}
          onChange={(e) => {
            secondFirst(e.target.value);
          }}
        />

        <button className="bg-white  text-black px-2 py-5 rounded  text-xl font-medium  ">
          Add notes
        </button>
      </form>

      <div className=" lg:border-l-2 lg:w-1/2 p-10 ">
        <h1 className="font-bold  text-4xl"> your Notes</h1>
        <div className="flex flex-wrap items-start justify-start  gap-5 mt-5  overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="   flex  justify-between  flex-col relative w-40 h-52 bg-cover rounded-xl    py-4 px-8 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4BqKGrF8DaxhtRUkQoBeZAox-ZrLu-YSZNThuE0IbmsVLG1XSq0gCuMao&s=10')]  text-black  "
              >
                <div>
                  <h3 className="leading-tight text-xl font-bold">
                    {elem.first}
                  </h3>
                  <p className="mt-2 leading-tight  font-medium text-gray-500">
                    {elem.Second}
                  </p>
                </div>

                <div>
                  <button  onClick={()=>{
                    finish(idx)
                  }} className="bg-red-600  to-black py-1 w-full  rounded">
                    delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
