/* tslint:disable */
/* eslint-disable */
/**
 * ScriptAB
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from "axios";
import { Configuration } from "./configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "./base";
import { Skill } from "../models";
/**
 * SkillApi - axios parameter creator
 * @export
 */
export const SkillApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary get list of skills for company to select
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    skillGet: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/skill`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, "https://example.com");
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.query) {
        query.set(key, options.query[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * SkillApi - functional programming interface
 * @export
 */
export const SkillApiFp = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary get list of skills for company to select
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async skillGet(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Skill>>
    > {
      const localVarAxiosArgs = await SkillApiAxiosParamCreator(
        configuration
      ).skillGet(options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
  };
};

/**
 * SkillApi - factory interface
 * @export
 */
export const SkillApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary get list of skills for company to select
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    skillGet(options?: any): AxiosPromise<Array<Skill>> {
      return SkillApiFp(configuration)
        .skillGet(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * SkillApi - object-oriented interface
 * @export
 * @class SkillApi
 * @extends {BaseAPI}
 */
export class SkillApi extends BaseAPI {
  /**
   *
   * @summary get list of skills for company to select
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SkillApi
   */
  public skillGet(options?: any) {
    return SkillApiFp(this.configuration)
      .skillGet(options)
      .then((request) => request(this.axios, this.basePath));
  }
}