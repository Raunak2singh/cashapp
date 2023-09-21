import { Box} from "@mui/material";
import LandingPage from "./pages/LandingPage";
import { useEffect, useState } from "react";
import Loading from "./Components/Loading";


function App() {
  const [onLoading , setLoading] = useState(true)
    useEffect(()=>{

        setTimeout(()=>{
            setLoading(false);
        },500)

    },[])

    if(onLoading){
      return <Loading/>
    }else{
      return (
        <Box component={"div"}>
            <LandingPage/>
        </Box>
      );
    }

 
}

export default App;
