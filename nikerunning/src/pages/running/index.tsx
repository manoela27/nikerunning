import NavBar from "../../components/navbar";
import SliderTrack from "../../components/slider-track";

function Running(){
    return(
        <div className="c-running">
            <div className="container">
                <NavBar></NavBar>
                <h1 className="running-title">Running Surface</h1>
                <p className="running-subtitle">What type of surface are you going to run on?</p>
                <SliderTrack></SliderTrack>
            </div>
        </div>
    );
}

export default Running;