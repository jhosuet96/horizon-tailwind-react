function ValidateJson(data: string) {
  try {
    var testJson = JSON.parse(data);
    if(typeof testJson  == "object"){
      return true;
    }else{
      return false;
    }
  } catch{
    return false
  }
}

const useStorage = {
    set: (key: string, value: any) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    get: <T>(key: string, defaultValue?: T): T => {
      let value = localStorage.getItem(key);
      if(value == null){
        value = '';
      }
      return (ValidateJson(value) ? JSON.parse(value) : defaultValue) as T;
    },
    remove: (key: string) => {
      localStorage.removeItem(key);
    },
  };
  
  export default useStorage;