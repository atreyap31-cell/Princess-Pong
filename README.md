# Princess Pong

Pong for a princess and a senior citizen.

**Play:** https://atreyap31-cell.github.io/Princess-Pong/

## Modes

- **1 Player** — against the bot, with four difficulty levels.
- **2 Players** — same screen, two people.
- **Online** — one player hosts and reads out a 4-digit code, the other joins with it.

## Controls

|            | Player 1        | Player 2        |
| ---------- | --------------- | --------------- |
| Keyboard   | `W` / `S`       | `↑` / `↓`       |
| Touch      | drag the left half of the court | drag the right half |
| Mouse      | click and drag  | click and drag  |

In 1-player and online games either set of keys moves your own paddle, and you can
drag anywhere on the court.

- **Pause:** `Esc`, or the `||` button on the court.
- **Sensitivity:** slider on the main menu and in the pause menu (0.4x–2.5x). Affects
  both drag and keyboard, and is remembered between visits.

## Bot difficulty

| Level  | Behaviour |
| ------ | --------- |
| Easy   | slow paddle, chases the ball loosely, reacts late |
| Medium | moderate speed, still only chases the live ball |
| Hard   | reads the ball's bounce path, occasional mistakes |
| Insane | fast and accurate — beatable, but not often |

## Live commentary

A commentator calls the match from between the scores - goals, near misses, long
rallies, edge returns, streaks, comebacks, shutouts, match point, the closing
seconds, power-ups and the final whistle. 159 written lines across 19 event
types, picked at random and never repeating back to back. In online games the
host's commentary is mirrored to the other player so you both read the same call.

## Sound

Paddle hits (pitched to ball speed), wall bounces, scoring, power-ups and a
win fanfare, all synthesised with the Web Audio API - no audio files, still a
single self-contained `index.html`. Toggle on the main menu or in the pause
menu; the setting is remembered. In online games the host's sounds are
mirrored so both players hear the same match.

## Match stats and crowd approval

The win screen reports the final score, longest rally, top ball speed, biggest
lead, power-ups collected and match time, then rates the match out of 100 -
weighted on how close the finish was, rally length, how often the lead changed
hands, near misses, pace and comebacks. A blowout earns a polite golf clap; a
10-9 thriller earns pandemonium, and the crowd is heard accordingly. Mirrored to
both players online.

## Ball speed

A minimal bar along the bottom of the court tracks the live ball speed, with an
mph readout beside it (a serve is about 21 mph, a maxed-out smash about 112). On
every point a small pill pops up off to the side showing how fast the ball was
travelling when it went in.

## Screen size

If the court does not sit right on your display, the Screen Size slider in
settings scales the whole thing. A dashed frame appears while you drag - pull it
until the frame meets the edges of your screen. Remembered between visits.

## Offline

The game works with no internet at all. A service worker caches everything on
first visit, PeerJS is served from this repo rather than a CDN, and there are no
other external requests - so once you have opened it once it plays offline, and
you can install it to a home screen and launch it like an app.

Online multiplayer is the one exception: it needs a connection for signalling.
The Online menu says so and disables itself when you are offline.

## Re-recording the commentator

Open **[record.html](https://atreyap31-cell.github.io/Princess-Pong/record.html)** and read the lines
out. Nothing is installed and nothing is uploaded - it records in the browser and
keeps your takes in local storage, so you can stop and come back.

- `Space` records and stops, `Enter` moves on, `P` plays back, `R` redoes a take.
- Lines are ordered with the ones you hear most first, and each shows a direction
  (SHOUT THIS, agonised, urgent) so the delivery fits the moment.
- **Export** produces a single `.zip` - the only file you ever download.
- Partial sets are fine. Lines you skip just stay as on-screen text in the game.

## Secrets

- **God modes** (pause menu): *Owen* and *Michael* turn a paddle into a full wall.
- **Chaos mode** (pause menu): power-ups spawn mid-court — green extends the paddle
  that hits it, magenta shrinks the opponent's.
- **The commentator:** a recorded human voice calls the whole match - every goal,
  near miss, rally, comeback and win. Locked by default. Press **PW** on the menu
  and enter the password to unlock it; after that a **Voice** toggle appears in
  settings and the setting is remembered. Until it is unlocked no audio is
  downloaded at all.
- **Admin terminal:** hold `W` + `P` on a keyboard, or long-press the scoreboard on a
  phone. Sets the score, the clock, and auto-play for either paddle.
