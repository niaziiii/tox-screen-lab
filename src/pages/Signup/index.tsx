import { useState } from "react";
import AppHeading from "../../common/Heading";
import BasicInfo from "./BasicInfo";
import AccountInfo from "./AccountInfo";
import OfficeContactInfo from "./OfficeContactInfo";
import PhysicianInformation from "./PhysicianInformation";
import AccountPreference from "./AccountPreference";
import BillingInformation from "./BillingInformation";
import PhysicianAuthorization from "./PhysicianAuthorization";
import SignatureAttestation from "./SignatureAttestation";
import AppButton from "../../common/Button";
import { IFormData } from "./utils";

export default function Signup() {
  const [formData, setFormData] = useState<IFormData | {}>({});

  const handleFormData = (data: any) => {
    setFormData(data);
  };
  const handleSubmit = () => {
    console.log({ formData });
  };
  return (
    <div className="w-full h-full">
      <div className="mt-20 w-[85%] m-auto">
        <div className="lg:w-[80%] m-auto mb-20">
          <AppHeading title="Sign up" />
          <BasicInfo formData={formData} handleFormData={handleFormData} />
          <AccountInfo formData={formData} handleFormData={handleFormData} />
          <PhysicianInformation
            formData={formData}
            handleFormData={handleFormData}
          />
          <OfficeContactInfo
            formData={formData}
            handleFormData={handleFormData}
          />
          <AccountPreference
            formData={formData}
            handleFormData={handleFormData}
          />
          <BillingInformation
            formData={formData}
            handleFormData={handleFormData}
          />
          <PhysicianAuthorization
            formData={formData}
            handleFormData={handleFormData}
          />
          <SignatureAttestation
            formData={formData}
            handleFormData={handleFormData}
          />
          <div className="w-full flex items-center justify-center mt-12">
            <AppButton title="Submit" onChange={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
