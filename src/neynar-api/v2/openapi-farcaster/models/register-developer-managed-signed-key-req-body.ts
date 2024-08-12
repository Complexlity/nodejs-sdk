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


// May contain unused imports in some cases
// @ts-ignore
import { RegisterSignerKeyReqBodySponsor } from './register-signer-key-req-body-sponsor';

/**
 * 
 * @export
 * @interface RegisterDeveloperManagedSignedKeyReqBody
 */
export interface RegisterDeveloperManagedSignedKeyReqBody {
    /**
     * Ed25519 public key
     * @type {string}
     * @memberof RegisterDeveloperManagedSignedKeyReqBody
     */
    'public_key': string;
    /**
     * Signature generated by the custody address of the app. Signed data includes app_fid, deadline, signer’s public key
     * @type {string}
     * @memberof RegisterDeveloperManagedSignedKeyReqBody
     */
    'signature': string;
    /**
     * User identifier (unsigned integer)
     * @type {number}
     * @memberof RegisterDeveloperManagedSignedKeyReqBody
     */
    'app_fid': number;
    /**
     * unix timestamp in seconds that controls how long the signed key request is valid for. (24 hours from now is recommended)
     * @type {number}
     * @memberof RegisterDeveloperManagedSignedKeyReqBody
     */
    'deadline': number;
    /**
     * 
     * @type {RegisterSignerKeyReqBodySponsor}
     * @memberof RegisterDeveloperManagedSignedKeyReqBody
     */
    'sponsor'?: RegisterSignerKeyReqBodySponsor;
}

