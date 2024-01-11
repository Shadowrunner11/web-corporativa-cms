import { EnvironmentConfig } from "./EnviromentConfig"
import { Options } from "./types"

interface Pojo{
  [x: string]: any
}

export class CacheEnvironmentConfig extends EnvironmentConfig{
  constructor(private cacheClient : Pojo = {}, options?: Options){
    super(options)
  }
  override getEnv(envName: string, options?: Options){
    const key = (options?.prefix ?? '') + envName
    const cachedValue = this.cacheClient[key]

    if(!cachedValue)
      this.cacheClient[key] = super.getEnv(envName, options)

    return this.cacheClient[key]
  }
}