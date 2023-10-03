import { memo } from "react";
import RectangleComponent1 from "./RectangleComponent1";
import RectangleComponent from "./RectangleComponent";

const JaipurCard = memo(() => {
  return (
    <div className="absolute top-[181.75px] left-[235.65px] w-[1037.35px] h-[376.36px] text-left text-xl text-white font-poppins">
      <RectangleComponent1
        dimensions="/image-3@2x.png"
        rectangleDivWidth="168.44px"
        rectangleDivHeight="176.77px"
        rectangleDivPosition="absolute"
        rectangleDivTop="0px"
        rectangleDivLeft="430.47px"
      />
      <RectangleComponent1
        dimensions="/image-31@2x.png"
        rectangleDivWidth="168.44px"
        rectangleDivHeight="176.77px"
        rectangleDivPosition="absolute"
        rectangleDivTop="0px"
        rectangleDivLeft="658.27px"
      />
      <RectangleComponent1
        dimensions="/image-32@2x.png"
        rectangleDivWidth="168.44px"
        rectangleDivHeight="176.77px"
        rectangleDivPosition="absolute"
        rectangleDivTop="0px"
        rectangleDivLeft="868.07px"
      />
      <RectangleComponent
        dimensions="/image-4@2x.png"
        rectangleDivWidth="169.28px"
        rectangleDivHeight="175.02px"
        rectangleDivPosition="absolute"
        rectangleDivTop="187.27px"
        rectangleDivLeft="430.47px"
      />
      <RectangleComponent
        dimensions="/image-41@2x.png"
        rectangleDivWidth="169.28px"
        rectangleDivHeight="175.02px"
        rectangleDivPosition="absolute"
        rectangleDivTop="187.27px"
        rectangleDivLeft="868.07px"
      />
      <RectangleComponent
        dimensions="/image-42@2x.png"
        rectangleDivWidth="169.28px"
        rectangleDivHeight="175.02px"
        rectangleDivPosition="absolute"
        rectangleDivTop="187.27px"
        rectangleDivLeft="659.1px"
      />
      <img
        className="absolute h-[107.88%] w-[42.4%] top-[-0.46%] right-[57.6%] bottom-[-7.41%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image-5@2x.png"
      />
      <b className="absolute top-[344.25px] left-[12.35px] inline-block w-[127.38px] h-[32.11px]">
        Uttarkhand
      </b>
    </div>
  );
});

export default JaipurCard;
