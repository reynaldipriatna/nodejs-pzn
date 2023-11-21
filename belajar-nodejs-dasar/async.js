function samplePromise() {
  return Promise.resolve("Reynaldi");
}

async function run() {
  const name = await samplePromise();
  console.info(name);
}

run();
