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
seconds, power-ups and the final whistle. 157 written lines across 19 event
types, picked at random and never repeating back to back. In online games the
host's commentary is mirrored to the other player so you both read the same call.

## Sound

Paddle hits (pitched to ball speed), wall bounces, scoring, power-ups and a
win fanfare, all synthesised with the Web Audio API - no audio files, still a
single self-contained `index.html`. Toggle on the main menu or in the pause
menu; the setting is remembered. In online games the host's sounds are
mirrored so both players hear the same match.

## Match stats

The win screen reports the final score, longest rally, top ball speed, biggest
lead, power-ups collected and match time. Mirrored to both players online.

## Secrets

- **God modes** (pause menu): *Owen* and *Michael* turn a paddle into a full wall.
- **Chaos mode** (pause menu): power-ups spawn mid-court — green extends the paddle
  that hits it, magenta shrinks the opponent's.
- **Admin terminal:** hold `W` + `P` on a keyboard, or long-press the scoreboard on a
  phone. Sets the score, the clock, and auto-play for either paddle.
