import  {useEffect} from 'react';
import { getRandomUser } from "./API"

function App() {
    useEffect(() => {
      getRandomUser().then((user) => console.log(user))
    },[]);

  return (
    <div>

    </div>
  );
}

export default App;
