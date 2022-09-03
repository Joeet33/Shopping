import { NextPage } from "next";
import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../slices/counterSlice";
import { Nav } from "../components/nav";

const Shop: NextPage = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Nav />
      <div className="container">
        <div>count is {count}</div>
        <button onClick={() => dispatch(increment())}>increase</button>
        <button onClick={() => dispatch(decrement())}>decrease</button>
      </div>
    </>
  );
};

export default Shop;
