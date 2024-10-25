import React from 'react'
import Slider from "react-slick";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "lightwhite" }}
            onClick={onClick}
        >
            NEXT
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "lightwhite" }}
            onClick={onClick}
        >
            BACK
        </div>
    );
}

function centerMode() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1424,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },

            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
        ],
    };
    return (
        <div className="slider-container" class="mx-16">
            <Slider {...settings}>
                <div>
                    <img src="https://wallpaperaccess.com/full/2010980.jpg" class="h-80 p-2" alt="" />
                </div>
                <div>
                    <img src="https://www.mountaintracks.co.uk/media/k2/items/cache/8fe3e0f34d3083cba6fe73d62a783d7f_XL.jpg" class=" h-80 p-2" alt="" />
                </div>
                <div>
                    <img src="https://wallpapercave.com/wp/wp6673691.jpg" class="h-80 p-2" alt="" />
                </div>
                <div>
                    <img src="https://3.bp.blogspot.com/-plxei2BHHKk/VOg0cn-VyKI/AAAAAAAAAAw/ejVEW_oAq_0/s1600/rock-climbing-desktop-hd-wallpaper-free-mountain-pictures.png" class="h-80 p-2" alt="" />
                </div>
                <div>
                    <img src="https://i.pinimg.com/originals/fd/be/23/fdbe23c9fa9beb8debec8e994aed8ebf.jpg" class="h-80 p-2" alt="" />
                </div>
                <div>
                    <img src="https://cdn-images-1.medium.com/max/1600/0*4kjXnFOvcwx9kVoQ" class="h-80 p-2" alt="" />
                </div>
            </Slider>
        </div>
    );
}

export default centerMode;
