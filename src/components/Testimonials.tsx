
import React from "react";

type Testimonial = {
  content: string;
  author: string;
  role: string;
  practice: string;
};

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      content: "MediCollect Pro transformed our collection process. We've seen a 35% increase in patient payments and reduced our accounts receivable days by over two weeks.",
      author: "Dr. Sarah Johnson",
      role: "Medical Director",
      practice: "Family Care Associates"
    },
    {
      content: "The behavioral messaging approach makes a huge difference. Our patients appreciate the clear, empathetic communication, and we love the increased cash flow.",
      author: "Michael Rodriguez",
      role: "Practice Manager",
      practice: "Westside Medical Group"
    },
    {
      content: "Setting up payment plans used to be a manual nightmare. Now it's automated and patients can self-serve. Our staff has more time for patient care instead of collections.",
      author: "Jennifer Chen",
      role: "Financial Administrator",
      practice: "Valley Health Partners"
    }
  ];

  return (
    <section id="testimonials" className="py-16 gradient-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What Our Clients Say
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Don't just take our word for it. See how MediCollect Pro has helped practices like yours improve their patient collections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 feature-card-shadow relative">
              <svg className="absolute -top-4 left-6 w-8 h-8 text-medicollect-blue" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9999 10.5C11.9999 7.46243 9.53748 5 6.49995 5V8C7.88066 8 8.99995 9.11929 8.99995 10.5H6.49995C5.67152 10.5 4.99995 11.1716 4.99995 12V17C4.99995 17.8284 5.67152 18.5 6.49995 18.5H10.9999C11.8284 18.5 12.4999 17.8284 12.4999 17V12C12.4999 11.1716 11.8284 10.5 10.9999 10.5H11.9999ZM19.9999 10.5C19.9999 7.46243 17.5375 5 14.5 5V8C15.8807 8 17 9.11929 17 10.5H14.5C13.6715 10.5 13 11.1716 13 12V17C13 17.8284 13.6715 18.5 14.5 18.5H19C19.8284 18.5 20.5 17.8284 20.5 17V12C20.5 11.1716 19.8284 10.5 19 10.5H19.9999Z"/>
              </svg>
              
              <p className="mt-6 mb-6 text-gray-600">{testimonial.content}</p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-medicollect-gray-200 flex items-center justify-center text-sm font-medium">
                  {testimonial.author.split(' ').map(name => name[0]).join('')}
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.practice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/80 mb-4">Trusted by hundreds of healthcare providers across the country</p>
          <div className="flex justify-center space-x-8 items-center">
            <div className="bg-white/20 rounded px-4 py-2">
              <span className="text-white font-semibold">MedGroup</span>
            </div>
            <div className="bg-white/20 rounded px-4 py-2">
              <span className="text-white font-semibold">HealthPartners</span>
            </div>
            <div className="bg-white/20 rounded px-4 py-2">
              <span className="text-white font-semibold">CareLine</span>
            </div>
            <div className="bg-white/20 rounded px-4 py-2 hidden md:block">
              <span className="text-white font-semibold">PremierMD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
