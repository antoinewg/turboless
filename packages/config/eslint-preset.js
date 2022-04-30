module.exports = {
  extends: ["prettier"],
  settings: {
    next: {
      rootDir: ["packages/*/", "services/*/"],
    },
  },
};
