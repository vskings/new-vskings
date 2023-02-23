import React from 'react';

const TitleHeader = ({ heading, link, text }) => {
  return (
    <>
      <h2 className="web-h2 text-secondary2-500 text-center mx-auto my-8 border-t-[8px] border-secondary2-500 w-fit py-4">
        {heading}
      </h2>
      {text && (
        <a className="web-p4 text-secondary2-500 text-right my-5" href={link}>
          {text}
        </a>
      )}
    </>
  );
};

export default TitleHeader;
