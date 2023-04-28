import { SapphireClient, SapphireClientOptions } from "@sapphire/framework";
import { ColorResolvable, ClientOptions as DiscordClientOptions, resolveColor } from "discord.js";

declare module "discord.js" {
  interface Client {
    color: number;
    hexColor: `#${string}`;
  }
}

export class Client<Ready extends boolean = boolean> extends SapphireClient<Ready> {
  constructor(options: ClientOptions) {
    super(options);
    this.color = resolveColor(options.color ?? "Blurple");
  }

  get hexColor(): `#${string}` {
    return `#${this.color.toString(16).padStart(6, "0")}`;
  }
}
export interface ClientOptions extends SapphireClientOptions, DiscordClientOptions {
  /** @default "Blurple" */
  color?: ColorResolvable;
}
