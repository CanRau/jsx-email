export interface GlobalConfig extends Record<string, unknown> {
  disableDefaultStyles?: boolean;
  set: boolean;
}

const defaults: GlobalConfig = {
  disableDefaultStyles: false,
  set: false
};

// Note: Leaving this as mutable for testing
// eslint-disable-next-line import/no-mutable-exports
export let config: GlobalConfig = defaults;

export const loadConfig = async (cwd?: string) => {
  if (config.set) return config;

  let pkgConfig: GlobalConfig = defaults;

  // @ts-expect-error
  if (!globalThis.window) {
    const { packageConfig } = await import('package-config');
    pkgConfig = await packageConfig<GlobalConfig>('jsx-email', { cwd });
  }

  config = { ...defaults, ...pkgConfig, set: true };

  return config;
};
