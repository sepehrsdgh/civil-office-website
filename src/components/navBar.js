import NavICON from "../UI/navIcon";
const NavBar = function () {
  return (
    <div>
      <div className="text-center p-4">لوگو</div>
      <div>
        <NavICON>خانه</NavICON>
        <NavICON>پروژه ها</NavICON>
        <NavICON>اخبار</NavICON>
        <NavICON>درباره ما</NavICON>
      </div>
      <NavICON color="orange">ارتباط با ما</NavICON>
    </div>
  );
};

export default NavBar;
