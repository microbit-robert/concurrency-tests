(async function () {
  console.log("Build start");
  await new Promise((res) => setTimeout(res, 60_000 * 3));
  console.log("Done");
})();
