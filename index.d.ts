export default data;
/**
 * Retrieves the HTTP response details for a given status code.
 *
 * @param {number|string} code - The HTTP status code to look up.
 * @returns {any} The details associated with the provided status code.
 */
export function getStatusCode(code: number | string): any;
/**
 * An object containing HTTP status codes as keys and their corresponding
 * descriptions as values. Each description provides details about the
 * meaning and usage of the HTTP status code.
 *
 * Example:
 * {
 *   "200": "OK\nThe request has succeeded. The meaning of the success depends on the HTTP method...",
 *   "404": "Not Found\nThe server can not find the requested resource...",
 *   ...
 * }
 *
 * @type {Object.<string, string>}
 */
declare const data: {
    [x: string]: string;
};
