const DEBUG_US_KEY = 'debug_us';

export async function isDebugUS() {
  const res = await chrome.storage.local.get([DEBUG_US_KEY]);
  return !!res[DEBUG_US_KEY];
}

export function changeDebugUS(v: boolean) {
  chrome.storage.local.set({ [DEBUG_US_KEY]: v }).then((res) => {
  });
}
