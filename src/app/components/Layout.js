import Nav from "./Nav";

const Layouts = ({ children }) => {
  return (
    <div className="bg-blue-50">
      <div className="max-w-xl px-8 mx-auto">
        <Nav />
      </div>
      <div className="mt-8">{children}</div>
    </div>
  );
};

export default Layouts;
