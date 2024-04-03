import React from "react";

const Section = ({ tag }) => {
  return (
    <div>
      <div className="sectionHeader">
        <div className="sectionHeaderContainer">
          <div className="sectionTitle">{tag}</div>
        </div>
      </div>
      <div className="divider" />
    </div>
  );
};

export default Section;
