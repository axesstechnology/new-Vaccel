import React, { forwardRef } from 'react';

const Section = forwardRef(({ id, children, className, ...props }, ref) => {
  return (
    <section
      id={id}
      ref={ref}
      className={className}
      {...props}
    >
      {children}
    </section>
  );
});

export default Section;
