
import './App.css'

import { FC, useEffect, useState } from 'react';
// import { increment } from './store/reducers/userSlice';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { fetchUsers } from './store/reducers/fetchData';





export const App: FC = () => {
  const { users, isLoading, error } = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch()
  // const handleIncrement = () => {
  //   dispatch(increment(1));
  // };

  useEffect(() => {
    dispatch(fetchUsers)
  }, [])

  return (
    <div className="App">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {users.map((user) => {
        return (
          <div className='user'>
            <ol style={{ padding: '1em', background: 'coral' }}>
              {user.name}
            </ol>
          </div>
        )
      })}
      {/* <button onClick={handleIncrement}>{count}</button> */}
    </div>
  );
};

export default App
