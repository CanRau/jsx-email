export interface GlobalConfig {
  disableDefaultStyles?: boolean;
  set: boolean;
}

const defaults: GlobalConfig = {
  disableDefaultStyles: false,
  set: false
};

// Note: Leaving this as mutable for testing
// eslint-disable-next-line import/no-mutable-exports
export let config: GlobalConfig = { set: false };

export const loadConfig = async () => {
  if (config.set) return config;

  const { packageConfig } = await import('package-config');

  config = { ...defaults, set: true, ...(await packageConfig('jsx-email')) };

  return config;
};
