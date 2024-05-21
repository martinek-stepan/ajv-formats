import type Ajv from "ajv";
import type { Format, Plugin } from "ajv";
import { Name } from "ajv/dist/compile/codegen";
import { DefinedFormats, FormatMode, FormatName } from "./formats";
export { FormatMode, FormatName } from "./formats";
export { LimitFormatError } from "./limit";
export interface FormatOptions {
    mode?: FormatMode;
    formats?: FormatName[];
    keywords?: boolean;
}
export type FormatsPluginOptions = FormatName[] | FormatOptions;
export interface FormatsPlugin extends Plugin<FormatsPluginOptions> {
    get: (format: FormatName, mode?: FormatMode) => Format;
}
declare const formatsPlugin: FormatsPlugin;
export declare function addFormats(ajv: Ajv, list: FormatName[], fs: DefinedFormats, exportName: Name): void;
export default formatsPlugin;
