export interface FormProps {
  formData: IFormData | any;
  handleFormData: any;
}

export interface IFormData {
  basic: {
    date: string;
    accountRep: string;
    contactName: string;
    emailPhone: string;
    projectStartDate: string;
  };
  accountInfo: {
    accountName: string;
    officeHour: string;
    address: string;
    phone: string;
    fax: string;
  };
  officeContactInfo: {
    jobTitle: string;
    phone: string;
    name: string;
  };
  physicianInformation: {
    NPI: string;
    name: string;
  };
  accountPreference: {
    pickUp: string;
    dropBoxLocation: string;
    pickUpSpecialInstructions: string;
    reportDelivery: string;
    afterHoursPhone: string;
  };
  billingInfo: {
    select: string;
    dropBoxLocation: string;
  };
  physicianAuthorization: {
    physiciansSignature: string;
    date: string;
    witness: string;
    date2: string;
    DiscontinueLaboratoryServicesPolicy: boolean;
  };
  sigAttestation: {
    name: string;
    date: string;
    date2: string;
    sigMyOwn: string;
    doctorSignature: string;
    officeLocation: string;
  };
}
