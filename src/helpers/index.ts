export function debounce(func: (any: any) => any, timeout: number = 300) {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(null, args); }, timeout);
  };
}