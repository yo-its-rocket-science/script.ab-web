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
import { Company } from "../models";
/**
 * CompanyApi - axios parameter creator
 * @export
 */
export const CompanyApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary add company
     * @param {Company} body Updated user object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addCompany: async (
      body: Company,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          "body",
          "Required parameter body was null or undefined when calling addCompany."
        );
      }
      const localVarPath = `/company`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, "https://example.com");
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "*/*";

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
      const needsSerialization =
        typeof body !== "string" ||
        localVarRequestOptions.headers["Content-Type"] === "application/json";
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(body !== undefined ? body : {})
        : body || "";

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {number} id id of Company.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCompany: async (
      id: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          "id",
          "Required parameter id was null or undefined when calling deleteCompany."
        );
      }
      const localVarPath = `/company/{id}`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, "https://example.com");
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {
        method: "DELETE",
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
    /**
     *
     * @summary Get candidate by id
     * @param {number} id The id that needs to be fetched.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCompanyById: async (
      id: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          "id",
          "Required parameter id was null or undefined when calling getCompanyById."
        );
      }
      const localVarPath = `/company/{id}`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
      );
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
    /**
     *
     * @param {Company} body Updated Company object
     * @param {number} id id of Company.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putCompany: async (
      body: Company,
      id: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          "body",
          "Required parameter body was null or undefined when calling putCompany."
        );
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          "id",
          "Required parameter id was null or undefined when calling putCompany."
        );
      }
      const localVarPath = `/company/{id}`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, "https://example.com");
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {
        method: "PUT",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "*/*";

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
      const needsSerialization =
        typeof body !== "string" ||
        localVarRequestOptions.headers["Content-Type"] === "application/json";
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(body !== undefined ? body : {})
        : body || "";

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * CompanyApi - functional programming interface
 * @export
 */
export const CompanyApiFp = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary add company
     * @param {Company} body Updated user object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async addCompany(
      body: Company,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await CompanyApiAxiosParamCreator(
        configuration
      ).addCompany(body, options);
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
    /**
     *
     * @param {number} id id of Company.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteCompany(
      id: number,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await CompanyApiAxiosParamCreator(
        configuration
      ).deleteCompany(id, options);
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
    /**
     *
     * @summary Get candidate by id
     * @param {number} id The id that needs to be fetched.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCompanyById(
      id: number,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Company>
    > {
      const localVarAxiosArgs = await CompanyApiAxiosParamCreator(
        configuration
      ).getCompanyById(id, options);
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
    /**
     *
     * @param {Company} body Updated Company object
     * @param {number} id id of Company.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async putCompany(
      body: Company,
      id: number,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await CompanyApiAxiosParamCreator(
        configuration
      ).putCompany(body, id, options);
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
 * CompanyApi - factory interface
 * @export
 */
export const CompanyApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary add company
     * @param {Company} body Updated user object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addCompany(body: Company, options?: any): AxiosPromise<void> {
      return CompanyApiFp(configuration)
        .addCompany(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {number} id id of Company.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCompany(id: number, options?: any): AxiosPromise<void> {
      return CompanyApiFp(configuration)
        .deleteCompany(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get candidate by id
     * @param {number} id The id that needs to be fetched.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCompanyById(id: number, options?: any): AxiosPromise<Company> {
      return CompanyApiFp(configuration)
        .getCompanyById(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {Company} body Updated Company object
     * @param {number} id id of Company.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putCompany(body: Company, id: number, options?: any): AxiosPromise<void> {
      return CompanyApiFp(configuration)
        .putCompany(body, id, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * CompanyApi - object-oriented interface
 * @export
 * @class CompanyApi
 * @extends {BaseAPI}
 */
export class CompanyApi extends BaseAPI {
  /**
   *
   * @summary add company
   * @param {Company} body Updated user object
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CompanyApi
   */
  public addCompany(body: Company, options?: any) {
    return CompanyApiFp(this.configuration)
      .addCompany(body, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   *
   * @param {number} id id of Company.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CompanyApi
   */
  public deleteCompany(id: number, options?: any) {
    return CompanyApiFp(this.configuration)
      .deleteCompany(id, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   *
   * @summary Get candidate by id
   * @param {number} id The id that needs to be fetched.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CompanyApi
   */
  public getCompanyById(id: number, options?: any) {
    return CompanyApiFp(this.configuration)
      .getCompanyById(id, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   *
   * @param {Company} body Updated Company object
   * @param {number} id id of Company.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CompanyApi
   */
  public putCompany(body: Company, id: number, options?: any) {
    return CompanyApiFp(this.configuration)
      .putCompany(body, id, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
