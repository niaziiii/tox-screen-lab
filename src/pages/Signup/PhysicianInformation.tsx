import AppInput from "../../common/Input";
import { FormProps } from "./utils";

export default function PhysicianInformation({
  formData,
  handleFormData,
}: FormProps) {
  const handlePhysicianInformation = (e: any, key: string) => {
    const value = e.target.value as string;
    const state = {
      ...formData,
      physicianInformation: {
        ...formData.physicianInformation,
        [key]: value,
      },
    };
    handleFormData(state);
  };

  return (
    <div className=" mt-12">
      <h3 className="font-semibold text-2xl">Physician Information</h3>
      <div className="p-4 mt-8 grid grid-cols-1 gap-x-[10%] gap-y-10">
        <AppInput
          title="Name (M.D., D.O., CRNP)"
          type="text"
          value={formData?.physicianInformation?.name}
          onChange={(e) => handlePhysicianInformation(e, "name")}
        />
        <AppInput
          title="NPI"
          type="text"
          value={formData?.physicianInformation?.NPI}
          onChange={(e) => handlePhysicianInformation(e, "NPI")}
        />
      </div>
    </div>
  );
}
