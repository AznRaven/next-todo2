"use client";

import { useRef } from "react";

const Form = ({ children, action, className, onSubmit }) => {
  const ref = useRef(null);
  return (
    <form
      className={className}
      onSubmit={onSubmit}
      ref={ref}
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
    >
      {children}
    </form>
  );
};

export default Form;
