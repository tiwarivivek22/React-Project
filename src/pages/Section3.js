import JaipurCard from "../components/JaipurCard";
import CardContainer from "../components/CardContainer";

const Section3 = () => {
  return (
    <div className="relative w-full flex flex-col items-start justify-start text-left text-29xl text-primary font-poppins">
      <div className="relative bg-sandybrown w-[1543px] h-[1126px] overflow-hidden shrink-0">
        <div className="absolute top-[44px] left-[calc(50%_-_447.5px)] flex flex-col items-center justify-start gap-[19px]">
          <b className="relative">Explore Top Destinations by Region</b>
          <div className="relative box-border w-[867px] h-[7px] border-t-[7px] border-solid border-secondary" />
        </div>
        <JaipurCard />
        <div className="absolute top-[571px] left-[423px] w-[649px] h-[86px]">
          <b className="absolute top-[0px] left-[0px]">
            Top Trending Destinations
          </b>
          <img
            className="absolute top-[80px] left-[5.98px] w-[643.03px] h-[9.5px]"
            alt=""
            src="/line-5.svg"
          />
        </div>
        <div className="absolute top-[702px] left-[calc(50%_-_599.5px)] flex flex-row items-start justify-start gap-[30px]">
          <CardContainer imageDimensions="/rectangle-14@2x.png" />
          <CardContainer imageDimensions="/rectangle-141@2x.png" />
          <CardContainer imageDimensions="/rectangle-142@2x.png" />
          <CardContainer imageDimensions="/rectangle-143@2x.png" />
          <CardContainer imageDimensions="/rectangle-144@2x.png" />
        </div>
        <div className="absolute top-[808px] left-[86px] flex flex-row items-start justify-start [transform:_rotate(180deg)] [transform-origin:0_0]">
          <div className="absolute my-0 mx-[!important] top-[0px] left-[0px] w-[39px] h-[39px] z-[0]">
            <div className="absolute top-[0px] left-[0px] rounded-19xl bg-secondary w-[39px] h-[39px]" />
            <img
              className="absolute top-[7px] left-[-36px] w-[33px] h-[25px] object-cover"
              alt=""
              src="/chevron-right@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[808px] left-[1435px] w-[39px] h-[39px] flex flex-row items-start justify-start">
          <div className="absolute my-0 mx-[!important] top-[0px] left-[0px] w-[39px] h-[39px] z-[0]">
            <div className="absolute top-[0px] left-[0px] rounded-19xl bg-secondary w-[39px] h-[39px]" />
            <img
              className="absolute top-[7px] left-[3px] w-[33px] h-[25px] object-cover"
              alt=""
              src="/chevron-right1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
