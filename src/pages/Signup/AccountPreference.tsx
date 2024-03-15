import AppInput from "../../common/Input";
import AppSelectAble from "../../common/SelectAble";
import { FormProps } from "./utils";

export default function AccountPreference({
  formData,
  handleFormData,
}: FormProps) {
  const handleAccountPreference = (e: any, key: string) => {
    const value = e.target.value as string;
    const state = {
      ...formData,
      accountPreference: {
        ...formData.accountPreference,
        [key]: value,
      },
    };
    handleFormData(state);
  };

  return (
    <div className="mt-12">
      <h3 className="font-semibold text-2xl">Account Preference</h3>
      <div className="p-4 mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-[10%] gap-y-10">
        <div className="md:col-span-3">
          <AppSelectAble
            title="Pick-Up"
            note="If Daily (Specific Days)"
            value={formData?.accountPreference?.pickUp}
            items={["Will Call", "Daily", "FedEx", "Courier/FedEx", "12"]}
            handlerSelected={(value: string) => {
              handleAccountPreference({ target: { value: value } }, "pickUp");
            }}
          />
        </div>
        <AppInput
          title="Drop Box Location"
          type="text"
          value={formData?.accountPreference?.dropBoxLocation}
          onChange={(e) => handleAccountPreference(e, "dropBoxLocation")}
        />
        <AppInput
          title="Pick-Up Special Instructions"
          type="text"
          value={formData?.accountPreference?.pickUpSpecialInstructions}
          onChange={(e) =>
            handleAccountPreference(e, "pickUpSpecialInstructions")
          }
        />
        <div className="md:col-span-3">
          <AppSelectAble
            title="Report Delivery"
            value={formData?.accountPreference?.reportDelivery}
            items={["Fax", "Web", "Portal", "Hard Copy"]}
            handlerSelected={(value: string) => {
              handleAccountPreference(
                { target: { value: value } },
                "reportDelivery"
              );
            }}
          />
        </div>
        <AppInput
          title="After Hours Phone"
          type="phone"
          value={formData?.accountPreference?.afterHoursPhone}
          onChange={(e) => handleAccountPreference(e, "afterHoursPhone")}
        />
      </div>
    </div>
  );
}
