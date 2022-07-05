import { useContext } from 'react';

import { UserContext } from '../contexts/UserContext';

function useUser() {
  
  const value = useContext(UserContext);

  return value;
}

export default useUser;