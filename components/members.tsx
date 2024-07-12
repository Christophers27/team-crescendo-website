import React, { useEffect, useRef, useState } from 'react';

export default function Members()  {
  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const scrollDiv = scrollRef.current;
    let scrollAmount = 0;

    const startScrolling = () => {
      if (!isHovering && scrollDiv) {
        // Adjust the speed as necessary
        scrollAmount += 1;
        scrollDiv.scrollLeft = scrollAmount;

        // Reset scroll to start if it reaches the end
        if (scrollAmount >= scrollDiv.scrollWidth - scrollDiv.clientWidth) {
          scrollAmount = 0;
        }
      }
    };

    const intervalId = setInterval(startScrolling, 20); // Adjust the interval as necessary

    return () => clearInterval(intervalId);
  }, [isHovering]);

  return (
    <div
      className="overflow-hidden max-w-4xl"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        ref={scrollRef}
        className="flex overflow-x-auto w-auto py-4 px-2 text-black"
      >
        {[
          { name: "Alice", role: "Developer" },
          // Other members omitted for brevity
        ].map((member, index) => (
          <div
            key={index}
            className="flex-none w-60 h-40 m-2 bg-gray-200 rounded-lg shadow p-4"
          >
            <h3 className="text-lg font-bold">{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
