import { EnvironmentConfig } from "./EnviromentConfig"
import { Options } from "./types"

interface Pojo{
  [x: string]: any
}

export class CacheEnvironmentConfig{
  constructor(private client: EnvironmentConfig, private cacheClient:Pojo = {}){}
  getEnv(envName: string, options?: Options){
    const key = (options?.prefix ?? '') + envName
    const cachedValue = this.cacheClient[key]

    if(!cachedValue)
      this.cacheClient[key] = this.client.getEnv(envName, options)

    return this.cacheClient[key]
  }
}