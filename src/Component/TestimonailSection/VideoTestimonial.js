import React from "react";
import "./VideoTestimonial.css";

const videos = [
  {
    src: "https://www.youtube.com/embed/JFHo9y0",
    text: "Testimonial 1",
    author: "John Doe",
  },
  {
    src: "https://www.youtube.com/embed/k6r86ka",
    text: "Testimonial 2",
    author: "Jane Smith",
  },
  {
    src: "https://www.youtube.com/embed/RlHcTxE",
    text: "Testimonial 3",
    author: "Mike Johnson",
  },
  {
    src: "https://www.youtube.com/embed/aqz-KE-",
    text: "Testimonial 4",
    author: "Emily Brown",
  },
  {
    src: "https://www.youtube.com/embed/3JZ_D3E",
    text: "Testimonial 5",
    author: "Chris Green",
  },
  {
    src: "https://www.youtube.com/embed/VYOjWnS",
    text: "Testimonial 6",
    author: "Sarah White",
  },
  {
    src: "https://www.youtube.com/embed/JGhoLcs",
    text: "Testimonial 7",
    author: "David Black",
  },
  {
    src: "https://www.youtube.com/embed/dQw4w9W",
    text: "Testimonial 8",
    author: "Linda Blue",
  },
  {
    src: "https://www.youtube.com/embed/9bZkp7q",
    text: "Testimonial 9",
    author: "James Yellow",
  },
  {
    src: "https://www.youtube.com/embed/e-ORhEE",
    text: "Testimonial 10",
    author: "Alice Purple",
  },
  {
    src: "https://www.youtube.com/embed/NL6CDFn",
    text: "Testimonial 11",
    author: "Robert Orange",
  },
  {
    src: "https://www.youtube.com/embed/TZzK29_",
    text: "Testimonial 12",
    author: "Sophia Pink",
  },
  {
    src: "https://www.youtube.com/embed/SbjXM9s",
    text: "Testimonial 13",
    author: "John Red",
  },
];

function VideoTestimonial() {
  return (
    <div className="main_testimonial">
    <div className="container video-testimonial-container  gtco-testimonials pt-5">
    <h2 className="client_head">
          Testimonials from Our Valued Clients Who Experienced Our REI Services
        </h2>
        <p className="client_subhead">
          Discover what clients of StopShopREI LLC have to say about how our
          cutting-edge REI marketing and <br /> CRM solutions have
          revolutionized their real estate ventures, optimized their processes,
          and elevated their success to new levels.
        </p>
      {videos.map((video, index) => (
        <div className="video-testimonial-box" key={index}>
          <iframe
            width="100%"
            height="215"
            src={video.src}
            title={`Video testimonial ${index + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* <div className="testimonial-text">
            <p>{video.text}</p>
            <h4>{video.author}</h4>
          </div> */}
        </div>
      ))}
    </div>
    </div>
  );
}

export default VideoTestimonial;
