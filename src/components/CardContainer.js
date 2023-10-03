import { memo } from "react";

const CardContainer = memo(({ imageDimensions }) => {
  return (
    <div className="w-[216px] flex flex-row flex-wrap items-end justify-start gap-[11px] text-left text-base text-primary font-poppins">
      <div className="relative w-[216px] h-[211px] overflow-hidden shrink-0">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={imageDimensions}
        />
      </div>
      <img className="relative w-1 h-[22px]" alt="" src="/line-6.svg" />
      <div className="relative font-semibold">Anantha, Kerela</div>
      <div className="relative text-5xs font-semibold text-black">
        <p className="m-0">{`Anantha is a beautiful place `}</p>
        <p className="m-0">{`in Kerela `}</p>
      </div>
    </div>
  );
});

export default CardContainer;
