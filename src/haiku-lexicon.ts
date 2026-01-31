export type Fragment = {
    syllables: number;
    text: string;
};

export type Lexicon = {
    starters: Array<Fragment>;
    enders: Array<Fragment>;
};

export const haikuLexicon: Lexicon = {
    starters: [
        // 5 syllables (good for 5-line by itself, or 7-line +2 end)
        { syllables: 5, text: "service mesh stays calm" },
        { syllables: 5, text: "event streams stay bright" },
        { syllables: 5, text: "cold starts fade to hush" },
        { syllables: 5, text: "hot paths learn to wait" },
        { syllables: 5, text: "load balancers breathe" },
        { syllables: 5, text: "the cache remembers" },
        { syllables: 5, text: "packets find their home" },
        { syllables: 5, text: "threads untie their knots" },
        { syllables: 5, text: "deploys land like snow" },
        { syllables: 5, text: "shards drift into place" },

        // 4 syllables (pairs nicely with 3 or with 2)
        { syllables: 4, text: "database breathes" },
        { syllables: 4, text: "feature flags glow" },
        { syllables: 4, text: "runtime hums soft" },
        { syllables: 4, text: "packet storms pass" },
        { syllables: 4, text: "cloud edges breathe" },
        { syllables: 4, text: "metrics read clean" },
        { syllables: 4, text: "logs fall like rain" },
        { syllables: 4, text: "traces weave slow" },
        { syllables: 4, text: "workers drift back" },
        { syllables: 4, text: "timeouts loosen" },
        { syllables: 4, text: "backoffs settle" },
        { syllables: 4, text: "shadows in prod" },

        // 3 syllables (must pair cleanly with BOTH 2-syllable and 5-syllable ends)
        { syllables: 3, text: "backend winds" },
        { syllables: 3, text: "release trains" },
        { syllables: 3, text: "debug lights" },
        { syllables: 3, text: "version clocks" },
        { syllables: 3, text: "caching tides" },
        { syllables: 3, text: "queue echoes" },
        { syllables: 3, text: "trace lanterns" },
        { syllables: 3, text: "retry songs" },
        { syllables: 3, text: "pagers blare" },
        { syllables: 3, text: "docker dreams" },

        // 2 syllables (these should be very “attachable”)
        { syllables: 2, text: "ops dawn" },
        { syllables: 2, text: "stack trace" },
        { syllables: 2, text: "queues hum" },
        { syllables: 2, text: "logs drift" },
        { syllables: 2, text: "heaps churn" },
        { syllables: 2, text: "builds pass" },
        { syllables: 2, text: "nodes blink" },
        { syllables: 2, text: "bits fall" },
        { syllables: 2, text: "fans whir" },
    ],

    enders: [
        // 5 syllables (works after 0/2/3 starters for 5 or 7 lines depending)
        { syllables: 5, text: "where metrics paint night" },
        { syllables: 5, text: "till pagers learn rest" },
        { syllables: 5, text: "when clusters bloom slow" },
        { syllables: 5, text: "while errors turn shy" },
        { syllables: 5, text: "as dashboards breathe out" },
        { syllables: 5, text: "where traces hum low" },
        { syllables: 5, text: "when rollbacks feel kind" },
        { syllables: 5, text: "as latency falls" },
        { syllables: 5, text: "beneath status lights" },
        { syllables: 5, text: "where uptime holds true" },

        // 4 syllables (often best as a prepositional phrase / adverbial tail)
        { syllables: 4, text: "through neon rain" },
        { syllables: 4, text: "with new builds queued" },
        { syllables: 4, text: "shapes steady time" },
        { syllables: 4, text: "beyond paged dreams" },
        { syllables: 4, text: "by quiet graphs" },
        { syllables: 4, text: "in release light" },
        { syllables: 4, text: "past red alerts" },
        { syllables: 4, text: "with soft edges" },
        { syllables: 4, text: "into warm logs" },
        { syllables: 4, text: "over cool racks" },

        // 3 syllables (short attachable tails)
        { syllables: 3, text: "running hot" },
        { syllables: 3, text: "guarding dawn" },
        { syllables: 3, text: "mapping stars" },
        { syllables: 3, text: "learning still" },
        { syllables: 3, text: "drinking calm" },
        { syllables: 3, text: "under load" },
        { syllables: 3, text: "without fear" },
        { syllables: 3, text: "in the mist" },
        { syllables: 3, text: "past the noise" },
        { syllables: 3, text: "with clear eyes" },

        // 2 syllables (must work after almost anything)
        { syllables: 2, text: "stay warm" },
        { syllables: 2, text: "burn slow" },
        { syllables: 2, text: "keep watch" },
        { syllables: 2, text: "dream light" },
        { syllables: 2, text: "hold still" },
        { syllables: 2, text: "ease up" },
        { syllables: 2, text: "drift on" },
        { syllables: 2, text: "sleep soon" },
    ],
};
