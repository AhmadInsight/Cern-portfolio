import  TestimonialsCarousel  from "./TestimonialsCarousel";

export const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1>My Happy Clients</h1>
      <div className="container">
        <div className="testimonials-content">
          <TestimonialsCarousel />
        </div>
      </div>
    </div>
  );
};
