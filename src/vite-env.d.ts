declare const APP_VERSION: string;

interface ImportMetaEnv {
  readonly NODE_ENV: 'development' | 'production' | 'test';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}