import Buttonback from "./buttons/buttonback";
import ButtonInformative from "./buttons/buttoninformative";
import ButtonNext from "./buttons/buttonnext";

function NavBar (){
    return(
        <div className="d-flex justify-content-between align-items-center mb-4">
            <Buttonback></Buttonback>
            <div className="d-flex">
                <ButtonInformative></ButtonInformative>
                <ButtonNext></ButtonNext>
            </div>
        </div>
    );
}

export default NavBar