function samplePromise() {
  return Promise.resolve("Reynaldi");
}

const name = await samplePromise();
console.info(name);
