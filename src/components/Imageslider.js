    import React from 'react'
    import Slider from 'react-slick'
    import 'slick-carousel/slick/slick.css'
    import 'slick-carousel/slick/slick-theme.css'
    import './Imageslider.css'
    import john from './images/john-doe.png'

    function Imageslider() {
        let setting=
        {
            dot:true,
            infinte:true,
            speed:500,
            slideToShow:3,
            slideToScroll:1,
            caseEase:"linear"
        }
    return (
        <Slider {...setting}>

            <div>hhhhhhhhhhhhhhhhhhhhhhh</div>
    <div className="card-wrapper">

        <div className="card">
            <div className="card-image">
                <img src={john} alt="ssssssssssssssssss" />
            </div>
            <ul className='social-icons'>
            <li>
                    <a href="#">
                        <i className='fa fa-facebook'></i>
                    </a>
                </li>  <li>
                    <a href="#">
                        <i className='fa fa-instagram'></i>
                    </a>
                </li>  <li>
                    <a href="#">
                        <i className='fa fa-twitter'></i>
                    </a>
                </li>z  <li>
                    <a href="#">
                        <i className='fa fa-dribble'></i>
                    </a>
                </li>

            </ul>
            <div className="details">
                <h2>Sports uniform <span className='job-title'> Hanicom</span></h2>
            </div>
        </div>
    </div>
   
        </Slider>
    )
    }

    export default Imageslider