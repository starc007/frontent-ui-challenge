import { useState } from "react";
import { Modal } from "../UI";

const GenerateModal = ({ onClose }: { onClose: () => void }) => {
  const [selectedButton, setSelectedButton] = useState("React");

  return (
    <Modal onClose={onClose}>
      <div className="bg-primary-800 w-[766px] h-[300px] rounded-xl border border-dark p-6">
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.833 0.833984L14.783 3.12565L12.4997 4.16732L14.783 5.21732L15.833 7.50065L16.8747 5.21732L19.1663 4.16732L16.8747 3.12565M7.49967 3.33398L5.41634 7.91732L0.833008 10.0007L5.41634 12.084L7.49967 16.6673L9.58301 12.084L14.1663 10.0007L9.58301 7.91732M15.833 12.5007L14.783 14.784L12.4997 15.834L14.783 16.8757L15.833 19.1673L16.8747 16.8757L19.1663 15.834L16.8747 14.784"
              fill="#764FFF"
            />
          </svg>
          <p className="text-white text-lg">Ask AI</p>
        </div>

        <textarea
          placeholder="Type your question here"
          className="w-full h-32 bg-primary-900 rounded-xl text-white p-4 mt-4 focus:outline-none"
        />

        <div className="flex justify-between mt-4">
          <div className="bg-primary-900 h-12 w-60 rounded-xl flex items-center justify-center">
            {["React", "Vue"].map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedButton(item)}
                className={`text-white/60 w-28 h-9 rounded-lg ${
                  selectedButton === item ? "bg-dark" : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <button className="h-12 w-36 rounded-lg flex items-center justify-center btn-gradient font-bold text-white">
            Generate
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default GenerateModal;
