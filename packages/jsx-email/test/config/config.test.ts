import { config, loadConfig } from '../../src/config';

describe('config', async () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.resetModules();
  });

  test.sequential('has defaults', async () => {
    expect(config.set).toBe(false);
    expect(config.disableDefaultStyles).toBe(false);
  });

  test.sequential('loads config', async () => {
    const conf = await loadConfig(__dirname);

    expect(conf.set).toBe(true);
    expect(conf.disableDefaultStyles).toBe(true);
    expect(config.set).toBe(true);
    expect(config.disableDefaultStyles).toBe(true);
  });
});
