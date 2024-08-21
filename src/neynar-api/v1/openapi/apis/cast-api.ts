/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
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
import { AllCastsInThreadResponse } from '../models';
// @ts-ignore
import { CastResponse } from '../models';
// @ts-ignore
import { CastsResponse } from '../models';
// @ts-ignore
import { ErrorRes } from '../models';
// @ts-ignore
import { RecentCastsResponse } from '../models';
/**
 * CastApi - axios parameter creator
 * @export
 */
export const CastApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Now deprecated, use [v2/cast/conversation](https://docs.neynar.com/reference/cast-conversation). Gets all casts, including root cast and all replies for a given thread hash. No limit the depth of replies.
         * @summary DEPRECATED - Retrieve all casts in a given thread hash
         * @param {string} apiKey API key required for authentication.
         * @param {string} threadHash The hash of the thread to retrieve casts from.
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        allCastsInThread: async (apiKey: string, threadHash: string, viewerFid?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('allCastsInThread', 'apiKey', apiKey)
            // verify required parameter 'threadHash' is not null or undefined
            assertParamExists('allCastsInThread', 'threadHash', threadHash)
            const localVarPath = `/farcaster/all-casts-in-thread`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (threadHash !== undefined) {
                localVarQueryParameter['threadHash'] = threadHash;
            }

            if (viewerFid !== undefined) {
                localVarQueryParameter['viewerFid'] = viewerFid;
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
         * Now deprecated, use [v2/cast](https://docs.neynar.com/reference/cast). Gets information about an individual cast
         * @summary DEPRECATED - Retrieve cast for a given hash
         * @param {string} apiKey API key required for authentication.
         * @param {string} hash Cast hash
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        cast: async (apiKey: string, hash: string, viewerFid?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('cast', 'apiKey', apiKey)
            // verify required parameter 'hash' is not null or undefined
            assertParamExists('cast', 'hash', hash)
            const localVarPath = `/farcaster/cast`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (hash !== undefined) {
                localVarQueryParameter['hash'] = hash;
            }

            if (viewerFid !== undefined) {
                localVarQueryParameter['viewerFid'] = viewerFid;
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
         * Now deprecated, use [/v2/farcaster/feed/user/casts](https://docs.neynar.com/reference/feed-user-casts) instead
         * @summary DEPRECATED - Retrieve casts for a given user
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid fid of a user
         * @param {string} [parentUrl] A cast can be part of a certain channel. The channel is identified by &#x60;parent_url&#x60;. All casts in the channel ladder up to the same parent_url.
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {number} [limit] Number of results to retrieve (default 25, max 150)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        casts: async (apiKey: string, fid: number, parentUrl?: string, viewerFid?: number, limit?: number, cursor?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('casts', 'apiKey', apiKey)
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('casts', 'fid', fid)
            const localVarPath = `/farcaster/casts`;
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

            if (parentUrl !== undefined) {
                localVarQueryParameter['parent_url'] = parentUrl;
            }

            if (viewerFid !== undefined) {
                localVarQueryParameter['viewerFid'] = viewerFid;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
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
         * Get a list of casts from the protocol in reverse chronological order based on timestamp
         * @summary Get Recent Casts
         * @param {string} apiKey API key required for authentication.
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {number} [limit] Number of results to retrieve (default 25, max 100)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recentCasts: async (apiKey: string, viewerFid?: number, limit?: number, cursor?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('recentCasts', 'apiKey', apiKey)
            const localVarPath = `/farcaster/recent-casts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (viewerFid !== undefined) {
                localVarQueryParameter['viewerFid'] = viewerFid;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
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
 * CastApi - functional programming interface
 * @export
 */
export const CastApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CastApiAxiosParamCreator(configuration)
    return {
        /**
         * Now deprecated, use [v2/cast/conversation](https://docs.neynar.com/reference/cast-conversation). Gets all casts, including root cast and all replies for a given thread hash. No limit the depth of replies.
         * @summary DEPRECATED - Retrieve all casts in a given thread hash
         * @param {string} apiKey API key required for authentication.
         * @param {string} threadHash The hash of the thread to retrieve casts from.
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async allCastsInThread(apiKey: string, threadHash: string, viewerFid?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AllCastsInThreadResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.allCastsInThread(apiKey, threadHash, viewerFid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Now deprecated, use [v2/cast](https://docs.neynar.com/reference/cast). Gets information about an individual cast
         * @summary DEPRECATED - Retrieve cast for a given hash
         * @param {string} apiKey API key required for authentication.
         * @param {string} hash Cast hash
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async cast(apiKey: string, hash: string, viewerFid?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CastResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cast(apiKey, hash, viewerFid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Now deprecated, use [/v2/farcaster/feed/user/casts](https://docs.neynar.com/reference/feed-user-casts) instead
         * @summary DEPRECATED - Retrieve casts for a given user
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid fid of a user
         * @param {string} [parentUrl] A cast can be part of a certain channel. The channel is identified by &#x60;parent_url&#x60;. All casts in the channel ladder up to the same parent_url.
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {number} [limit] Number of results to retrieve (default 25, max 150)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async casts(apiKey: string, fid: number, parentUrl?: string, viewerFid?: number, limit?: number, cursor?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CastsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.casts(apiKey, fid, parentUrl, viewerFid, limit, cursor, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of casts from the protocol in reverse chronological order based on timestamp
         * @summary Get Recent Casts
         * @param {string} apiKey API key required for authentication.
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {number} [limit] Number of results to retrieve (default 25, max 100)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async recentCasts(apiKey: string, viewerFid?: number, limit?: number, cursor?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecentCastsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.recentCasts(apiKey, viewerFid, limit, cursor, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CastApi - factory interface
 * @export
 */
export const CastApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CastApiFp(configuration)
    return {
        /**
         * Now deprecated, use [v2/cast/conversation](https://docs.neynar.com/reference/cast-conversation). Gets all casts, including root cast and all replies for a given thread hash. No limit the depth of replies.
         * @summary DEPRECATED - Retrieve all casts in a given thread hash
         * @param {string} apiKey API key required for authentication.
         * @param {string} threadHash The hash of the thread to retrieve casts from.
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        allCastsInThread(apiKey: string, threadHash: string, viewerFid?: number, options?: any): AxiosPromise<AllCastsInThreadResponse> {
            return localVarFp.allCastsInThread(apiKey, threadHash, viewerFid, options).then((request) => request(axios, basePath));
        },
        /**
         * Now deprecated, use [v2/cast](https://docs.neynar.com/reference/cast). Gets information about an individual cast
         * @summary DEPRECATED - Retrieve cast for a given hash
         * @param {string} apiKey API key required for authentication.
         * @param {string} hash Cast hash
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        cast(apiKey: string, hash: string, viewerFid?: number, options?: any): AxiosPromise<CastResponse> {
            return localVarFp.cast(apiKey, hash, viewerFid, options).then((request) => request(axios, basePath));
        },
        /**
         * Now deprecated, use [/v2/farcaster/feed/user/casts](https://docs.neynar.com/reference/feed-user-casts) instead
         * @summary DEPRECATED - Retrieve casts for a given user
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid fid of a user
         * @param {string} [parentUrl] A cast can be part of a certain channel. The channel is identified by &#x60;parent_url&#x60;. All casts in the channel ladder up to the same parent_url.
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {number} [limit] Number of results to retrieve (default 25, max 150)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        casts(apiKey: string, fid: number, parentUrl?: string, viewerFid?: number, limit?: number, cursor?: string, options?: any): AxiosPromise<CastsResponse> {
            return localVarFp.casts(apiKey, fid, parentUrl, viewerFid, limit, cursor, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of casts from the protocol in reverse chronological order based on timestamp
         * @summary Get Recent Casts
         * @param {string} apiKey API key required for authentication.
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {number} [limit] Number of results to retrieve (default 25, max 100)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recentCasts(apiKey: string, viewerFid?: number, limit?: number, cursor?: string, options?: any): AxiosPromise<RecentCastsResponse> {
            return localVarFp.recentCasts(apiKey, viewerFid, limit, cursor, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CastApi - object-oriented interface
 * @export
 * @class CastApi
 * @extends {BaseAPI}
 */
export class CastApi extends BaseAPI {
    /**
     * Now deprecated, use [v2/cast/conversation](https://docs.neynar.com/reference/cast-conversation). Gets all casts, including root cast and all replies for a given thread hash. No limit the depth of replies.
     * @summary DEPRECATED - Retrieve all casts in a given thread hash
     * @param {string} apiKey API key required for authentication.
     * @param {string} threadHash The hash of the thread to retrieve casts from.
     * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof CastApi
     */
    public allCastsInThread(apiKey: string, threadHash: string, viewerFid?: number, options?: AxiosRequestConfig) {
        return CastApiFp(this.configuration).allCastsInThread(apiKey, threadHash, viewerFid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Now deprecated, use [v2/cast](https://docs.neynar.com/reference/cast). Gets information about an individual cast
     * @summary DEPRECATED - Retrieve cast for a given hash
     * @param {string} apiKey API key required for authentication.
     * @param {string} hash Cast hash
     * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof CastApi
     */
    public cast(apiKey: string, hash: string, viewerFid?: number, options?: AxiosRequestConfig) {
        return CastApiFp(this.configuration).cast(apiKey, hash, viewerFid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Now deprecated, use [/v2/farcaster/feed/user/casts](https://docs.neynar.com/reference/feed-user-casts) instead
     * @summary DEPRECATED - Retrieve casts for a given user
     * @param {string} apiKey API key required for authentication.
     * @param {number} fid fid of a user
     * @param {string} [parentUrl] A cast can be part of a certain channel. The channel is identified by &#x60;parent_url&#x60;. All casts in the channel ladder up to the same parent_url.
     * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
     * @param {number} [limit] Number of results to retrieve (default 25, max 150)
     * @param {string} [cursor] Pagination cursor.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof CastApi
     */
    public casts(apiKey: string, fid: number, parentUrl?: string, viewerFid?: number, limit?: number, cursor?: string, options?: AxiosRequestConfig) {
        return CastApiFp(this.configuration).casts(apiKey, fid, parentUrl, viewerFid, limit, cursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of casts from the protocol in reverse chronological order based on timestamp
     * @summary Get Recent Casts
     * @param {string} apiKey API key required for authentication.
     * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
     * @param {number} [limit] Number of results to retrieve (default 25, max 100)
     * @param {string} [cursor] Pagination cursor.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CastApi
     */
    public recentCasts(apiKey: string, viewerFid?: number, limit?: number, cursor?: string, options?: AxiosRequestConfig) {
        return CastApiFp(this.configuration).recentCasts(apiKey, viewerFid, limit, cursor, options).then((request) => request(this.axios, this.basePath));
    }
}
