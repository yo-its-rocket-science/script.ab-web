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
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { Job } from '../models';
/**
 * JobApi - axios parameter creator
 * @export
 */
export const JobApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This can only be done by the logged in job.
         * @summary Delete job
         * @param {number} id The job that needs to be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteJob: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteJob.');
            }
            const localVarPath = `/job/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary get job by id
         * @param {number} id id of job.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobById: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getJobById.');
            }
            const localVarPath = `/job/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary add job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jobPost: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/job`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {Job} body Updated job object
         * @param {number} id id of job.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putjob: async (body: Job, id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling putjob.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling putjob.');
            }
            const localVarPath = `/job/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = '*/*';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * JobApi - functional programming interface
 * @export
 */
export const JobApiFp = function(configuration?: Configuration) {
    return {
        /**
         * This can only be done by the logged in job.
         * @summary Delete job
         * @param {number} id The job that needs to be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteJob(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await JobApiAxiosParamCreator(configuration).deleteJob(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary get job by id
         * @param {number} id id of job.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getJobById(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Job>> {
            const localVarAxiosArgs = await JobApiAxiosParamCreator(configuration).getJobById(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary add job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async jobPost(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await JobApiAxiosParamCreator(configuration).jobPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {Job} body Updated job object
         * @param {number} id id of job.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putjob(body: Job, id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await JobApiAxiosParamCreator(configuration).putjob(body, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * JobApi - factory interface
 * @export
 */
export const JobApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * This can only be done by the logged in job.
         * @summary Delete job
         * @param {number} id The job that needs to be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteJob(id: number, options?: any): AxiosPromise<void> {
            return JobApiFp(configuration).deleteJob(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary get job by id
         * @param {number} id id of job.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobById(id: number, options?: any): AxiosPromise<Job> {
            return JobApiFp(configuration).getJobById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary add job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        jobPost(options?: any): AxiosPromise<void> {
            return JobApiFp(configuration).jobPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {Job} body Updated job object
         * @param {number} id id of job.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putjob(body: Job, id: number, options?: any): AxiosPromise<void> {
            return JobApiFp(configuration).putjob(body, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * JobApi - object-oriented interface
 * @export
 * @class JobApi
 * @extends {BaseAPI}
 */
export class JobApi extends BaseAPI {
    /**
     * This can only be done by the logged in job.
     * @summary Delete job
     * @param {number} id The job that needs to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobApi
     */
    public deleteJob(id: number, options?: any) {
        return JobApiFp(this.configuration).deleteJob(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary get job by id
     * @param {number} id id of job.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobApi
     */
    public getJobById(id: number, options?: any) {
        return JobApiFp(this.configuration).getJobById(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary add job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobApi
     */
    public jobPost(options?: any) {
        return JobApiFp(this.configuration).jobPost(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {Job} body Updated job object
     * @param {number} id id of job.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobApi
     */
    public putjob(body: Job, id: number, options?: any) {
        return JobApiFp(this.configuration).putjob(body, id, options).then((request) => request(this.axios, this.basePath));
    }
}
