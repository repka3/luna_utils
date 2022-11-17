export interface CacheInterval {
    hours: number;
    minutes: number;
    seconds: number;
}
export declare function CacheLuna_storeObjectWithExpiration(key: string, object: any, expire_interval: CacheInterval): void;
export declare function CacheLuna_getObjectOrNullIfExpired(key: string): any;
export declare function CacheLuna_invalidateKey(key: string): void;
export declare function CacheLuna_invalidateALLKEYS(): void;
