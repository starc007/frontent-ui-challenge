import BottomBar from "@/components/appComp/BottomBar";
import CenterContent from "@/components/appComp/CenterContent";
import GenerateModal from "@/components/appComp/GenerateModal";
import LeftSidebar from "@/components/appComp/LeftSidebar";
import RightSidebar from "@/components/appComp/RightSidebar";
import { useRef, useState } from "react";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  const resizeBoxRef = useRef(null);

  const leftResizeRef = useRef(null);
  const topResizeRef = useRef(null);

  const rightResizeRef = useRef(null);

  return (
    <>
      <div
        ref={resizeBoxRef}
        className="flex flex-col items-center py-5 mx-auto max-w-screen-xl"
      >
        <div className="flex gap-4 min-h-[580px]">
          <div
            className="overflow-auto"
            style={{
              width: "367px",
              height: "580px",
              minWidth: "268px",
              maxWidth: "367px",
            }}
            ref={rightResizeRef}
          >
            <LeftSidebar />
          </div>
          <div ref={leftResizeRef} className="w-min-[567px]">
            <CenterContent />
          </div>
          <div className="w-[268px]">
            <RightSidebar />
          </div>
        </div>
        <div ref={topResizeRef} className="mt-6 h-[225px] w-full px-5">
          <BottomBar setOpenModal={setOpenModal} />
        </div>
      </div>
      {openModal && <GenerateModal onClose={() => setOpenModal(false)} />}
    </>
  );
};

export default Home;
