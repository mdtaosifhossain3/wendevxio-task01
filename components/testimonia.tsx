import { useState, useRef, useEffect, JSX, useCallback } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  rating: number;
  title: string;
  content: string;
  author: string;
  position: string;
  avatar: string;
}

interface StarRatingProps {
  rating: number;
}

export default function TestimonialsSection(): JSX.Element {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      rating: 5,
      title: "A wonderful Experience!",
      content:
        "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users' choice.",
      author: "Heftiba",
      position: "CEO, Law firm",
      avatar: "/design.png",
    },
    {
      id: 2,
      rating: 5,
      title: "WordPress website Design",
      content:
        "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users' choice.",
      author: "Heftiba",
      position: "CEO, Law firm",
      avatar: "/design.png",
    },
    {
      id: 3,
      rating: 5,
      title: "A wonderful Experience!",
      content:
        "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users' choice.",
      author: "Heftiba",
      position: "CEO, Law firm",
      avatar: "/design.png",
    },
    {
      id: 4,
      rating: 5,
      title: "Great UI/UX Design",
      content:
        "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users' choice.",
      author: "Heftiba",
      position: "CEO, Law firm",
      avatar: "/design.png",
    },
  ];

  const handleScroll = useCallback((): void => {
    if (scrollRef.current) {
      const cardElement = scrollRef.current.querySelector(
        ".testimonial-card"
      ) as HTMLElement;
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth;
        const gap = 20;
        const scrollPosition = scrollRef.current.scrollLeft;
        const newActiveSlide = Math.round(scrollPosition / (cardWidth + gap));
        if (newActiveSlide !== activeSlide) {
          setActiveSlide(newActiveSlide);
        }
      }
    }
  }, [activeSlide]);

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
      return () => currentRef.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  const scrollToSlide = (index: number): void => {
    setActiveSlide(index);
    if (scrollRef.current) {
      const cardElement = scrollRef.current.querySelector(
        ".testimonial-card"
      ) as HTMLElement;
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth;
        const gap = 20;
        scrollRef.current.scrollTo({
          left: index * (cardWidth + gap),
          behavior: "smooth",
        });
      }
    }
  };

  const StarRating = ({ rating }: StarRatingProps): JSX.Element => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="bg-blue-950 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-sm font-medium text-white mb-2">
              —Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-white">Testimonials: </span>
              <span className="text-blue-400">Trusted</span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">
              by Our Clients
            </h3>
            <p className="text-white text-center max-w-2xl mx-auto">
              At UX Recharge, we specialize in creating modern, user-friendly
              websites tailored for SaaS companies. Our designs are conversion-
              focused, fast, and fully optimized for mobile and SEO.
            </p>
          </div>

          <div className="relative">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-5 pb-8 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="testimonial-card bg-blue-900 rounded-lg p-6 w-[490px] flex-shrink-0 snap-center"
                >
                  <div className="mb-3">
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3">
                    {testimonial.title}
                  </h3>
                  <div className="relative mb-5">
                    <div className="absolute -top-6 -right-2 text-blue-600 text-6xl opacity-30">
                      &ldquo;
                    </div>
                    <p className="text-white text-sm relative z-10">
                      {testimonial.content}
                    </p>
                  </div>
                  <div className="flex items-center mt-4">
                    <Image
                      alt=""
                      src={testimonial.avatar}
                      width={38}
                      height={38}
                      className="rounded-full"
                    />
                    <div className="pl-3">
                      <div className="text-white font-medium">
                        {testimonial.author}
                      </div>
                      <div className="text-blue-300 text-sm">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeSlide === index
                      ? "w-8 bg-blue-400"
                      : "w-2 bg-blue-800"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
