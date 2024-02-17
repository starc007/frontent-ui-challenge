import demo from "../../assets/demo.png";
import sparkle from "../../assets/sparkle.png";

const btnCls =
  "custom-btn btn text-white/60 text-xl flex justify-between items-center w-96 h-16 rounded-2xl px-4 border border-primary-900";
const BottomBar = ({
  setOpenModal,
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="bg-primary-700 h-full rounded-xl text-white p-8 flex justify-between">
      <img src={demo} alt="demo" className="w-[500px] min-h-40" />
      <div className="flex flex-col justify-between items-end">
        <button className={`${btnCls}`}>
          <span>Select item</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 7L10 14L17 7" stroke="white" stroke-width="2" />
          </svg>
        </button>

        <button
          onClick={() => setOpenModal(true)}
          className="w-16 h-16 rounded-full bg-secondary-500 flex justify-center items-center"
        >
          <img src={sparkle} alt="sparkle" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default BottomBar;
