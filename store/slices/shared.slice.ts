import { axios } from "@/config";
import { trycatch } from "@/utils";
import { StateCreator } from "zustand";

export const useSharedSlice: StateCreator<SharedStore, [], [], SharedStore> = (
  set
) => ({
  statuses: [],
  districts: [],
  propertyTypes: [],
  // setStatuses: (statuses) => set((state) => ({ statuses })),
  // setPropertyTypes: (propertyTypes) => set((state) => ({ propertyTypes })),
  // setDistricts: (districts) => set((state) => ({ districts })),

  fetchStatuses: async () => {
    const propertyTypesPromise = axios.get(
      "http://52.1.94.100:8080/api/Lookup?entity=acquisitionTypes"
    );
    const statusesPromise = axios.get(
      "http://52.1.94.100:8080/api/Lookup?entity=status"
    );
    const districtsPromise = axios.get(
      "http://52.1.94.100:8080/api/Lookup?entity=districts"
    );

    const promises = Promise.all([
      propertyTypesPromise,
      statusesPromise,
      districtsPromise,
    ]);

    const [error, response] = await trycatch(promises);

    if (error) {
      // should use unexpectedToast hook
      // set unexpected error
      return;
    }

    const [{ data: propertyTypes }, { data: statuses }, { data: districts }] =
      response;

    set({ propertyTypes: propertyTypes.objectresponse });
    set({ statuses: statuses.objectresponse });
    set({ districts: districts.objectresponse });
  },
  // doLogout: async () => {
  // TokenService.clearStorage()
  //   set(() => initialState);
  //   history.push("/");
  // },
});
