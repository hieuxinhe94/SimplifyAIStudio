 
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
 

import Widget from "components/widget/Widget";

import Playground from "./components/Playground";

const Visualization = () => {



  return (
    <div>
      {/* Card widget */}
      <div className="mt-3  mx-4 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-4 w-4 text-xs" />}
          title={"Tỷ lệ số hóa"}
          subtitle={"30.5%"}
        />
        <Widget
          icon={<IoDocuments className="h-4 w-4" />}
          title={"Tỷ lệ tự động hóa"}
          subtitle={"10.5%"}
        />
        <Widget
          icon={<MdBarChart className="h-4 w-4" />}
          title={"Thời gian làm việc thực tế"}
          subtitle={"70%"}
        />
        <Widget
          icon={<MdDashboard className="h-4 w-4" />}
          title={"Số bước"}
          subtitle={"5203"}
        />
        <Widget
          icon={<MdBarChart className="h-4 w-4" />}
          title={"Dự án đang triển khai"}
          subtitle={"12"}
        />
        <Widget
          icon={<IoMdHome className="h-4 w-4" />}
          title={"Tổng Quy trình"}
          subtitle={"278"}
        />
      </div>

      {/* Charts */}

      <div className="mx-2 p-2 rounded-xl grid grid-cols-1">
      <Playground />
      </div>
    </div>
  );
};

export default Visualization;
