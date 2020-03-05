import React, { useRef, useEffect } from 'react';

const Page = ({ title, children }) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <div ref={pageRef}>
      {title && <h1>{title}</h1>}
      <div>{children}</div>
    </div>
  );
};

export default Page;
