const FreeCard = () => {
  return (
    <div className="relative mt-14 flex w-[224px] justify-center rounded-[20px] bg-navy-900  p-4">
      <div className="absolute -top-4 flex h-12 w-12 items-center justify-center rounded-full border-[4px] border-white bg-gradient-to-b from-[#868CFF] to-brand-500 dark:!border-navy-800">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0923 27.3033H30.8176V36.3143H10.0923V27.3033Z"
            fill="white"
          />
          <path
            d="M31.5385 29.1956C31.5385 26.2322 30.3707 23.3901 28.2922 21.2947C26.2136 19.1992 23.3945 18.022 20.4549 18.022C17.5154 18.022 14.6963 19.1992 12.6177 21.2947C10.5392 23.3901 9.37143 26.2322 9.37143 29.1956L20.4549 29.1956H31.5385Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.5 31.989C26.8452 31.989 31.989 26.8452 31.989 20.5C31.989 14.1548 26.8452 9.01099 20.5 9.01099C14.1548 9.01099 9.01099 14.1548 9.01099 20.5C9.01099 26.8452 14.1548 31.989 20.5 31.989ZM20.5 41C31.8218 41 41 31.8218 41 20.5C41 9.17816 31.8218 0 20.5 0C9.17816 0 0 9.17816 0 20.5C0 31.8218 9.17816 41 20.5 41Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="mt-8 flex h-fit flex-col items-center">
       
        <p className="mt-1 px-4 text-center text-xs text-white">
          Tăng tốc hoạt động chuyển đổi số của tổ chức với giải pháp hoàn chỉnh.
        </p>

        <a
          target="blank"
          className="text-xs mt-2 block rounded-full bg-gradient-to-b from-white/50 to-white/10 py-[2px] px-11 text-center text-base text-white hover:bg-gradient-to-b hover:from-white/40 hover:to-white/5 "
          href="#"
        >
          Liên hệ         </a>
      </div>
    </div>
  );
};

export default FreeCard;
