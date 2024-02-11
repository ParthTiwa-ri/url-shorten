/* eslint-disable react/prop-types */
function Button({ children, className }) {
  return (
    <button
      className={`inline-block bg-cyan  px-10 py-4 font-bold text-white ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
