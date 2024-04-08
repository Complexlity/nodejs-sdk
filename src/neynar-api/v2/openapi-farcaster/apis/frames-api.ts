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
import { Frame } from '../models';
// @ts-ignore
import { FrameActionReqBody } from '../models';
// @ts-ignore
import { FrameValidateAnalyticsResponse } from '../models';
// @ts-ignore
import { FrameValidateListResponse } from '../models';
// @ts-ignore
import { ValidateFrameActionResponse } from '../models';
// @ts-ignore
import { ValidateFrameAnalyticsType } from '../models';
// @ts-ignore
import { ValidateFrameRequest } from '../models';
/**
 * FramesApi - axios parameter creator
 * @export
 */
export const FramesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Post a frame action \\ (In order to post a frame action, you need to have an approved `signer_uuid`)  The POST request to the post_url has a timeout of 5 seconds. 
         * @summary Posts a frame action
         * @param {string} apiKey API key required for authentication.
         * @param {FrameActionReqBody} frameActionReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postFrameAction: async (apiKey: string, frameActionReqBody: FrameActionReqBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('postFrameAction', 'apiKey', apiKey)
            // verify required parameter 'frameActionReqBody' is not null or undefined
            assertParamExists('postFrameAction', 'frameActionReqBody', frameActionReqBody)
            const localVarPath = `/farcaster/frame/action`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (apiKey != null) {
                localVarHeaderParameter['api_key'] = String(apiKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(frameActionReqBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Validates a frame against by an interacting user against a Farcaster Hub \\ (In order to validate a frame, message bytes from Frame Action must be provided in hex) 
         * @summary Validates a frame action against Farcaster Hub
         * @param {string} apiKey API key required for authentication.
         * @param {ValidateFrameRequest} validateFrameRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateFrame: async (apiKey: string, validateFrameRequest: ValidateFrameRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('validateFrame', 'apiKey', apiKey)
            // verify required parameter 'validateFrameRequest' is not null or undefined
            assertParamExists('validateFrame', 'validateFrameRequest', validateFrameRequest)
            const localVarPath = `/farcaster/frame/validate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (apiKey != null) {
                localVarHeaderParameter['api_key'] = String(apiKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(validateFrameRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve analytics for total-interactors, interactors, nteractions-per-cast and input-text.
         * @summary Retrieve analytics for the frame
         * @param {string} apiKey API key required for authentication.
         * @param {string} frameUrl 
         * @param {ValidateFrameAnalyticsType} analyticsType 
         * @param {string} start 
         * @param {string} stop 
         * @param {'10s' | '1m' | '2m' | '20m' | '30m' | '2h' | '12h' | '1d' | '7d'} [aggregateWindow] Required for &#x60;analytics_type&#x3D;interactions-per-cast&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateFrameAnalytics: async (apiKey: string, frameUrl: string, analyticsType: ValidateFrameAnalyticsType, start: string, stop: string, aggregateWindow?: '10s' | '1m' | '2m' | '20m' | '30m' | '2h' | '12h' | '1d' | '7d', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('validateFrameAnalytics', 'apiKey', apiKey)
            // verify required parameter 'frameUrl' is not null or undefined
            assertParamExists('validateFrameAnalytics', 'frameUrl', frameUrl)
            // verify required parameter 'analyticsType' is not null or undefined
            assertParamExists('validateFrameAnalytics', 'analyticsType', analyticsType)
            // verify required parameter 'start' is not null or undefined
            assertParamExists('validateFrameAnalytics', 'start', start)
            // verify required parameter 'stop' is not null or undefined
            assertParamExists('validateFrameAnalytics', 'stop', stop)
            const localVarPath = `/farcaster/frame/validate/analytics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (frameUrl !== undefined) {
                localVarQueryParameter['frame_url'] = frameUrl;
            }

            if (analyticsType !== undefined) {
                localVarQueryParameter['analytics_type'] = analyticsType;
            }

            if (start !== undefined) {
                localVarQueryParameter['start'] = (start as any instanceof Date) ?
                    (start as any).toISOString() :
                    start;
            }

            if (stop !== undefined) {
                localVarQueryParameter['stop'] = (stop as any instanceof Date) ?
                    (stop as any).toISOString() :
                    stop;
            }

            if (aggregateWindow !== undefined) {
                localVarQueryParameter['aggregate_window'] = aggregateWindow;
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
         * Retrieve a list of all the frames validated by a user
         * @summary Retrieve a list of all the frames validated by a user
         * @param {string} apiKey API key required for authentication.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateFrameList: async (apiKey: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('validateFrameList', 'apiKey', apiKey)
            const localVarPath = `/farcaster/frame/validate/list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
 * FramesApi - functional programming interface
 * @export
 */
export const FramesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FramesApiAxiosParamCreator(configuration)
    return {
        /**
         * Post a frame action \\ (In order to post a frame action, you need to have an approved `signer_uuid`)  The POST request to the post_url has a timeout of 5 seconds. 
         * @summary Posts a frame action
         * @param {string} apiKey API key required for authentication.
         * @param {FrameActionReqBody} frameActionReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postFrameAction(apiKey: string, frameActionReqBody: FrameActionReqBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Frame>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postFrameAction(apiKey, frameActionReqBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Validates a frame against by an interacting user against a Farcaster Hub \\ (In order to validate a frame, message bytes from Frame Action must be provided in hex) 
         * @summary Validates a frame action against Farcaster Hub
         * @param {string} apiKey API key required for authentication.
         * @param {ValidateFrameRequest} validateFrameRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateFrame(apiKey: string, validateFrameRequest: ValidateFrameRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ValidateFrameActionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateFrame(apiKey, validateFrameRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve analytics for total-interactors, interactors, nteractions-per-cast and input-text.
         * @summary Retrieve analytics for the frame
         * @param {string} apiKey API key required for authentication.
         * @param {string} frameUrl 
         * @param {ValidateFrameAnalyticsType} analyticsType 
         * @param {string} start 
         * @param {string} stop 
         * @param {'10s' | '1m' | '2m' | '20m' | '30m' | '2h' | '12h' | '1d' | '7d'} [aggregateWindow] Required for &#x60;analytics_type&#x3D;interactions-per-cast&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateFrameAnalytics(apiKey: string, frameUrl: string, analyticsType: ValidateFrameAnalyticsType, start: string, stop: string, aggregateWindow?: '10s' | '1m' | '2m' | '20m' | '30m' | '2h' | '12h' | '1d' | '7d', options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FrameValidateAnalyticsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateFrameAnalytics(apiKey, frameUrl, analyticsType, start, stop, aggregateWindow, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve a list of all the frames validated by a user
         * @summary Retrieve a list of all the frames validated by a user
         * @param {string} apiKey API key required for authentication.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateFrameList(apiKey: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FrameValidateListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateFrameList(apiKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FramesApi - factory interface
 * @export
 */
export const FramesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FramesApiFp(configuration)
    return {
        /**
         * Post a frame action \\ (In order to post a frame action, you need to have an approved `signer_uuid`)  The POST request to the post_url has a timeout of 5 seconds. 
         * @summary Posts a frame action
         * @param {string} apiKey API key required for authentication.
         * @param {FrameActionReqBody} frameActionReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postFrameAction(apiKey: string, frameActionReqBody: FrameActionReqBody, options?: any): AxiosPromise<Frame> {
            return localVarFp.postFrameAction(apiKey, frameActionReqBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Validates a frame against by an interacting user against a Farcaster Hub \\ (In order to validate a frame, message bytes from Frame Action must be provided in hex) 
         * @summary Validates a frame action against Farcaster Hub
         * @param {string} apiKey API key required for authentication.
         * @param {ValidateFrameRequest} validateFrameRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateFrame(apiKey: string, validateFrameRequest: ValidateFrameRequest, options?: any): AxiosPromise<ValidateFrameActionResponse> {
            return localVarFp.validateFrame(apiKey, validateFrameRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve analytics for total-interactors, interactors, nteractions-per-cast and input-text.
         * @summary Retrieve analytics for the frame
         * @param {string} apiKey API key required for authentication.
         * @param {string} frameUrl 
         * @param {ValidateFrameAnalyticsType} analyticsType 
         * @param {string} start 
         * @param {string} stop 
         * @param {'10s' | '1m' | '2m' | '20m' | '30m' | '2h' | '12h' | '1d' | '7d'} [aggregateWindow] Required for &#x60;analytics_type&#x3D;interactions-per-cast&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateFrameAnalytics(apiKey: string, frameUrl: string, analyticsType: ValidateFrameAnalyticsType, start: string, stop: string, aggregateWindow?: '10s' | '1m' | '2m' | '20m' | '30m' | '2h' | '12h' | '1d' | '7d', options?: any): AxiosPromise<FrameValidateAnalyticsResponse> {
            return localVarFp.validateFrameAnalytics(apiKey, frameUrl, analyticsType, start, stop, aggregateWindow, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a list of all the frames validated by a user
         * @summary Retrieve a list of all the frames validated by a user
         * @param {string} apiKey API key required for authentication.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateFrameList(apiKey: string, options?: any): AxiosPromise<FrameValidateListResponse> {
            return localVarFp.validateFrameList(apiKey, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FramesApi - object-oriented interface
 * @export
 * @class FramesApi
 * @extends {BaseAPI}
 */
export class FramesApi extends BaseAPI {
    /**
     * Post a frame action \\ (In order to post a frame action, you need to have an approved `signer_uuid`)  The POST request to the post_url has a timeout of 5 seconds. 
     * @summary Posts a frame action
     * @param {string} apiKey API key required for authentication.
     * @param {FrameActionReqBody} frameActionReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FramesApi
     */
    public postFrameAction(apiKey: string, frameActionReqBody: FrameActionReqBody, options?: AxiosRequestConfig) {
        return FramesApiFp(this.configuration).postFrameAction(apiKey, frameActionReqBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Validates a frame against by an interacting user against a Farcaster Hub \\ (In order to validate a frame, message bytes from Frame Action must be provided in hex) 
     * @summary Validates a frame action against Farcaster Hub
     * @param {string} apiKey API key required for authentication.
     * @param {ValidateFrameRequest} validateFrameRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FramesApi
     */
    public validateFrame(apiKey: string, validateFrameRequest: ValidateFrameRequest, options?: AxiosRequestConfig) {
        return FramesApiFp(this.configuration).validateFrame(apiKey, validateFrameRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve analytics for total-interactors, interactors, nteractions-per-cast and input-text.
     * @summary Retrieve analytics for the frame
     * @param {string} apiKey API key required for authentication.
     * @param {string} frameUrl 
     * @param {ValidateFrameAnalyticsType} analyticsType 
     * @param {string} start 
     * @param {string} stop 
     * @param {'10s' | '1m' | '2m' | '20m' | '30m' | '2h' | '12h' | '1d' | '7d'} [aggregateWindow] Required for &#x60;analytics_type&#x3D;interactions-per-cast&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FramesApi
     */
    public validateFrameAnalytics(apiKey: string, frameUrl: string, analyticsType: ValidateFrameAnalyticsType, start: string, stop: string, aggregateWindow?: '10s' | '1m' | '2m' | '20m' | '30m' | '2h' | '12h' | '1d' | '7d', options?: AxiosRequestConfig) {
        return FramesApiFp(this.configuration).validateFrameAnalytics(apiKey, frameUrl, analyticsType, start, stop, aggregateWindow, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve a list of all the frames validated by a user
     * @summary Retrieve a list of all the frames validated by a user
     * @param {string} apiKey API key required for authentication.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FramesApi
     */
    public validateFrameList(apiKey: string, options?: AxiosRequestConfig) {
        return FramesApiFp(this.configuration).validateFrameList(apiKey, options).then((request) => request(this.axios, this.basePath));
    }
}
