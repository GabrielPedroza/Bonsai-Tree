"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    mount: {
        public: "/",
        src: "/dist",
    },
    plugins: ["@snowpack/plugin-react-refresh", "@snowpack/plugin-sass"],
    routes: [
        { match: "routes", src: ".*", dest: "/index.html" },
    ],
    optimize: {},
    packageOptions: {},
    devOptions: {},
    buildOptions: {},
};
//# sourceMappingURL=snowpack.config.mjs.map