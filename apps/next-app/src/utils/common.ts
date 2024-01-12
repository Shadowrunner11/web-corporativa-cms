export const withLogger = (cb: Function) => async (...args: any[])=>{
  const data = await cb(args);

  // eslint-disable-next-line no-console
  console.log(data)

  return data;
}


