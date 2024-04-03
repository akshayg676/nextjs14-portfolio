import React from "react";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const CustomCursor = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={15}
        outerSize={10}
        color="217, 217, 217"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        // outerStyle={{
        //   border: '1px solid #fff'
        // }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </div>
  );
};

export default CustomCursor;
