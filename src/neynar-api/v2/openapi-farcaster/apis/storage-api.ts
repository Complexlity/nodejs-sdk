/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorRes } from '../models';
// @ts-ignore
import { StorageAllocationsResponse } from '../models';
// @ts-ignore
import { StorageUsageResponse } from '../models';
/**
 * StorageApi - axios parameter creator
 * @export
 */
export const StorageApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Fetches storage allocations for a given user
         * @summary Fetches storage allocations for a given user
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storageAllocations: async (apiKey: string, fid: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('storageAllocations', 'apiKey', apiKey)
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('storageAllocations', 'fid', fid)
            const localVarPath = `/farcaster/storage/allocations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (fid !== undefined) {
                localVarQueryParameter['fid'] = fid;
            }

            if (apiKey != null) {
                localVarHeaderParameter['api_key'] = String(apiKey);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetches storage usage for a given user
         * @summary Fetches storage usage for a given user
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storageUsage: async (apiKey: string, fid: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('storageUsage', 'apiKey', apiKey)
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('storageUsage', 'fid', fid)
            const localVarPath = `/farcaster/storage/usage`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (fid !== undefined) {
                localVarQueryParameter['fid'] = fid;
            }

            if (apiKey != null) {
                localVarHeaderParameter['api_key'] = String(apiKey);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * StorageApi - functional programming interface
 * @export
 */
export const StorageApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = StorageApiAxiosParamCreator(configuration)
    return {
        /**
         * Fetches storage allocations for a given user
         * @summary Fetches storage allocations for a given user
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async storageAllocations(apiKey: string, fid: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StorageAllocationsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.storageAllocations(apiKey, fid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Fetches storage usage for a given user
         * @summary Fetches storage usage for a given user
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async storageUsage(apiKey: string, fid: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StorageUsageResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.storageUsage(apiKey, fid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * StorageApi - factory interface
 * @export
 */
export const StorageApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = StorageApiFp(configuration)
    return {
        /**
         * Fetches storage allocations for a given user
         * @summary Fetches storage allocations for a given user
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storageAllocations(apiKey: string, fid: number, options?: any): AxiosPromise<StorageAllocationsResponse> {
            return localVarFp.storageAllocations(apiKey, fid, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches storage usage for a given user
         * @summary Fetches storage usage for a given user
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storageUsage(apiKey: string, fid: number, options?: any): AxiosPromise<StorageUsageResponse> {
            return localVarFp.storageUsage(apiKey, fid, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * StorageApi - object-oriented interface
 * @export
 * @class StorageApi
 * @extends {BaseAPI}
 */
export class StorageApi extends BaseAPI {
    /**
     * Fetches storage allocations for a given user
     * @summary Fetches storage allocations for a given user
     * @param {string} apiKey API key required for authentication.
     * @param {number} fid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApi
     */
    public storageAllocations(apiKey: string, fid: number, options?: AxiosRequestConfig) {
        return StorageApiFp(this.configuration).storageAllocations(apiKey, fid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetches storage usage for a given user
     * @summary Fetches storage usage for a given user
     * @param {string} apiKey API key required for authentication.
     * @param {number} fid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApi
     */
    public storageUsage(apiKey: string, fid: number, options?: AxiosRequestConfig) {
        return StorageApiFp(this.configuration).storageUsage(apiKey, fid, options).then((request) => request(this.axios, this.basePath));
    }
}
