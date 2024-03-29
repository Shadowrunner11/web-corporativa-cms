import "reflect-metadata";
import { ErrorProxyCMS, LocalCMSProvider } from "@/services";
import { container } from "tsyringe";
import { ComponentResponse } from "@/types";
import defaultRequests from "../services/ContenfulCMSProvider/constants";
import data from '../../mock/data/navbar.json'
import { CMSResolver, ContentfulCMSProvider, GetOneRawResponse, SectionResponse } from "@/services/ContenfulCMSProvider";
import { RequestInit } from "@/services/FetchClient";
import { GraphQLClient } from "@/services/GraphQLCLient";
import { CacheEnvironmentConfig } from "@/services/Enviroment/CacheEnviromentConfig";
import { EnvironmentConfig } from "@/services/Enviroment/EnviromentConfig";

export const globalEnvService = new EnvironmentConfig();

export const globalCacheEnvService = new CacheEnvironmentConfig(globalEnvService);

container.registerInstance('DataTable', {pages: {
  staticData:{
    metadata:{
      name: 'pages'
    },
    response:{
      data
    }
  }
}})

container.registerInstance<RequestInit>('FetchOptions',{
  baseURL: globalCacheEnvService.getEnv('CMS_URL'),
  headers:{
    'Authorization': globalCacheEnvService.getEnv('CMS_TOKEN')
  },
  cache: globalCacheEnvService.getEnv('NO_CACHE') ?'no-cache' : undefined
})


container.registerInstance<CMSResolver>('Resolver', {
  getOneResolve(rawData: GetOneRawResponse): ComponentResponse<SectionResponse> {
    return {
      response:{
        data: rawData.data.section
      },
      metadata: {
        name: rawData.data.section.name
      }
    }
  }}
)

container.registerInstance('Request', defaultRequests)

const ProvidersMap: Record<string, any> = {
  'localProvider': LocalCMSProvider,
  'contentfulProvider': ContentfulCMSProvider
}


const currentProviderName = globalCacheEnvService.getEnv('NEXT_DATA_PROVIDER', {
  defaultValue: 'contentfulProvider'
})

container
  .registerSingleton(
    'CurrentCms', 
    ProvidersMap[currentProviderName]
  )
container
  .registerSingleton('FallbackCms', LocalCMSProvider)

export const dataProvider = container.resolve(ErrorProxyCMS)

export const graphqlClient = container.resolve(GraphQLClient)
