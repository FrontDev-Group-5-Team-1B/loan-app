import create from "zustand";

const useBorrowersDataStore = create((set) => ({
  formData: {
    fullname: "",
    email: "",
    address: "",
    employmentType: "",
    phoneNumber: "",
    age: "",
    nationalIdentityNumber: "",
    incomePerMonth: "",
    loanType: "",
    repaymentType: "",
    purposeOfLoan: "",
    collateralType: "",
    collateralValue: "",
    collateralInformation: "",
    loanAmount: "",
    gender: "",
    maritalStatus: "",
    jobRole: "",
    jobSector: "",

    guarantor: {
      fullname: "",
      phoneNumber: "",
      email: "",
      age: "",
      address: "",
      socialSecurityNumber: "",
      relationship: "",
      employmentType: "",
      incomePerMonth: "",
      otherSourcesOfIncome: "",
    },
  },
  setFormData: (data) => set({ formData: data }),
}));

export default useBorrowersDataStore;
