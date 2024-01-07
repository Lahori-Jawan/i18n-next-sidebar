export default function trycatch(promise: Promise<any>): Promise<any> {
  return promise.then((data) => [null, data]).catch((err) => [err]);
}
