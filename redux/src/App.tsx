
import './App.css'

import { FC, useState } from 'react';
// import { increment } from './store/reducers/userSlice';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';





export const App: FC = () => {
  // const { count } = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch()
  // const handleIncrement = () => {
  //   dispatch(increment(1));
  // };
  return (
    <div className="App">
      {/* <button onClick={handleIncrement}>{count}</button> */}
    </div>
  );
};

export default App
