import {
  UserReducerInterface,
  initialState,
  useUserReducer,
} from 'data/reduces/UserReducer';
import React, { createContext, PropsWithChildren } from 'react';

const initialValue: UserReducerInterface = {
  userDispatch: () => {},
  userState: initialState,
};

export const UserContext = createContext(initialValue);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const provider = useUserReducer();
  return (
    <UserContext.Provider value={provider}>{children}</UserContext.Provider>
  );
};
