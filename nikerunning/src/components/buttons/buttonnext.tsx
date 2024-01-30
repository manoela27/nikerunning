import { useNavigate } from "react-router-dom";


function ButtonNext (){

    const navigate = useNavigate()
    const handleNext = () =>{
        navigate('')
    }

    return(
        <button onClick={handleNext} className="button-next">
            Next
        </button>
    );
}
export default ButtonNext;