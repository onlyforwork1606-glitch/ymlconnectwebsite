import React, { useState } from 'react';
import FAQdata from './FAQdata';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold uppercase font-serif ml-10">
        Holiday Faq's
      </h2>

      <div className="flex flex-col gap-4">
        {FAQdata.map((item, index) => (
          <div key={item.id || index} className="flex flex-col gap-2">
            
    
            <div
              className="flex items-center  cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="font-medium uppercase">
                {item.title}
              </h2>

              <button className="text-3xl font-light ml-2 p-2 mb-1">
                {openIndex === index ? "−" : "+"}
              </button>
            </div>

            
            {openIndex === index && (
              <p className="text-sm text-gray-600">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
