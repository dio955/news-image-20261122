# The World Today — 22 November 2026

[![news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122)

A front-page collage summing up the world's news of **Sunday 22 November 2026**,
built for the make.fun bounty [Sum up 22 November's world news in one image](https://make.fun/bounty/news-image-20261122).

The day's main story is the COP31 climate talks deadlocked over fossil fuels,
with nearly 200 nations split. Around it: Iran's strikes on a US air base in
Kuwait, the magnitude 6.9 earthquake in Peru's Andes, the Trump–Xi–Putin
trilateral in Shenzhen, and the tanker attacked in the Strait of Hormuz — plus
the day's other headlines in the strip at the foot of the page.

## How it works

`main.ts` (Node 22, standard library only) copies `frontpage.jpg` — the
1024×1024 front page held in this repository — to `/output/entry.png`
(`$MAKEFUN_OUTPUT_DIR` outside the grader's container). No network, no
randomness: two runs write the same bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
