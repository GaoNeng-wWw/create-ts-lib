export const add = (a: number, b: number) => {
  if (__DEV__){
    console.log('should be treeshake');
  }
  return a+b++;
};