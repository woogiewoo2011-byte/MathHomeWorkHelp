const runtimeCanvas = "resources/FiveNights2NOHACKS.cch";
const resourceParts = 9;
const resourceMap = new Map();
const assetRoot = document.querySelector("base").href;

function assetUrl(path) {
  return new URL(path, assetRoot).href;
}

function updateProgress(kind, percent) {
  const bar = document.getElementById(`${kind}-bar`);
  const text = document.getElementById(`${kind}-text`);
  if (bar) bar.style.width = `${percent}%`;
  if (text) text.textContent = `${percent}%`;
}

function resourceName(url) {
  try {
    return new URL(url, document.baseURI).pathname.split("/").pop();
  } catch {
    return String(url).split("/").pop();
  }
}

function interceptResources() {
  const nativeFetch = window.fetch.bind(window);
  window.fetch = (input, init) => {
    const requestUrl = typeof input === "string" ? input : input?.url;
    const name = resourceName(requestUrl);
    if (resourceMap.has(name)) {
      return nativeFetch(resourceMap.get(name), init);
    }
    return nativeFetch(input, init);
  };

  const nativeOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url, ...rest) {
    const name = resourceName(url);
    if (resourceMap.has(name)) {
      url = resourceMap.get(name);
    }
    return nativeOpen.call(this, method, url, ...rest);
  };

  for (const ElementType of [HTMLImageElement, HTMLAudioElement, HTMLVideoElement]) {
    const descriptor = Object.getOwnPropertyDescriptor(ElementType.prototype, "src");
    if (!descriptor?.set) continue;
    Object.defineProperty(ElementType.prototype, "src", {
      configurable: true,
      enumerable: descriptor.enumerable,
      get: descriptor.get,
      set(value) {
        const name = resourceName(value);
        if (typeof value === "string" && resourceMap.has(name)) {
          value = resourceMap.get(name);
        }
        descriptor.set.call(this, value);
      },
    });
  }
}

function showStartupError(message) {
  const progress = document.getElementById("progress-container");
  if (!progress) return;
  progress.style.display = "block";
  progress.innerHTML = `<div style="color:#ffb4a8">${message}</div>`;
}

async function loadResources() {
  const buffers = [];
  for (let index = 1; index <= resourceParts; index += 1) {
    const text = document.getElementById("download-text");
    if (text) text.textContent = `connecting to part ${index}/${resourceParts}…`;
    const response = await fetch(assetUrl(`resources.zip.part${index}`));
    if (!response.ok) throw new Error(`Could not load resource part ${index}`);
    if (!response.body) {
      buffers.push(await response.arrayBuffer());
    } else {
      const reader = response.body.getReader();
      const chunks = [];
      let loaded = 0;
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        loaded += value.byteLength;
        const progressText = document.getElementById("download-text");
        if (progressText) progressText.textContent = `part ${index}/${resourceParts} · ${Math.round(loaded / 1048576)} MB`;
      }
      buffers.push(await new Blob(chunks).arrayBuffer());
    }
    updateProgress("download", Math.floor((index / resourceParts) * 100));
  }

  const zip = await JSZip.loadAsync(new Blob(buffers));
  const files = Object.values(zip.files).filter((file) => !file.dir);
  for (let index = 0; index < files.length; index += 1) {
    const blob = await files[index].async("blob");
    resourceMap.set(resourceName(files[index].name), URL.createObjectURL(blob));
    updateProgress("extract", Math.floor(((index + 1) / files.length) * 100));
  }
}

async function startGame() {
  await loadResources();
  interceptResources();
  const runtime = document.createElement("script");
  runtime.src = "/games/FNAF2/Runtime.js";
  runtime.onerror = () => showStartupError("The FNAF 2 runtime could not load.");
  runtime.onload = () => {
    try {
      new Runtime("MMFCanvas", runtimeCanvas);
      document.getElementById("progress-container").style.display = "none";
    } catch (error) {
      showStartupError(`FNAF 2 startup failed: ${error.message || error}`);
    }
  };
  document.head.appendChild(runtime);
}

startGame().catch((error) => {
  console.error("FNAF 2 could not start:", error);
  const progress = document.getElementById("progress-container");
  if (progress) progress.textContent = "The game could not load. Please refresh and try again.";
});