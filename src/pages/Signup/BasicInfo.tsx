import AppInput from "../../common/Input";
import { FormProps } from "./utils";

export default function BasicInfo({ formData, handleFormData }: FormProps) {
  const handleBasic = (e: any, key: string) => {
    const value = e.target.value as string;
    const state = {
      ...formData,
      basic: {
        ...formData.basic,
        [key]: value,
      },
    };
    handleFormData(state);
  };

  return (
    <div className="">
      <div className="p-4 mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-[10%] gap-y-10">
        <AppInput
          title="Date"
          type="date"
          value={formData?.basic?.date}
          onChange={(e) => handleBasic(e, "date")}
        />
        <AppInput
          title="Account Rep"
          type="text"
          value={formData?.basic?.accountRep}
          onChange={(e) => handleBasic(e, "accountRep")}
        />
        <AppInput
          title="Contact Name"
          type="text"
          value={formData?.basic?.contactName}
          onChange={(e) => handleBasic(e, "contactName")}
        />
        <AppInput
          title="Phone/Email"
          type="text"
          value={formData?.basic?.emailPhone}
          onChange={(e) => handleBasic(e, "emailPhone")}
        />
        <AppInput
          title="Project Start Date"
          type="date"
          value={formData?.basic?.projectStartDate}
          onChange={(e) => handleBasic(e, "projectStartDate")}
        />
      </div>
    </div>
  );
}
