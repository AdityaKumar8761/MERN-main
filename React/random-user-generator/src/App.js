import { useEffect, useState } from 'react';
import { getRandomUser } from "./API";
import UserCard from "./component/UserCard";

function App() {
  const [userData , setUserData] = useState(null);

  useEffect(() => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }, []);

  const refresh =() => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }


  return (
    <div>
      {userData && <UserCard d={userData} />}
      <button onClick={refresh}>Refresh</button>
    </div>
  );
}

export default App;
