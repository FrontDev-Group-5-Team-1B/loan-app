import create from "zustand";

const useSidebarStore = create((set) => ({
  sidebarVisible: false,
  toggleSidebar: () =>
    set((state) => ({ sidebarVisible: !state.sidebarVisible })),
}));

export default useSidebarStore;
