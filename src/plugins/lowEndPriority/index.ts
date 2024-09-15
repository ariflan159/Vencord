import {ApplicationCommandOptionType, findOption, sendBotMessage} from "./../../api/Commands";
// @ts-ignore
const Native = VencordNative.pluginHelpers.LowEndPriority as PluginNative<typeof import("./native")>;

import definePlugin, { PluginNative } from "./../../utils/types";


export default definePlugin( {
    name: "LowEndPriority",
    description: "Run some of LowEndPriority's features locally",
    authors: [{ name: "ariflan", id: 581462944953663508n }],
    dependencies: ["CommandsAPI"],
    commands: [
        {
            name: "cgloves",
            description: "Check gloves of a user by their username",
            options: [
                {
                    name: "username",
                    description: "Username of the player",
                    type: ApplicationCommandOptionType.STRING,
                    required: true,
                }
            ],
            execute: async (opts, ctx) => {
                await Native.get_gloves(findOption(opts, 'username')!)
            },
        }
    ],
});
