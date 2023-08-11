export default function Label({ children, className = "", ...props }) {
  return (
    <label
      htmlFor=""
      className={`${className} block text-indigo-700`}
      {...props}
    >
      {children}
    </label>
  );
}
