import AppInput from "../../common/Input";
import AppSelectAble from "../../common/SelectAble";
import { FormProps } from "./utils";

export default function BillingInformation({
  formData,
  handleFormData,
}: FormProps) {
  const handleBillingInfo = (e: any, key: string) => {
    const value = e.target.value as string;
    const state = {
      ...formData,
      billingInfo: {
        ...formData.billingInfo,
        [key]: value,
      },
    };
    handleFormData(state);
  };

  return (
    <div className="mt-12">
      <h3 className="font-semibold text-2xl">Billing Information</h3>
      <div className="p-4 mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-[10%] gap-y-10">
        <div className="md:col-span-3">
          <AppSelectAble
            title="Select"
            value={formData?.billingInfo?.select}
            items={[
              "Commercial Insurance (%)",
              "Client Bill",
              "Workers Comp",
              "Medicare / Medicaid",
            ]}
            handlerSelected={(value: string) => {
              handleBillingInfo({ target: { value: value } }, "select");
            }}
          />
        </div>
        <AppInput
          title="Estimated Monthly Volume"
          type="text"
          value={formData?.billingInfo?.estimatedMonthlyVolume}
          onChange={(e) => handleBillingInfo(e, "dropBoxLocation")}
        />
      </div>
    </div>
  );
}
