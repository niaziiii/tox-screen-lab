import AppButton from "../../common/Button";

const Jobs = () => {
  return (
    <div className=" w-[85%]  mx-auto mt-24 mb-40 flex flex-col gap-28 ">
      <h1 className="text-center md:w-8/12 mx-auto text-darkBlue text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
        Welcome to the Tox- Screen Job Program
      </h1>
      <div className="grid lg:grid-cols-2 gap-10">
        <div className=" p-10 shadow-darkGray/60 shadow-2xl rounded-2xl flex flex-col gap-4">
          <h2 className="text-darkBlue text-xl sm:text-2xl font-bold">
            Top Performing Offers
          </h2>
          <p className="text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur eligendi unde modi libero in. Quia sint porro
            perspiciatis, doloribus perferendis natus, id, odio magni cum ipsam
            illum ad minima nam?
          </p>
        </div>
        <div className=" p-10 shadow-darkGray/60 shadow-2xl rounded-2xl flex flex-col gap-4">
          <h2 className="text-darkBlue text-xl sm:text-2xl font-bold">
            Top Performing Offers
          </h2>
          <p className="text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur eligendi unde modi libero in. Quia sint porro
            perspiciatis, doloribus perferendis natus, id, odio magni cum ipsam
            illum ad minima nam?
          </p>
        </div>
        <div className=" p-10 shadow-darkGray/60 shadow-2xl rounded-2xl flex flex-col gap-4">
          <h2 className="text-darkBlue text-xl sm:text-2xl font-bold">
            Top Performing Offers
          </h2>
          <p className="text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur eligendi unde modi libero in. Quia sint porro
            perspiciatis, doloribus perferendis natus, id, odio magni cum ipsam
            illum ad minima nam?
          </p>
        </div>{" "}
        <div className=" p-10 shadow-darkGray/60 shadow-2xl rounded-2xl flex flex-col gap-4">
          <h2 className="text-darkBlue text-xl sm:text-2xl font-bold">
            Top Performing Offers
          </h2>
          <p className="text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur eligendi unde modi libero in. Quia sint porro
            perspiciatis, doloribus perferendis natus, id, odio magni cum ipsam
            illum ad minima nam?
          </p>
        </div>{" "}
        <div className=" p-10 shadow-darkGray/60 shadow-2xl rounded-2xl flex flex-col gap-4">
          <h2 className="text-darkBlue text-xl sm:text-2xl font-bold">
            Top Performing Offers
          </h2>
          <p className="text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur eligendi unde modi libero in. Quia sint porro
            perspiciatis, doloribus perferendis natus, id, odio magni cum ipsam
            illum ad minima nam?
          </p>
        </div>
      </div>
      <AppButton
        title="Apply"
        className="bg-transparent font-bold !text-lightBlue  hover:bg-transparent  hover:!text-lightBlue/70 mx-auto"
        style={{ border: "2px solid #41BFDD", borderRadius: "15px" }}
      />
    </div>
  );
};

export default Jobs;
