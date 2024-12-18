import { useEffect, useState } from "react";
import Loading from "./components/loading.tsx";
import Main from "./components/prime.tsx";

function App() {
  const[state, setstate] = useState(false);
  
  useEffect(() => {
    setTimeout(() =>{
      setstate(true);
    }, 2000)
  }, []);

  return (
    <>
      <main>
        {state ? <Main /> : <Loading />}
      </main>
    </>
  )
}

export default App
