import create from "zustand";

const useProfileImageStore = create((set) => ({
  profileImageUrl: null,
  setProfileImageUrl: (url) => set({ profileImageUrl: url }),
}));

export default useProfileImageStore;
