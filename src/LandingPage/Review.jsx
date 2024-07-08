import React, { useState, useEffect, useCallback } from 'react';
import './Review.css';

const Review = () => {
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      author: "Ricky Aprilia",
      position: "Founder of Varibo"
    },
    {
      text: "Lorem ipsum dolor sit amet, mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      author: "John Steve",
      position: "CEO of ABC"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      author: "Ricky Aprilia",
      position: "Founder of Varibo"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      author: "Ricky Aprilia",
      position: "Founder of Varibo"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      author: "Ricky Aprilia",
      position: "Founder of Varibo"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const showTestimonial = useCallback((index, autoplay = false) => {
    setCurrentIndex(index);
    if (!autoplay) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  useEffect(() => {
    showTestimonial(0);
  }, [showTestimonial]);

  return (
    <>
      <section className="testimonial-section">
        <h1 className="testimonialheading">
          Great
          <br /> Platform
        </h1>
        <div className="testimonial-content">
          <blockquote id="testimonial-text">
            <p>{testimonials[currentIndex].text}</p>
          </blockquote>
          <div className="testimonial-navigation">
            {testimonials.map((_, index) => (
              <img
                key={index}
                src={require(`../Assets/t${index + 1}.png`)}
                alt={`Student ${index + 1}`}
                onClick={() => showTestimonial(index)}
                className={currentIndex === index ? "active" : ""}
                loading="lazy"
              />
            ))}
          </div>
          <cite className="cite">
            <strong id="testimonial-author">{testimonials[currentIndex].author}</strong>
            <span id="testimonial-position">{testimonials[currentIndex].position}</span>
          </cite>
        </div>
      </section>
    </>
  );
};

export default React.memo(Review);


