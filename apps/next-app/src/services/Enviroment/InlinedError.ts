export class InlinedError extends Error{
  constructor(fullEnvName: string){
    super(`${fullEnvName} has NEXT_PUBLIC prefix which is
      inlined, and cannot be dynamically loaded, see 
      https://nextjs.org/docs/app/building-your-application/configuring/environment-variables#bundling-environment-variables-for-the-browser
      for more information
    `)
  }
}