import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { ConfigContext, useRegistry } from 'starshipjs';

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function setup() {
  const configFile = join(__dirname, 'configs', 'config.yaml');
  ConfigContext.setConfigFile(configFile);
  ConfigContext.setRegistry(await useRegistry(configFile));
}
