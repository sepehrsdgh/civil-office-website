const Chart = function (props) {
  return (
    <div className={`flex flex-col`}>
      <div className="text-[10px] w-8 text-center">{props.children}</div>
      <div className={`${props.color} w-10 ${props.height}  `}></div>
    </div>
  );
};

export default Chart;
