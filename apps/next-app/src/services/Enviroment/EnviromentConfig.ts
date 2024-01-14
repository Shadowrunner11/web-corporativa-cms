import { Options } from "./types";
import { InlinedError } from "./InlinedError";
import { RequiredEnvError } from "./RequiredEnvError";

export class EnvironmentConfig{
  constructor(private initialOptions: Options = {}){}

  // TODO: evaluate to have a Env class
  static createError = (errorName: string, fullEnvName: string )=>{
    switch(errorName){
      case 'inline':
        throw new InlinedError(fullEnvName)
      case 'required':
        throw new RequiredEnvError(fullEnvName)
    }
  }

  private mergeOptions(newOptions: Options){
    return {
      ...this.initialOptions,
      ...newOptions
    }
  }

  // TODO: Evaluate if possible to have envs typed
  getEnv(envName: string, options: Options = {}){
    const { isRequired, prefix = '', defaultValue } = this.mergeOptions(options);

    const fullEnvName = prefix + envName;

    if(fullEnvName.includes('NEXT_PUBLIC'))
      EnvironmentConfig.createError('inline', fullEnvName)

    const envValue = process.env[fullEnvName]

    if(isRequired && !envValue)
      EnvironmentConfig.createError('required', fullEnvName)

    return envValue ?? defaultValue?.toString();
  }

  getEnvOrThrow(envName: string, options: Options = {}){
    options.isRequired = true;

    return this.getEnv(envName, options) as string;
  }
  
}