import React from 'react';
import Avatar from '../Avatar';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';
import image5 from '../../images/image5.jpg';
import image6 from '../../images/image6.jpg';


class Slides extends React.Component {

    state= {
        index: 0,
        direction: null,
        seconds: 2000
    }
    handleSelect= (selectedIndex, e)=> {

        console.log(selectedIndex);
        console.log(e);
        this.setState ( {
            index: selectedIndex,
            direction: e.direction
        })
    }
        render () {
            const {index,direction, seconds} = this.state;
            return (
                <div>
                        <Carousel
                            activeIndex={index}
                            direction={direction}
                            onSelect={this.handleSelect}
                            interval={seconds}
                            >
                                <Carousel.Item>
                                    <Avatar  
                                        className='d-block'
                                        src={image1}
                                        alt='first slide'/>
                                    <Carousel.Caption>
                                        <h3> First Slide  </h3>
                                        <p> If you are not willing to risk the unusual, you will have to settle for the ordinary. </p>
                                        <h2> Jim Rohn </h2>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <Avatar  
                                        className='d-block'
                                        src={image2}
                                        alt='second slide'/>
                                     <Carousel.Caption>
                                        <h3> Second Slide  </h3>
                                        <p>When you have confidence, you can have a lot of fun. And when you have fun, you can do amazing things. </p>
                                        <h2> Joe Namath </h2>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Avatar  
                                        className='d-block'
                                        src={image3}
                                        alt='third slide'/>
                                     <Carousel.Caption>
                                        <h3> Third  Slide </h3>
                                        <p> Great things never came from comfort zones. </p>
                                        <h2> Neil Strauss </h2>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Avatar  
                                        className='d-block'
                                        src={image4}
                                        alt='forth slide'/>
                                     <Carousel.Caption>
                                        <h3> Forth Slide  </h3>
                                        <p> Live as if you were to die tomorrow. Learn as if you were to live forever </p>
                                        <h2> Mahatma Gandi</h2>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Avatar  
                                        className='d-block'
                                        src={image5}
                                        alt='fifth slide'/>
                                     <Carousel.Caption>
                                        <h3> Fifth Slide  </h3>
                                        <p> It does not matter how slowly you go as long as you do not stop. </p>
                                        <h2> Confucius </h2>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Avatar  
                                        className='d-block'
                                        src={image6}
                                        alt='sixth slide'/>
                                     <Carousel.Caption>
                                        <h3> Sixth Slide  </h3>
                                        <p> Hardships often prepare ordinary people for an extraordinary destiny </p>
                                        <h2>  C.S. Lewis</h2>
                                    </Carousel.Caption>
                                </Carousel.Item>
                               
                        </Carousel>
                  
                </div>
            )
        }
}
export default Slides;