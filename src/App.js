import React, { useState, useEffect } from 'react';
import cong from "./configuration";
import { getDatabase, ref, onValue } from 'firebase/database';

 
function App() {
  const [data, setData] = useState([]);

  useEffect(()=> {
    const database = getDatabase(cong);

    const collectionRef = ref(database, "my_location");

    const fetchData = () => {
      onValue(collectionRef, (snapshot) => {
        const dataItem = snapshot.val();


        if(dataItem){
          const displayItem = Object.values(dataItem);
          setData(displayItem);
        }
    });
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Database</h1>
      <ul>
        {data.map((item, index) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
