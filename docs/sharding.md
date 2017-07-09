This is a quick document about Discord gateway sharding and how WildBeast uses this technology to it's advantage.

**Note:** Shard mode with WildBeast is an advanced feature and only intended for bots with over 2500 guilds. If you aren't proficient with Discord's gateway sharding and websocket technologies, don't attempt to use this feature!

## Terminology

Quick terminology table:

| Term | Definition |
| ---- | ---------- | 
| Shard | A partial WildBeast instance. | 
| Guild | A Discord server. | 
| g/s | Shorthand for "guilds per shard". | 
   
## What is sharding?

### The metaphorical viewpoint

You can think of sharding like this: You have a big glass ball that is sending power to a recipient. If a certain amount and more of power is being sent at one time, the recipient will be overwhelmed with data. But if you shatter the ball and let the pieces (Shards) send smaller amounts of power each, the load will be distributed better.

This example really is shitty, but it's best I could come up with...

### The technical viewpoint

In practice, the Discord gateway allows you to split your guilds off into multiple shards. Using the logic above you can decrease gateway load and greatly increase bot performance. Discord also enforces gateway sharding on bots with more than 2500 guilds.

Example: Your bot is on 10000 servers. Theoretically, the lowest possible shard count is 5 as that gives 2500 g/s. It is however in practice impossible since it leaves no lee-way for guild additions.

A better idea is running 10 shards to have about 1000 g/s. 1000 g/s should be something to strive for but it's not a requirement. That leaves space for guild count growth and balances your load evenly.

### Maths with sharding

#### Shard count

The guild distribution is calculated like this:

`guildCount / desiredGps = shardCount`

| Element    | Explanation |
| ---------- | ----------- |
| guildCount | The amount of guilds the bot is on. |
| desiredGps | Desired guilds per shard ratio. |
| shardCount | The amount of shards you will need. |

Example: `10000 / 1000 = 10`

#### Shard ID

This is a bit more complex calculation. If you are receiving events from a guild, you can "trace" the shard the events come from without additional logging.

The formula is the following:

`(guildId >> 22) % shardCount = shardNumber`

| Element | Explanation |
| ------- | ----------- |
| guildId | The server ID you want to find the shard for. |
| shardCount | The amount of shards you have in total. |
| shardNumber | The shard which the guild is on. (Also referred to as shard ID) |

You will not receive events from guilds that are not on your current shard (As in the instance you're viewing in logs, for example). They will not appear in `guilds` object in the READY packet either.

## Sharding with WildBeast

### Enabling sharding

To start WildBeast in shard mode, you need to use the following format.

```bash
node DougBot.js --shardmode --shardcount=<shardCount> --shardid=<shardNumber>
```

!!! warning "Shard mode requirements"
    `shardCount` must be > 2. You should have an even number of shards and the integer should naturally be unsigned. Having 1 shard is pointless as this is the default mode.

    `shardNumber` must not exceed or be equal to `shardCount`, and should start at 0.

    You need to start exactly the same amount of processes as you are requesting the gateway to propagate (shardCount), and `shardId` must be unique for each process.

### Starting in shard mode

To start WildBeast in shard mode, run the startup command as described above. Example with the values we used above:

```bash
node DougBot.js --shardmode --shardcount=10 --shardid=0
```

Repeat this command until 10 shard processes are running. Using something like a PM2 process list in JSON format is recommended. Example (File is processes.json):

```json
{
  "apps": [
    {
      "name": "Shard 0",
      "script": "./WildBeast/DougBot.js",
      "cwd": "/home/youraccountname/WildBeast",
      "args": "--shardmode --shardcount=10 --shardid=0",
    },
    {
      "name": "Shard 1",
      "script": "./WildBeast/DougBot.js",
      "cwd": "/home/youraccountname/WildBeast",
      "args": "--shardmode --shardcount=10 --shardid=1",
    },
    {
      "name": "Shard 2",
      "script": "./WildBeast/DougBot.js",
      "cwd": "/home/youraccountname/WildBeast",
      "args": "--shardmode --shardcount=10 --shardid=2",
    }
  ]
}
```

You could as an additional safeguard apply the `"force": true` flag in order to suppress PM2 warnings regarding a process being started multiple times.

Extend the above until all shards are covered. Then just pass the file to PM2 in order to start it. This can be done with `pm2 start processes.json`.

Additional reading about PM2 process files: [http://pm2.keymetrics.io/docs/usage/application-declaration](http://pm2.keymetrics.io/docs/usage/application-declaration/)

That in a nutshell is how Discord gateway sharding works and how to use it with WildBeast.
