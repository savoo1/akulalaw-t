import React from "react";

export default function Button({ variant, children, className }) {
  return <div className={className}>{children}</div>;
}
