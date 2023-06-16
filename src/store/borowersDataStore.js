import create from "zustand";

const useBorrowersDataStore = create((set) => ({
  formData: {
    fullname: "",
    email: "",
    address: "",
    employmentType: "",
    phoneNumber: "",
    dateOfBirth: "",
    nationalIdentityNumber: "",
    incomePerMonth: "",
    loanType: "",
    repaymentType: "",
    purposeOfLoan: "",
    collateralType: "",
    collateralValue: "",
    collateralInformation: "",
    guarantor: {
      fullname: "",
      phoneNumber: "",
      email: "",
      dateOfBirth: "",
      address: "",
      socialSecurityNumber: "",
      relationship: "",
      employment: "",
      incomePerMonth: "",
      otherSourcesOfIncome: "",
    },
  },
  setFormData: (data) => set({ formData: data }),
}));

export default useBorrowersDataStore;
