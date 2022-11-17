export declare function positiveIntOrNull_castNumber(input: any): number | null;
export declare function nonEmptyStringOrNull(ss: any, minlength?: number, maxlength?: number | null, allowLiteralNullInString?: boolean): string | null;
export declare function nonEmptyStringOrNull_caststr(ss: any, minlength?: number, maxlength?: number | null, allowLiteralNullInString?: boolean): string | null;
export declare function nullish(input: any): boolean;
export declare function parse_body_and_trimstring_also_null_empty_string(body: string): any;
export declare function validPassword(password: string, minlength?: number, maxlength?: number, preventwhitespaces?: boolean, special_chars?: boolean, uppercase?: boolean, lowercase?: boolean, numbers?: boolean): boolean;
