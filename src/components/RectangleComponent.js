import { memo, useMemo } from "react";

const RectangleComponent = memo(
  ({
    dimensions,
    rectangleDivWidth,
    rectangleDivHeight,
    rectangleDivPosition,
    rectangleDivTop,
    rectangleDivLeft,
  }) => {
    const rectangleDivStyle = useMemo(() => {
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
        className="rounded-36xl shadow-[12px_10px_15px_rgba(0,_0,_0,_0.25)] w-[187.95px] h-[194.33px] text-left text-xl text-white font-poppins"
        style={rectangleDivStyle}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-smi bg-gainsboro" />
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={dimensions}
        />
        <b className="absolute top-[84.46%] left-[5.2%]">Amritsar</b>
      </div>
    );
  }
);

export default RectangleComponent;
