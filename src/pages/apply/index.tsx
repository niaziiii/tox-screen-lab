import React, { useState } from "react";
import AppInput from "../../common/Input";
import ApplicationModel from "../../models/application";

const Apply = () => {
  const [formData, setFormData] = useState(new ApplicationModel());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: ApplicationModel) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className=" max-w-screen-sm   mx-auto mt-24 mb-40 flex flex-col gap-28 ">
      <h1 className="text-center md:w-8/12 mx-auto text-darkBlue text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
        Apply Form
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-28">
        <section className="">
          <h1 className="text-left text-dark text-2xl font-bold ">
            Personal Information
          </h1>
          <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-[10%] gap-y-10">
            <AppInput
              type="text"
              title="First Name"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <AppInput
              type="text"
              title="Last Name"
              placeholder="Enter your last name"
              value={formData.lastName}
              name="lastName"
              onChange={handleChange}
            />
            <AppInput
              type="text"
              title="Phone Number"
              placeholder="Enter your phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <AppInput
              type="email"
              title="Email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <AppInput
              type="date"
              title="Date of birth"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
        </section>

        <section className="">
          <h1 className="text-left text-dark text-2xl font-bold ">Education</h1>
          <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-[10%] gap-y-10">
            <div className="w-full col-span-2">
              <AppInput
                type="text"
                title="Degree/Certificate"
                name="degree"
                placeholder="Enter your field"
                value={formData.education.degree}
                onChange={handleChange}
              />
            </div>
            <div className="w-full col-span-2">
              <AppInput
                type="text"
                title="University"
                className="w-full col-span-2"
                placeholder="Enter name of your university "
                value={formData.education.university}
                name="university"
                onChange={handleChange}
              />
            </div>

            <AppInput
              type="date"
              title="Start Date"
              name="startDate"
              value={formData.education.startDate}
              onChange={handleChange}
            />
            <AppInput
              type="date"
              title="End Date"
              name="endDate"
              value={formData.education.endDate}
              onChange={handleChange}
            />
          </div>
        </section>

        <button
          type="submit"
          className="bg-transparent px-24 py-5 border-[1px] border-lightBlue rounded-xl !text-lightBlue  mx-auto hover:bg-transparent hover:!text-lightBlue/70 "
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default Apply;
