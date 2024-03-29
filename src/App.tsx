//import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByvalue,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
//import { RootState } from "./redux/store";

function App() {
  //const { count } = useSelector((state: RootState) => state.counter);
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const generateSpans = () => {
    const numSpans = Math.floor(count / 5); // 5 দিয়ে ভাগ করে Span-এর সংখ্যা নির্ধারণ
    const spans = [];
    for (let i = 0; i < numSpans; i++) {
      spans.push(<span key={i} className="h-5 w-5 bg-red-500 mx-1"></span>);
    }
    return spans;
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-300 rounded-md bg-slate-50 p-10">
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          Increment
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>

        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByvalue(5))}
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          Increment By Value
        </button>
      </div>
      <div className="flex clear-both">{generateSpans()}</div>
    </div>
  );
}

export default App;
