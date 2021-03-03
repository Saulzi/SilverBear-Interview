import typescript from "@rollup/plugin-typescript"
import html from "rollup-plugin-html"

/** @type {import('rollup').RollupOptions} */

const config = {
    input: "source/index.ts",
    plugins: [typescript(), html({
        htmlMinifierOptions: {
            collapseWhitespace: true
        }
    })],
    output: {
        file: "wwwroot/app.js",
        sourcemap: true,            // May need re-configuring, needed for nice debug, want to not export this in release 
        format: "amd",               // For this example I am going to use requirejs to load in stuff, hence load in AMD style
                                    // essentually knockout js itself is a bit dated and does not export ESM module which can be bundled up
                                    // here lets build and load 
    
    },
    "external": ["knockout"]        // we are going to not try and bundle in, essentually we can do this with a ESM build of knockout (I have seen a fork circa 2020)
                                    // I put in a similar solution to the Metis Application, essentually we had a core dependancies thing which had all AMD based dependancies
                                    // Later applications we used ESM to bundle things together using rollup, webpack browserify etc
}

export default config;