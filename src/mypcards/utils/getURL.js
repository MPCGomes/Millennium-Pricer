export function getURL(resource) {
  let runtime;
  switch (true) {
    case typeof browser !== "undefined":
      runtime = browser;
      break;
    case typeof chrome !== "undefined":
      runtime = chrome;
      break;
    default:
      runtime = null;
      break;
  }

  return runtime ? runtime.runtime.getURL(resource) : resource;
}
