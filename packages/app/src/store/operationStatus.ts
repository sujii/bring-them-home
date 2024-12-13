import { defineStore } from "pinia";
import { api } from "../modules/AxiosManager";

export const useOperationStatusStore = defineStore("operationStatus", {
  state: () => ({
    currentStatus: {
      operationStatus: "",
      operationCourse: "",
      operationStartDate: "",
      financialAssetsAmount: 0,
      working: "",
      profilingAge: 0,
      restriction: ""
    }
  }),
  getters: {
    operationStatus: (state) =>
      state.currentStatus.operationStatus,
    operationCourse: (state) =>
      state.currentStatus.operationCourse,
    operationStartDate: (state) =>
      state.currentStatus.operationStartDate,
    financialAssetsAmount: (state) =>
      state.currentStatus.financialAssetsAmount,
    working: (state) =>
      state.currentStatus.working,
    profilingAge: (state) =>
      state.currentStatus.profilingAge,
    restriction: (state) =>
      state.currentStatus.restriction
  },
  actions: {
    async GetOperationStatus() {
      return await api
        .get("/v1/operation/status")
        .then((result) => {
          this.currentStatus.operationStatus = result.data.operation_status
          this.currentStatus.operationCourse = result.data.operation_course
          this.currentStatus.operationStartDate = result.data.operation_start_date
          this.currentStatus.financialAssetsAmount = result.data.financial_assets_amount
          this.currentStatus.working = result.data.working
          this.currentStatus.profilingAge = result.data.profiling_age
          this.currentStatus.restriction = result.data.restriction           
        });
    },
    async ChangeOperationCourse(courseName: string) {
      return await api
        .post("/v1/operation/course", {
          course: courseName
        })
    }
  },
});
