// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StringSchema } from "yup";

declare module "yup" {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType,
  > extends yup.BaseSchema<TType, TContext, TOut> {
    password(message: string): StringSchema<TType, TContext>;
    onlyNumber(message: string): StringSchema<TType, TContext>;
  }
}
