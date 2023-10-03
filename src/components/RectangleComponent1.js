import { memo, useMemo } from "react";

const RectangleComponent1 = memo(
  ({
    dimensions,
    rectangleDivWidth,
    rectangleDivHeight,
    rectangleDivPosition,
    rectangleDivTop,
    rectangleDivLeft,
  }) => {
    const rectangleDiv1Style = useMemo(() => {
      return {
        width: rectangleDivWidth,
        height: rectangleDivHeight,
        position: rectangleDivPosition,
        top: rectangleDivTop,
        left: rectangleDivLeft,
      };
    }, [
      rectangleDivWidth,
      rectangleDivHeight,
      rectangleDivPosition,
      rectangleDivTop,
      rectangleDivLeft,
    ]);

    return (
      <div
        className="rounded-lg shadow-[12px_10px_17px_rgba(0,_0,_0,_0.25)] w-[187.03px] h-[196.27px] overflow-hidden text-left text-xl text-white font-poppins"
        style={rectangleDiv1Style}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={dimensions}
        />
        <b className="absolute top-[82.06%] left-[6.29%]">Jaipur</b>
      </div>
    );
  }
);

export default RectangleComponent1;
