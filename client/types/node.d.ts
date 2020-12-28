/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * Extend process.env.* with typed environment variables
     * For example, uncomment next line and `process.env.SOME_ENV_VAR` will be available and typed as string
     */
    // readonly SOME_ENV_VAR: string
  }
}
