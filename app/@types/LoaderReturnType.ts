//
export type LoaderReturnType<T extends (...args: any) => any = any> = Awaited<
  ReturnType<T>
>;
