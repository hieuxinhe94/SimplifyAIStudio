import { useDispatch, useSelector } from "react-redux";
import { closeDetail } from "./actions/adminReducers";

const SidebarDetail = ({ open, hidden }) => {
  const dispatch = useDispatch();

  function onClose() {
    dispatch(closeDetail())
  }

  return (
    <div
      className={`sm:none duration-175 linear  !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      } ${hidden ? " hidden " : " "}`}
    >
      <div className={`mt-[50px]   flex w-full items-center justify-center`}>
        <div className="mt-1 ml-1 h-2.5  justify-center text-navy-700 dark:text-white">
          <span
            className="absolute top-4 right-4 block cursor-pointer"
            onClick={onClose}
          >
            <span className="text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </span>
          <span className="text-sm">Chi tiết</span>
        </div>
      </div>
      <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="my-2 mx-2 mb-auto pt-1" style={{ width: "300px" }}></ul>
    </div>
  );
};

export default SidebarDetail;
