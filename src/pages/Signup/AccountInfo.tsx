import AppInput from "../../common/Input";
import { FormProps } from "./utils";

export default function AccountInfo({ formData, handleFormData }: FormProps) {
  const handleAccountInfo = (e: any, key: string) => {
    const value = e.target.value as string;
    const state = {
      ...formData,
      accountInfo: {
        ...formData.accountInfo,
        [key]: value,
      },
    };
    handleFormData(state);
  };

  return (
    <div className=" mt-12">
      <h3 className="font-semibold text-2xl">Account Information</h3>
      <div className="p-4 mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-[10%] gap-y-10">
        <AppInput
          title="Account Name"
          type="text"
          value={formData?.accountInfo?.accountName}
          onChange={(e) => handleAccountInfo(e, "accountName")}
        />
        <AppInput
          title="Office Hour"
          type="text"
          value={formData?.accountInfo?.officeHour}
          onChange={(e) => handleAccountInfo(e, "officeHour")}
        />
        <div className="md:col-span-3	">
          <AppInput
            title="Address"
            type="address"
            value={formData?.accountInfo?.address}
            onChange={(e) => handleAccountInfo(e, "address")}
          />
        </div>
        <AppInput
          title="Phone"
          type="phone"
          value={formData?.accountInfo?.phone}
          onChange={(e) => handleAccountInfo(e, "phone")}
        />
        <AppInput
          title="Fax"
          type="fax"
          value={formData?.accountInfo?.fax}
          onChange={(e) => handleAccountInfo(e, "fax")}
        />
      </div>
    </div>
  );
}
