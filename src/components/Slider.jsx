import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useRef } from 'react';

const Slider = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        < div >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, Mousewheel, Keyboard]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
                cssMode={true}
                mousewheel={true}
                keyboard={true}
                rewind={true}
            >
                <SwiperSlide>
                    <div>
                        <h1 className="relative isolate xoverflow-hidden bg-gray-900 h-96 md:h-[600px]">
                            <img
                                className='bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20 absolute  h-96 md:h-[600px] inset-0 -z-10  w-full object-cover object-right md:object-center'
                                src="https://i.ibb.co/px7zv5j/Angkor-Wat-Cambodia.webp" alt="" />
                            <div className="mx-auto px-6 lg:px-8 h-96 md:h-[600px] flex justify-center items-center text-center">
                                <div className="mx-auto xmax-w-2xl lg:mx-0 border-b-4 uppercase xrounded">
                                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl p-4">
                                        <Typewriter
                                            words={['Welcome to Angkor Wat', 'Welcome to Hoan Kiem Lake', 'Welcome to Himaloy']}
                                            cursor={true} cursorStyle='|' loop={Infinity} typeSpeed={100} deleteSpeed={100} delaySpeed={1000} />
                                    </h2>
                                </div>
                            </div>
                        </h1>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <h1 className="relative isolate xoverflow-hidden bg-gray-900 h-96 md:h-[600px]">
                            <img
                                className='bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20 absolute  h-96 md:h-[600px] inset-0 -z-10  w-full object-cover object-right md:object-center'
                                src="https://i.ibb.co/MVQ48Xw/Hoan-Kiem.jpg" alt="" />
                            <div className="mx-auto px-6 lg:px-8 h-96 md:h-[600px] flex justify-center items-center text-center">
                                <div className="mx-auto xmax-w-2xl lg:mx-0 border-b-4 uppercase xrounded">
                                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl p-4">
                                        <Typewriter
                                            words={['Welcome to Angkor Wat', 'Welcome to Hoan Kiem Lake', 'Welcome to Himaloy']}
                                            cursor={true} cursorStyle='|' loop={Infinity} typeSpeed={100} deleteSpeed={100} delaySpeed={1000} />
                                    </h2>
                                </div>
                            </div>
                        </h1>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <h1 className="relative isolate xoverflow-hidden bg-gray-900 h-96 md:h-[600px]">
                            <img
                                className='bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20 absolute  h-96 md:h-[600px] inset-0 -z-10  w-full object-cover object-right md:object-center'
                                src="https://i.ibb.co/wdn1M7M/Komodo-National-Park.webp" alt="" />
                            <div className="mx-auto px-6 lg:px-8 h-96 md:h-[600px] flex justify-center items-center text-center">
                                <div className="mx-auto xmax-w-2xl lg:mx-0 border-b-4 uppercase xrounded">
                                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl p-4">
                                        <Typewriter
                                            words={['Welcome to Angkor Wat', 'Welcome to Hoan Kiem Lake', 'Welcome to Himaloy']}
                                            cursor={true} cursorStyle='|' loop={Infinity} typeSpeed={100} deleteSpeed={100} delaySpeed={1000} />
                                    </h2>
                                </div>
                            </div>
                        </h1>

                    </div>
                </SwiperSlide>

                <div className="autoplay-progress" slot="container-end" ref={progressCircle}>
                    {/* <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg> */}
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div >
    );
};

export default Slider;
