// Ambient declaration for process.env used in client code.
// We intentionally declare a permissive type because environment
// variables are inlined at build time in `vite.config.ts`.

declare namespace NodeJS {
  interface ProcessEnv {
    // Common Vite pattern for public env vars
    VITE_API_URL?: string;
    VITE_PUBLIC_FLAG?: string;
    // Allow any other env var as optional string
    [key: string]: string | undefined;
  }
}

declare var process: {
  env: NodeJS.ProcessEnv;
};
