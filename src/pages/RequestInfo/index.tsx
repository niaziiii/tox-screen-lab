import { useState } from "react";
import AppDropDown from "../../common/DropDown";
import AppHeading from "../../common/Heading";
import AppInput from "../../common/Input";
import AppButton from "../../common/Button";

export default function RequestInfo() {
  const [option, setOption] = useState(null);
  const [message, setMessage] = useState(undefined);

  const item = [
    { name: "Send Packing List", code: "SPL" },
    { name: "Paris", code: "PRS" },
  ];
  const handleSubmit = () => {
    const query = { option, message };
    console.log({ query });
  };
  return (
    <div className="w-full">
      <div className="w-[80%] md:w-[60%] mt-12 mx-auto">
        <AppHeading title="Request for information" />
        <div className="mt-10 w-full ">
          <AppDropDown
            title="Select a option"
            item={item}
            selectedItems={option}
            handleChangeDropDown={(value: any) => {
              setOption(value);
            }}
          />
          <br />
          <AppInput
            title="Write your message"
            type="textarea"
            className=""
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <div className="flex items-center justify-center my-12">
            <AppButton title="Submit" onChange={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
