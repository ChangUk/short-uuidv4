import pkg from "./package.json";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";

export default [{
    input: `src/${pkg.name}.ts`,
    plugins: [
        typescript({
            tsconfig: "tsconfig.json",
            sourceMap: false
        }),
        terser()
    ],
    output: [{
        file: `dist/${pkg.name}.esm.js`,
        format: "esm"
    }, {
        name: "ShortUuidV4",
        file: `dist/${pkg.name}.umd.js`,
        format: "umd",
        plugins: getBabelOutputPlugin({
            allowAllFormats: true,
            presets: [
                ["@babel/preset-env", {
                    modules: "amd",
                    targets: { chrome: "58", ie: "11" },
                    useBuiltIns: "entry",
                    corejs: { version: 3, proposals: true },
                }]
            ],
        })
    }, {
        name: "ShortUuidV4",
        file: `dist/${pkg.name}.iife.js`,
        format: "iife",
        plugins: getBabelOutputPlugin({
            allowAllFormats: true,
            presets: [
                ["@babel/preset-env", {
                    modules: "amd",
                    targets: { chrome: "58", ie: "11" },
                    useBuiltIns: "entry",
                    corejs: { version: 3, proposals: true },
                }]
            ],
        })
    }]
}];
