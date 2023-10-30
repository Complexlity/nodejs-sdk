/* tslint:disable */
/* eslint-disable */
/**
 * vFarcaster API V1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
// @ts-ignore
import { ErrorRes } from "../models";
// @ts-ignore
import { User200Response } from "../models";
// @ts-ignore
import { VerificationResponse } from "../models";
/**
 * VerificationApi - axios parameter creator
 * @export
 */
export const VerificationApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Checks if a given Ethereum address has a Farcaster user associated with it. Note: if an address is associated with multiple users, the API will return the user who most recently published a verification with the address (based on when Warpcast received the proof, not a self-reported timestamp).
     * @summary Retrieve user for a given ethereum address
     * @param {string} address
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userByVerification: async (
      address: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'address' is not null or undefined
      assertParamExists("userByVerification", "address", address);
      const localVarPath = `/farcaster/user-by-verification`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
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

      // authentication ApiKeyAuth required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "api_key",
        configuration
      );

      if (address !== undefined) {
        localVarQueryParameter["address"] = address;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Get all known verifications of a user
     * @summary Retrieve verifications for a given FID
     * @param {number} fid FID of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifications: async (
      fid: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'fid' is not null or undefined
      assertParamExists("verifications", "fid", fid);
      const localVarPath = `/farcaster/verifications`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
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

      // authentication ApiKeyAuth required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "api_key",
        configuration
      );

      if (fid !== undefined) {
        localVarQueryParameter["fid"] = fid;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * VerificationApi - functional programming interface
 * @export
 */
export const VerificationApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    VerificationApiAxiosParamCreator(configuration);
  return {
    /**
     * Checks if a given Ethereum address has a Farcaster user associated with it. Note: if an address is associated with multiple users, the API will return the user who most recently published a verification with the address (based on when Warpcast received the proof, not a self-reported timestamp).
     * @summary Retrieve user for a given ethereum address
     * @param {string} address
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userByVerification(
      address: string,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<User200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.userByVerification(address, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Get all known verifications of a user
     * @summary Retrieve verifications for a given FID
     * @param {number} fid FID of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async verifications(
      fid: number,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<VerificationResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.verifications(
        fid,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * VerificationApi - factory interface
 * @export
 */
export const VerificationApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = VerificationApiFp(configuration);
  return {
    /**
     * Checks if a given Ethereum address has a Farcaster user associated with it. Note: if an address is associated with multiple users, the API will return the user who most recently published a verification with the address (based on when Warpcast received the proof, not a self-reported timestamp).
     * @summary Retrieve user for a given ethereum address
     * @param {VerificationApiUserByVerificationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userByVerification(
      requestParameters: VerificationApiUserByVerificationRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<User200Response> {
      return localVarFp
        .userByVerification(requestParameters.address, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get all known verifications of a user
     * @summary Retrieve verifications for a given FID
     * @param {VerificationApiVerificationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifications(
      requestParameters: VerificationApiVerificationsRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<VerificationResponse> {
      return localVarFp
        .verifications(requestParameters.fid, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for userByVerification operation in VerificationApi.
 * @export
 * @interface VerificationApiUserByVerificationRequest
 */
export interface VerificationApiUserByVerificationRequest {
  /**
   *
   * @type {string}
   * @memberof VerificationApiUserByVerification
   */
  readonly address: string;
}

/**
 * Request parameters for verifications operation in VerificationApi.
 * @export
 * @interface VerificationApiVerificationsRequest
 */
export interface VerificationApiVerificationsRequest {
  /**
   * FID of the user
   * @type {number}
   * @memberof VerificationApiVerifications
   */
  readonly fid: number;
}

/**
 * VerificationApi - object-oriented interface
 * @export
 * @class VerificationApi
 * @extends {BaseAPI}
 */
export class VerificationApi extends BaseAPI {
  /**
   * Checks if a given Ethereum address has a Farcaster user associated with it. Note: if an address is associated with multiple users, the API will return the user who most recently published a verification with the address (based on when Warpcast received the proof, not a self-reported timestamp).
   * @summary Retrieve user for a given ethereum address
   * @param {VerificationApiUserByVerificationRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VerificationApi
   */
  public userByVerification(
    requestParameters: VerificationApiUserByVerificationRequest,
    options?: AxiosRequestConfig
  ) {
    return VerificationApiFp(this.configuration)
      .userByVerification(requestParameters.address, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get all known verifications of a user
   * @summary Retrieve verifications for a given FID
   * @param {VerificationApiVerificationsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VerificationApi
   */
  public verifications(
    requestParameters: VerificationApiVerificationsRequest,
    options?: AxiosRequestConfig
  ) {
    return VerificationApiFp(this.configuration)
      .verifications(requestParameters.fid, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
