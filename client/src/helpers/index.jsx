export const saveLocalStorage = (key, data) => {
     if(typeof data === "object" && data !== null ) {
          localStorage.setItem("info", JSON.stringify(data))
     }
     else {
          localStorage.setItem("info", data)
     }
}