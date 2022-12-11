
import Controller from './Controller';
import { responseUser } from './fetch';

const Users = () =>{

  const name = 'blog Users';
  const value = 'name';
  return (
   <>
   <Controller name={name} value={value} consultFetch={responseUser}/>
   </>
  )
};

export default Users;
