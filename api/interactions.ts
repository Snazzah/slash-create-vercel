// This is ran upon interaction

import { SlashCreator, VercelServer } from 'slash-create';
import path from 'path';

export const creator = new SlashCreator({
  applicationID: process.env.DISCORD_APP_ID as string,
  publicKey: process.env.DISCORD_PUBLIC_KEY,
  token: process.env.DISCORD_BOT_TOKEN
});

creator.withServer(new VercelServer()).registerCommandsIn(path.join(__dirname, '..', 'commands'));

creator.on('warn', (message) => console.warn(message));
creator.on('error', (error) => console.error(error));
creator.on('commandRun', (command, _, ctx) =>
  console.info(`${ctx.user.username}#${ctx.user.discriminator} (${ctx.user.id}) ran command ${command.commandName}`)
);
creator.on('commandError', (command, error) => console.error(`Command ${command.commandName}:`, error));

export default (creator.server! as VercelServer).vercelEndpoint;
