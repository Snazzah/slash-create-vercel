# slash-create with Vercel
This is a template server for slash-create using Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSnazzah%2Fslash-create-vercel&env=DISCORD_APP_ID,DISCORD_PUBLIC_KEY,DISCORD_BOT_TOKEN&envDescription=Variables%20needed%20to%20recognize%20and%20operate%20slash%20commands.&project-name=discord-interactions&repo-name=discord-slash-commands&demo-description=Deploy%20a%20slash-create%20server%20for%20Discord%20interactions.&demo-image=https%3A%2F%2Fget.snaz.in%2F4MVTTaR.png&demo-title=%2Fcreate&demo-url=https%3A%2F%2Fslash-create.js.org)

**:warning: Due to a change in a dependency in slash-create, the Install Command must be set to this to disable node version checks before installing.**
```
yarn config set ignore-engines true && yarn install
```

### Note
If building fails, set the Install Command to `yarn config set ignore-engines true && yarn install --network-concurrency 1` on Vercel. (see [issue](https://github.com/yarnpkg/yarn/issues/7212))
