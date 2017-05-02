This is a fairly concise document on gateway sharding with WildBeast.

**NOTE:** Shard mode is an advanced feature and is only meant for larger bots. If you don't understand the Discord gateway sharding system properly, don't continue!

Quick terminology table:

Term | Definition
--- | ---
Shard | Partial WildBeast instance
Guild | Server
   
## Sharding

The Discord gateway allows you to split your guilds off into multiple 'shards'. Using this you can balance gateway load better and greatly increase performance.

What this in practice means is that if you run 22 shards for 2500 guilds, those guilds would be distributed over those shards. This would mean an approximate of 114 guilds/shard.
    
With shard mode activated, the distribution of guilds is calculated with the function `(guild_id >> 22) % num_shards == shard_id`. Guilds that are not on your shard will not appear in the shard list, meaning they will not show up in the `guilds` object in the ready packet. You won't in addition receive any events for guilds not on your shard.

## Enabling sharding

**Notes:**
`num_shards` must be greater than 2. Even numbers are good to have. (Having 1 shard is pointless as that is the default operation mode)    
`shard_id` must not exceed or be equal to `num_shards`, and should start at 0.    

To start WildBeast in shard mode, change your start-up command to this.

```bash
node DougBot.js --shardmode --shardcount=<num_shards> --shardid=<shard_id>
```

In which you replace the `<num_shards>` placeholder with the desired number of shards and the `<shard_id>` as described above.

You need to start exactly the same amount of processes as you are requesting the gateway to propagate (`num_shards`), and `shard_id` must be unique for each process. 

**IMPORTANT NOTE:** Starting September 30th 2016, Discord will roll out *enforced gateway sharding for bots with over 2500 guilds* to balance their gateway load. More info: https://github.com/hammerandchisel/discord-api-docs/issues/17

You can read more about the gateway sharding system from the link above as well.
