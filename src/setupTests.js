/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
const noop = () => { };
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });
