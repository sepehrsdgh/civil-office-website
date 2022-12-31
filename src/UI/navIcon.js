const NavICON = function (props) {
  const color = props.color;
  return (
    <div
      className={`${color ? "bg-orange-600" : "bg-yellow-400"} p-4 text-center`}
    >
      {props.children}
    </div>
  );
};

export default NavICON;
