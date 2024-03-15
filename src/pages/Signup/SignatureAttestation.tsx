import AppInput from "../../common/Input";
import { FormProps } from "./utils";

export default function SignatureAttestation({
  formData,
  handleFormData,
}: FormProps) {
  const handleSignatureAttestation = (e: any, key: string) => {
    const value = e.target.value;

    const state = {
      ...formData,
      sigAttestation: {
        ...formData.sigAttestation,
        [key]: value,
      },
    };
    handleFormData(state);
  };

  return (
    <div className="mt-12">
      <h3 className="font-semibold text-2xl">Signature Attestation</h3>
      <div className="p-4 mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-[10%] gap-y-10">
        <AppInput
          title="Name"
          type="text"
          value={formData?.sigAttestation?.Name}
          onChange={(e) => handleSignatureAttestation(e, "Name")}
        />
        <AppInput
          title="Date"
          type="date"
          value={formData?.sigAttestation?.date}
          onChange={(e) => handleSignatureAttestation(e, "date")}
        />
        <div className="md:col-span-3">
          <input
            checked={formData?.sigAttestation?.sigMyOwn}
            type="checkbox"
            id="dasd"
            className="scale-150 rounded-lg"
            onChange={() => {
              handleSignatureAttestation(
                {
                  target: {
                    value: !formData?.sigAttestation?.sigMyOwn,
                  },
                },
                "sigMyOwn"
              );
            }}
          />
          <label htmlFor="dasd" className="ml-3">
            I attest that the below signature is indeed my own.
          </label>
        </div>
        <div className="md:col-span-3">
          <AppInput
            title="Office Location"
            type="text"
            value={formData?.sigAttestation?.officeLocation}
            onChange={(e) => handleSignatureAttestation(e, "officeLocation")}
          />{" "}
        </div>
        <AppInput
          title="Doctor Signature"
          type="text"
          value={formData?.sigAttestation?.doctorSignature}
          onChange={(e) => handleSignatureAttestation(e, "doctorSignature")}
        />
        <AppInput
          title="Date"
          type="date"
          value={formData?.sigAttestation?.date2}
          onChange={(e) => handleSignatureAttestation(e, "date2")}
        />
      </div>
    </div>
  );
}
