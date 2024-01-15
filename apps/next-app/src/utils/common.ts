import { AtLeastOneFunctionsFlow, andThen, pipeWith } from "ramda";

export const withLogger = (cb: Function) => async (...args: any[])=>{
  const data = await cb(args);

  // eslint-disable-next-line no-console
  console.log(data)

  return data;
}


export const asyncPipe = <T = any, R = any>(...args: AtLeastOneFunctionsFlow<any[], unknown>)=>
  (data?: T)=>Promise.resolve(pipeWith(andThen)(args)(data)) as Promise<R>;