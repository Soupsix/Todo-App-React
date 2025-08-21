import React, { useState, useCallback } from "react";

const About = () => {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount(prev => {
      console.log("Lần 1:", prev);
      return prev + 1;
    });

    // Callback hell bắt đầu đây
    setTimeout(() => {
      setCount(prev => {
        console.log("Lần 2:", prev);
        return prev + 1;
      });

      setTimeout(() => {
        setCount(prev => {
          console.log("Lần 3:", prev);
          return prev + 1;
        });

        setTimeout(() => {
          setCount(prev => {
            console.log("Lần 4:", prev);
            return prev + 1;
          });

          setTimeout(() => {
            setCount(prev => {
              console.log("Lần 5:", prev);
              return prev + 1;
            });
          }, 500);

        }, 500);

      }, 500);

    }, 500);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default About;
