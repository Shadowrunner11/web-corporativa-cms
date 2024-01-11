export class RequiredEnvError extends Error{
  constructor(fullEnvName: string){
    super(`${fullEnvName} is required, check your .env* files or your environment`)
  }
}