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
import { User } from './user';

/**
 * 
 * @export
 * @interface MuteList
 */
export interface MuteList {
    /**
     * 
     * @type {string}
     * @memberof MuteList
     */
    'object': MuteListObjectEnum;
    /**
     * 
     * @type {User}
     * @memberof MuteList
     */
    'muted': User;
    /**
     * 
     * @type {string}
     * @memberof MuteList
     */
    'muted_at': string;
}

export const MuteListObjectEnum = {
    Mute: 'mute'
} as const;

export type MuteListObjectEnum = typeof MuteListObjectEnum[keyof typeof MuteListObjectEnum];


