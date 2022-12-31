import Chart from "../UI/chart";
const ChartSection = function () {
  return (
    <div>
      <div className="text-8xl text-center p-4 bg-green-500">
        Impressive Articture
      </div>
      <div className="p-4 flex flex-row items-end relative bg-blue-600">
        <Chart color="bg-blue-400" height="h-16">
          مشتری های تکراری
        </Chart>
        <Chart color="bg-green-800" height="h-24">
          رضایت مشتری
        </Chart>
        <div className="text-6xl absolute left--4">75%</div>
      </div>
    </div>
  );
};

export default ChartSection;
