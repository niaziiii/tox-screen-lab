import AppHeading from "../../common/Heading";

export default function AboutUsCard({ data }: { data: any }) {
  return (
    <div className="w-full">
      {data.side == "right" ? (
        <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 gap-4 sm:gap-10">
          <div className="flex justify-center sm:justify-start items-center">
            <img
              src={data.img}
              alt={data.title}
              className=" rounded-lg h-[15rem]"
            />
          </div>
          <div className="flex flex-col h-full justify-center items-center gap-y-2 sm:gap-y-6">
            <div className="flex w-full">
              <AppHeading
                title={data.title}
                className="!text-xl md:!text-3xl"
              />
            </div>
            <p>{data.description}</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col h-full justify-center items-center gap-y-6">
            <div className="flex w-full">
              <AppHeading
                title={data.title}
                className="!text-xl md:!text-3xl"
              />
            </div>
            <p>{data.description}</p>
          </div>
          <div className="items-center flex justify-center sm:justify-end">
            <img
              src={data.img}
              alt={data.title}
              className=" rounded-lg h-[15rem]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
