// This file only syncs the commands, and is ran in Vercel after build.

import { SlashCreator } from 'slash-create';
import path from 'path';

export const creator = new SlashCreator({
  applicationID: process.env.DISCORD_APP_ID as string,
  publicKey: process.env.DISCORD_PUBLIC_KEY,
  token: process.env.DISCORD_BOT_TOKEN
});

creator.on('debug', (message) => console.log(message));
creator.on('warn', (message) => console.warn(message));
creator.on('error', (error) => console.error(error));
creator.once('synced', () => {
  console.info('Commands synced! Exiting...');
  process.exit(0);
});

creator.registerCommandsIn(path.join(__dirname, '..', 'commands')).syncCommands();
