export default function Input({ disable = false, className = "", ...props }) {
  return (
    <input
      className={`${className} outline-none border border-indigo-400 h-10 px-2`}
      {...props}
    />
  );
}
