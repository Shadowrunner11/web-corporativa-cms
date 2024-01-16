export const toggleReduce = (prev: boolean, action: any | boolean) => typeof action !== 'boolean' ? !prev: action;

// eslint-disable-next-line @typescript-eslint/ban-types
export const arrToArgs = <T =unknown>(cb:Function)=>(arr: T[])=>cb(...arr)