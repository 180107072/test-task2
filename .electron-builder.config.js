module.exports = async function () {
  const { getVersion } = await import("./version/getVersion.mjs");

  return {
    asar: true,
    directories: {
      output: "dist",
      buildResources: "buildResources",
    },
    files: ["packages/**/dist/**"],
    extraMetadata: {
      version: getVersion(),
    },

    // Specify linux target just for disabling snap compilation
    linux: {
      target: "deb",
    },
  };
};
