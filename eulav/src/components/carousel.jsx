import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import left from '../assets/left.png'
import right from '../assets/right.png'
import quote from '../assets/quote.png'

const Carousel = () => {

    const [currentI, setCurrentI] = useState(0);
    const [front, setfront]=useState(true)
    const slides=[
        {
            img:'https://stagingdev.eulav.io/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-25-at-2.46.30-PM.jpeg',
            name:'Tucker Cohen',
            title:'CEO Smoov',
            comment:'Eulav is simply an evolutionary online payment! Safety and trust in transactions has never been this easy. we do not need...'
        },
        {
            img:'https://stagingdev.eulav.io/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-25-at-2.40.57-PM.jpeg',
            name:'Joseph Adetula',
            title:'CEO, Eastwind Integrated Services',
            comment:'Eulav is simply an evolutionary online payment! Safety and trust in transactions has never been this easy. we do not need...'
        },   {
            img:'https://stagingdev.eulav.io/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-25-at-3.02.57-PM.jpeg',
            name:'Cynthia Ogbuka',
            title:'E-commerce business owner',
            comment:'Eulav is simply an evolutionary online payment! Safety and trust in transactions has never been this easy. we do not need...'
        },   {
            img:'https://stagingdev.eulav.io/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-25-at-3.02.57-PM-1.jpeg',
            name:'Joseph Omoriken',
            title:'E-commerce buyer',
            comment:'Eulav is simply an evolutionary online payment! Safety and trust in transactions has never been this easy. we do not need...'
        }
    ]
    // Auto slide functionality
    useEffect(() => {
        const autoSlideInt = setInterval(() => {goToNextSlide()}, 8000); 

        return () => clearInterval(autoSlideInt);
    }, [currentI]);

    // move to the next slide
    const goToNextSlide = () => {
        setfront(true)
        setCurrentI((prevIndex) => (prevIndex + 1) % slides.length);
        
    };
        
    // move to the previous slide
    const goToPrevSlide = () => {
        setfront(false)
        setCurrentI((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
        
    };



    return (
        <div className='h-screen w-full sm:w-6/12 md:5/12 lg:w-2/5 flex justify-center items-center px-2 sm:px-5 bg-blue-500'>
            <div className="relative overflow-hidden w-full h-60 sm:h-72 flex border bg-white">
                <AnimatePresence initial={false} custom={currentI}>
                    <motion.div
                    key={currentI}
                    initial={front?{ opacity: 1,x:'100%'}:{ opacity: 0,x:'-100%'}}
                    animate={{ opacity: 1, x:0}}
                    exit={front?{ opacity: 1,x:'-100%'}:{ opacity: 0,x:'100%'}}
                    transition={{ duration:0.8 }}
                    className='h-full w-full flex flex-col border justify-between bg-white absolute p-3 backdrop:sm:p-5'
                    >
                        <div className='flex justify-start'>
                            <img src={quote} alt="" srcset="" className='h-10' /> 
                        </div>

                        <div className='sm:mt-8 '>
                            <p className='md:text-lg text-base font-medium text-gray-500 sm:text-base'>{slides[currentI].comment}</p>
                        </div>
                        <div className='flex justify-between sm:mt-5 items-center'>
                            <div className='flex gap-2 items-center'>
                                <img src={slides[currentI].img} className='h-10 w-10 rounded-full border-2  border-blue-600' />
                                <div>
                                    <div className='sm:text-lg text-gray-800 font-semibold '>{slides[currentI].name}</div>
                                    <div className='text-sm text-gray-400'>{slides[currentI].title}</div>
                                </div>
                            </div>
                            <div className='flex gap-5 '>
                                <img src={left} className='sm:h-7 md:h-10 h-7 cursor-pointer' onClick={goToNextSlide}/>
                                <img src={right} className=' sm:h-7 md:h-10 h-7 cursor-pointer' onClick={goToPrevSlide}/>
                            </div>
                        </div>

                        
                    </motion.div>
          
                </AnimatePresence>

    

            </div>
        </div>
       
    );
};

export default Carousel;
