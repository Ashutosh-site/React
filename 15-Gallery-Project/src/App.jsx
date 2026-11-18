import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [Userdata, UpdateData] = useState([]);

  const [index, setindex] = useState(1);

  const getdata = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=20`,
    );
    UpdateData(response.data);
  };

  useEffect(function () {
    getdata();
  }, [index]);

  let printuserdata =  <h3 className=" absolute top-1/2  left-1/2  -translate-x-1/2 -translate-y-1/2 "> "loading"  </h3>

  if (Userdata.length > 0) {

    printuserdata = Userdata.map(function (elem, idx) {
      return (

        <div className="h-40 w-44">
          <a href={elem.url}>
            <div
              key={elem.id}
              className="h-40 w-44 bg-white rounded-2xl overflow-hidden"
            >
              <img
                className="h-full w-full object-cover "
                src={elem.download_url}
              />
            </div>
            <h1>{elem.author}</h1>
          </a>
        </div>
      );
    });
  }

  return (
    <>
      <div className="bg-black min-h-screen text-white">
        <div className="flex flex-wrap gap-10">{printuserdata}</div>
        <div className="flex justify-center items-center h-20 gap-6 mt-10 w-full text-white">
          <button
            onClick={() => {
              if (index > 1){
                  setindex(index - 1);
                UpdateData([])

              } 
            }}
            className="bg-red-200  rounded-2xl p-4  cursor-pointer "
          >
            Prev
          </button>
              <h3> Page {index}</h3>
          <button 
            onClick={() => {
              setindex(index + 1);
              UpdateData([])
            }}
            className="bg-red-200  rounded-2xl p-4 cursor-pointer "
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
