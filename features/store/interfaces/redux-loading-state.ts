export type IReduxLoading<HttpActions extends string = string> = {
  loading: Record<HttpActions, boolean>;
};
