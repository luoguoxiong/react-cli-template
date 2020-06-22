export type SharksState = number;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const sharks = {
  state: 0,
  reducers: {
    increment: (state: SharksState, payload: number): SharksState =>
      state + payload,
  },
  effects: (dispatch: any) => ({
    async incrementAsync(payload: number = 1) {
      await delay(500);
      dispatch.sharks.increment(payload);
    },
  }),
};
