import { Link } from "react-router-dom";
import AppInput from "../../common/Input";
import { FormProps } from "./utils";

export default function PhysicianAuthorization({
  formData,
  handleFormData,
}: FormProps) {
  const handlephysicianAuthorization = (e: any, key: string) => {
    const value = e.target.value;

    const state = {
      ...formData,
      physicianAuthorization: {
        ...formData.physicianAuthorization,
        [key]: value,
      },
    };
    handleFormData(state);
  };

  return (
    <div className="mt-12">
      <h3 className="font-semibold text-2xl">Physician Authorization</h3>
      <div className="p-4 mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-[10%] gap-y-10">
        <AppInput
          title="Physicians Signature"
          type="text"
          value={formData?.physicianAuthorization?.physiciansSignature}
          onChange={(e) =>
            handlephysicianAuthorization(e, "physiciansSignature")
          }
        />
        <AppInput
          title="Date"
          type="date"
          value={formData?.physicianAuthorization?.date}
          onChange={(e) => handlephysicianAuthorization(e, "date")}
        />

        <AppInput
          title="Witness"
          type="text"
          value={formData?.physicianAuthorization?.witness}
          onChange={(e) => handlephysicianAuthorization(e, "witness")}
        />
        <AppInput
          title="Date"
          type="date"
          value={formData?.physicianAuthorization?.date2}
          onChange={(e) => handlephysicianAuthorization(e, "date2")}
        />
        <div className="md:col-span-3">
          <input
            checked={
              formData?.physicianAuthorization
                ?.DiscontinueLaboratoryServicesPolicy
            }
            type="checkbox"
            id="cd"
            className="scale-150 rounded-lg"
            onChange={() => {
              handlephysicianAuthorization(
                {
                  target: {
                    value:
                      !formData?.physicianAuthorization
                        ?.DiscontinueLaboratoryServicesPolicy,
                  },
                },
                "DiscontinueLaboratoryServicesPolicy"
              );
            }}
          />
          <label htmlFor="cd" className="ml-3">
            Please agree to our
            <Link className="text-lightBlue ml-1" to={"/"}>
              Discontinue Laboratory Services Policy.
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
}
