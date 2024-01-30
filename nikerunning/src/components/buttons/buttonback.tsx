import { useNavigate } from "react-router-dom";
import Arrowleft from "../icons/arrowleft";

function Buttonback(){

    const navigate = useNavigate();
    
    const handleBack = () => {
        navigate(-1)
    }

    return(
    <button onClick={handleBack} className="button-back"> 
        <Arrowleft width={32} height={32}></Arrowleft>        
    </button>
    );
}

export default Buttonback;