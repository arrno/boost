import { haikuLexicon, type Fragment, type Lexicon } from "./haiku-lexicon";

const HAIKU_FORM = [5, 7, 5] as const;
type LineSyllables = (typeof HAIKU_FORM)[number];

const rand = <T>(arr: Array<T>): T =>
    arr[Math.floor(Math.random() * arr.length)];

const groupBySyllables = (
    fragments: Array<Fragment>
): Map<number, Array<Fragment>> => {
    const map = new Map<number, Array<Fragment>>();
    for (const fragment of fragments) {
        const bucket = map.get(fragment.syllables) ?? [];
        bucket.push(fragment);
        map.set(fragment.syllables, bucket);
    }
    return map;
};

export class HaikuMaker {
    private readonly starters: Array<Fragment>;
    private readonly endersByCount: Map<number, Array<Fragment>>;

    constructor(private readonly lexicon: Lexicon = haikuLexicon) {
        this.starters = lexicon.starters;
        this.endersByCount = groupBySyllables(lexicon.enders);
    }

    private pickStarter(
        total: LineSyllables,
        usedFragments: Set<Fragment>
    ): Fragment {
        const options = this.starters.filter((starter) => {
            if (usedFragments.has(starter)) return false;

            const remaining = total - starter.syllables;
            if (remaining <= 0) return false;

            const endings = this.endersByCount.get(remaining);
            if (!endings) return false;

            return endings.some((ending) => !usedFragments.has(ending));
        });

        if (options.length === 0) {
            throw new Error(
                `No haiku starter available for ${total} syllables.`
            );
        }

        return rand(options);
    }

    private pickEnding(
        remaining: number,
        usedFragments: Set<Fragment>
    ): Fragment {
        const endings = this.endersByCount
            .get(remaining)
            ?.filter((ending) => !usedFragments.has(ending));
        if (!endings || endings.length === 0) {
            throw new Error(
                `No haiku ending available for ${remaining} syllables.`
            );
        }
        return rand(endings);
    }

    private makeLine(
        total: LineSyllables,
        usedFragments: Set<Fragment>
    ): string {
        const start = this.pickStarter(total, usedFragments);
        usedFragments.add(start);
        const remaining = total - start.syllables;
        const end = this.pickEnding(remaining, usedFragments);
        usedFragments.add(end);
        return `${start.text} ${end.text}`;
    }

    public write(): string {
        const usedFragments = new Set<Fragment>();

        return HAIKU_FORM.map((count) =>
            this.makeLine(count, usedFragments)
        ).join("\n");
    }
}

if (require.main === module) {
    const writer = new HaikuMaker();
    console.log(writer.write());
}
