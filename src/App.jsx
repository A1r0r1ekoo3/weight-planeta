import { useState, useRef } from "react";

// img
import mercury from "./assets/planet-mercury.svg";
import earth from "./assets/planet-earth.svg";
import jupiter from "./assets/planet-jupiter.svg";
import mars from "./assets/planet-mars.svg";
import neptune from "./assets/planet-neptune.svg";
import saturn from "./assets/planet-saturn.svg";
import uranus from "./assets/planet-uranus.svg";
import venus from "./assets/planet-venus.svg";

function App() {
  const inputVal = useRef();
  const [data, setData] = useState(null);
  const gravitationalAccelerations = {
    mercury: 3.7,
    venus: 8.87,
    earth: 9.81,
    mars: 3.71,
    jupiter: 24.79,
    saturn: 10.44,
    uranus: 8.69,
    neptune: 11.15,
  };

  function handlSubmit(e) {
    e.preventDefault();
    const weight = inputVal.current.value;
    let newArr = [];
    Object.entries(gravitationalAccelerations).forEach(([planet, acc]) => {
      const number = (weight * acc) / 9.81;
      const newNuber = number.toFixed(2);
      newArr.push(newNuber);
    });
    setData(newArr);

    inputVal.current.value = "";
  }

  console.log(data);
  return (
    <div className="h-screen w-screen flex flex-col items-center gap-6">
      <form
        onSubmit={handlSubmit}
        className="flex flex-col items-center gap-6 mt-10"
      >
        <label className=" flex items-center gap-4">
          <span className="text-3xl font-bold text-sky-800">
            Enter your weight on Earth (kg):
          </span>
          <input
            ref={inputVal}
            type="number"
            placeholder="Type here"
            className="input input-bordered input-info "
          />
        </label>
        <button className="btn btn-info text-xl font-semibold text-white">
          Calculate Weights
        </button>
      </form>
      {data && (
        <div className="grid grid-cols-4 gap-4 w-[1200px] pb-7">
          <div className="flex flex-col w-72 justify-center items-center rounded-xl gap-4 p-8 bg-slate-700">
            <img src={mercury} alt={mercury} width={200} />
            <h3 className="text-white font-medium text-xl">Mercury</h3>
            <span className="text-white font-medium text-xl">{data[0]} kg</span>
          </div>
          <div className="flex flex-col w-72 justify-center items-center rounded-xl gap-4 p-8 bg-slate-700">
            <img src={earth} alt={earth} width={200} />
            <h3 className="text-white font-medium text-xl">Mercury</h3>
            <span className="text-white font-medium text-xl">{data[1]} kg</span>
          </div>
          <div className="flex flex-col w-72 justify-center items-center rounded-xl gap-4 p-8 bg-slate-700">
            <img src={jupiter} alt={jupiter} width={200} />
            <h3 className="text-white font-medium text-xl">Mercury</h3>
            <span className="text-white font-medium text-xl">{data[2]} kg</span>
          </div>
          <div className="flex flex-col w-72 justify-center items-center rounded-xl gap-4 p-8 bg-slate-700">
            <img src={mars} alt={mars} width={200} />
            <h3 className="text-white font-medium text-xl">Mercury</h3>
            <span className="text-white font-medium text-xl">{data[3]} kg</span>
          </div>
          <div className="flex flex-col w-72 justify-center items-center rounded-xl gap-4 p-8 bg-slate-700">
            <img src={neptune} alt={neptune} width={200} />
            <h3 className="text-white font-medium text-xl">Mercury</h3>
            <span className="text-white font-medium text-xl">{data[4]} kg</span>
          </div>
          <div className="flex flex-col w-72 justify-center items-center rounded-xl gap-4 p-8 bg-slate-700">
            <img src={saturn} alt={saturn} width={200} />
            <h3 className="text-white font-medium text-xl">Mercury</h3>
            <span className="text-white font-medium text-xl">{data[5]} kg</span>
          </div>
          <div className="flex flex-col w-72 justify-center items-center rounded-xl gap-4 p-8 bg-slate-700">
            <img src={uranus} alt={uranus} width={200} />
            <h3 className="text-white font-medium text-xl">Mercury</h3>
            <span className="text-white font-medium text-xl">{data[6]} kg</span>
          </div>
          <div className="flex flex-col w-72 justify-center items-center rounded-xl gap-4 p-8 bg-slate-700">
            <img src={venus} alt={venus} width={200} />
            <h3 className="text-white font-medium text-xl">Mercury</h3>
            <span className="text-white font-medium text-xl">{data[7]} kg</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
