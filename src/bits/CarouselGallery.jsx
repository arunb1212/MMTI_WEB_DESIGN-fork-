import { useEffect, useState, useCallback } from 'react';
import './CarouselGallery.css';

export default function CarouselGallery({ items }) {
    const defaultItems = [
        { image: `/photo_gallery/SimulatorRoom4.jpg`, text: 'Simulator room' },
        { image: "/photo_gallery/SimulatorRoom9.jpg", text: 'Desk Setup' },
        { image: "/photo_gallery/SimulatorRoom2.jpg", text: 'Classrooms' },
        { image: "/photo_gallery/MMTI Khopoli Swimming Pool.jpg", text: 'Training' },
        { image: `/photo_gallery/capt.cl dubey.png`, text: 'Captain C.L. Dubey' },
        { image: `/photo_gallery/capt.op yadav.png`, text: 'Capt. O.P. Yadav' },
        { image: `/photo_gallery/MMTI - CMMI meeting 01Sep17.jpg`, text: 'CMMI meeting' },
    ];

    const galleryItems = items && items.length ? items : defaultItems;
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setActiveIndex((current) => (current + 1) % galleryItems.length);
    }, [galleryItems.length]);

    const prevSlide = useCallback(() => {
        setActiveIndex((current) => (current - 1 + galleryItems.length) % galleryItems.length);
    }, [galleryItems.length]);

    // Auto-scroll logic
    useEffect(() => {
        const interval = setInterval(nextSlide, 3500);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <div className="carousel-gallery">
            <div className="carousel-3d-container">
                {galleryItems.map((item, index) => {
                    let offset = index - activeIndex;
                    // Handle wrap around for seamless loop
                    if (offset < -Math.floor(galleryItems.length / 2)) {
                        offset += galleryItems.length;
                    } else if (offset > Math.floor(galleryItems.length / 2)) {
                        offset -= galleryItems.length;
                    }

                    const isVisible = Math.abs(offset) <= 2; // Show only nearest neighbors to save layout
                    const zIndex = 10 - Math.abs(offset);
                    const scale = 1 - Math.abs(offset) * 0.15;
                    const translateX = offset * 45; // percentage
                    const opacity = Math.abs(offset) >= 2 ? 0 : 1; 

                    return (
                        <div 
                            key={index} 
                            className={`carousel-3d-card ${index === activeIndex ? 'active' : ''}`}
                            style={{
                                transform: `translateX(calc(-50% + ${translateX}%)) scale(${scale})`,
                                zIndex,
                                opacity: isVisible ? opacity : 0,
                                visibility: isVisible ? 'visible' : 'hidden'
                            }}
                            onClick={() => {
                                if (offset > 0) nextSlide();
                                if (offset < 0) prevSlide();
                            }}
                        >
                            <img src={item.image} alt={item.text} />
                            <div className="carousel-overlay">
                                <p className="carousel-text">{item.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            
            <div className="carousel-indicators">
                {galleryItems.map((_, index) => (
                    <div 
                        key={index} 
                        className={`indicator ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}
