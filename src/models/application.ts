// Define the types for education, job, and reference objects
interface Education {
  degree: string;
  university: string;
  startDate: string;
  endDate: string;
}

interface Job {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
}

interface Reference {
  position: string;
  startDate: string;
  endDate: string;
}

// Define the main form data class
class ApplicationModel {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dob: string;
  education: Education;
  job: Job;
  reference: Reference;

  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.phone = "";
    this.email = "";
    this.dob = "";
    this.education = {
      degree: "",
      university: "",
      startDate: "",
      endDate: "",
    };
    this.job = {
      position: "",
      company: "",
      startDate: "",
      endDate: "",
    };
    this.reference = {
      position: "",
      startDate: "",
      endDate: "",
    };
  }
}

export default ApplicationModel;
