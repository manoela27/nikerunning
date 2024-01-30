import React from 'react';
import  Modal  from 'react-modal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import trail from "../img/trail.png";
import track from "../img/track.png";

interface ModalInformativeProps{
    isOpen:boolean;
    onRequestClose:()=>void;
}
const ModalInformative: React.FC<ModalInformativeProps> = ({
    isOpen,
    onRequestClose}) =>{

    const settings ={
        dots:false,
        arrow: true,
        infinite:false,
        slidesToShow: 1,
        slidesToScroll:1,
    }

    return(
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className={`modal-informative`}
    >
        <Slider {...settings}>
            <div>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h2 className='informative-toptitle'>More information</h2>
                        <h1 className='informative-title'>Trail</h1>
                        <h3 className='informative-subtitle'>Unpaved paths in the nature</h3>
                    </div>
                    <img className="informative-img" src={trail} alt='image trail'></img>
                </div>
            </div>
            <div>
            <div className='d-flex justify-content-between'>
                    <div>
                        <h2 className='informative-toptitle'>More information</h2>
                        <h1 className='informative-title'>Track</h1>
                        <h3 className='informative-subtitle'>A flat synthetic surface with traction and cushioning</h3>
                    </div>
                    <img className="informative-img" src={track} alt='image track'></img>
                </div>
            </div>
        </Slider>
    </Modal>

    )
};

export default ModalInformative;