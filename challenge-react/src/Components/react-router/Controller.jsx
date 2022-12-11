import React, {useState, useEffect, useCallback} from 'react'
import { Link } from "react-router-dom";

const Controller = ({consultFetch, name, value}) =>{
  const [object, setObject] = useState([]);

  const fetchData = useCallback(async () => {
    const data = await consultFetch();
    setObject(data);
  }, [consultFetch]);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

  
  const list = object.filter((_, index) => index <= 10).map((item, index) => {
    return <div key={index}>
        <p>{item[value]}</p>
    </div>
  });
    
  return (
    <div>
        <h1>{name}</h1>
      <Link to="/" className='link-css'>Back</Link>
      {list}
    </div>
  )
};

export default Controller;