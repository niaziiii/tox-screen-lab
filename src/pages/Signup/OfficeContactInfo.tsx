import AppInput from "../../common/Input";
import { FormProps } from "./utils";

export default function OfficeContactInfo({
  formData,
  handleFormData,
}: FormProps) {
  const handleOfficeContactInfo = (e: any, key: string) => {
    const value = e.target.value as string;
    const state = {
      ...formData,
      officeContactInfo: {
        ...formData.officeContactInfo,
        [key]: value,
      },
    };
    handleFormData(state);
  };

  return (
    <div className=" mt-12">
      <h3 className="font-semibold text-2xl">Office Contact Information</h3>
      <div className="p-4 mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-[10%] gap-y-10">
        <AppInput
          title="Name"
          type="text"
          value={formData?.officeContactInfo?.name}
          onChange={(e) => handleOfficeContactInfo(e, "name")}
        />
        <AppInput
          title="Phone"
          type="phone"
          value={formData?.officeContactInfo?.phone}
          onChange={(e) => handleOfficeContactInfo(e, "phone")}
        />
        <AppInput
          title="Job Title"
          type="text"
          value={formData?.officeContactInfo?.jobTitle}
          onChange={(e) => handleOfficeContactInfo(e, "jobTitle")}
        />
      </div>
    </div>
  );
}
