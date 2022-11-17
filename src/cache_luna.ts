export interface CacheInterval {
    hours: number;
    minutes: number;
    seconds: number;
  }
  export function CacheLuna_storeObjectWithExpiration(
    key: string,
    object: any,
    expire_interval: CacheInterval
  ) {
    // console.log(
    //   'CacheLuna_storeObjectWithExpiration key:' +
    //     key +
    //     ' expires:' +
    //     JSON.stringify(expire_interval) +
    //     ' object: ' +
    //     JSON.stringify(object)
    // );
    let msFromNow =
      Date.now() +
      expire_interval.seconds * 1000 +
      expire_interval.minutes * 60 * 1000 +
      expire_interval.hours * 3600 * 1000;
    let obj = {
      expires: msFromNow,
      obj: JSON.stringify(object),
    };
    localStorage.setItem(key, JSON.stringify(obj));
    CacheLuna_storeKeyInList(key);
  }
  
  export function CacheLuna_getObjectOrNullIfExpired(key: string) {
    // console.log('Called CacheLuna_getObjectOrNullIfExpired with key:' + key);
    let cobj = localStorage.getItem(key);
    if (cobj == null) {
      console.log('null No luck with CacheLuna :(');
      return null;
    }
    let objreale = JSON.parse(cobj);
    let nowms = Date.now();
    if (nowms > objreale.expires) {
      console.log('expires No luck with CacheLuna :(');
      localStorage.removeItem(key);
      return null;
    }
    //console.log('U lucky CacheLuna kickedIN :)');
    return JSON.parse(objreale.obj);
  }
  
  export function CacheLuna_invalidateKey(key: string) {
    localStorage.removeItem(key);
    CacheLuna_removeKeyInList(key);
  }
  export function CacheLuna_invalidateALLKEYS() {
    console.log('Invalidating and removing all keys in CacheLuna. Keys:');
    let listKeys = localStorage.getItem('CacheLuna_listKeys');
    if (listKeys == null) return;
    let keys_array: string[] = JSON.parse(listKeys);
    console.log(keys_array);
    keys_array.map((key) => {
      CacheLuna_invalidateKey(key);
    });
  }
  function CacheLuna_removeKeyInList(key: string) {
    let listKeys = localStorage.getItem('CacheLuna_listKeys');
    if (listKeys == null) return;
  
    let keys_array: string[] = JSON.parse(listKeys);
    if (!keys_array.includes(key)) return;
    const index = keys_array.indexOf(key);
    keys_array.splice(index, 1);
    if (keys_array.length < 1) {
      localStorage.removeItem('CacheLuna_listKeys');
      return;
    } else {
      localStorage.setItem('CacheLuna_listKeys', JSON.stringify(keys_array));
      return;
    }
  }
  function CacheLuna_storeKeyInList(key: string) {
    let listKeys = localStorage.getItem('CacheLuna_listKeys');
    if (listKeys == null) {
      const keys = [key];
      localStorage.setItem('CacheLuna_listKeys', JSON.stringify(keys));
      return;
    } else {
      let keys_array: string[] = JSON.parse(listKeys);
      if (keys_array.includes(key)) return;
      keys_array.push(key);
      localStorage.setItem('CacheLuna_listKeys', JSON.stringify(keys_array));
      return;
    }
  }
  