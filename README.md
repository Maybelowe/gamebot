## First change `config.js` file
`You can change owner number, packname, foot, author, botname, etc.`
```js
global.owner = [
  ['628885960825', 'Akmalz', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit

// Sticker WM
global.packname = ''
global.author = '@akmall.kz'
global.foot = '2022 @ Metro Bot'
global.botname = 'Metro Bot'

global.multiplier = 71 // The higher, The harder levelup
```

## Install
```
git clone https://github.com/Maybelowe/gamebot.git
cd gamebot
npm i
```

## Run
```
npm start
```

---------

# **BELOW IS OPTIONAL**❗

## Arguments `node . [--options] [<session name>]`

### `--self`

Activate self mode (Ignores other)

### `--pconly`

If that chat not from private bot, bot will ignore

### `--gconly`

If that chat not from group, bot will ignore

### `--swonly`

If that chat not from status, bot will ignore

### `--prefix <prefixes>`

* `prefixes` are seperated by each character
Set prefix

### `--server`

Used for [heroku](https://heroku.com/), [replit](https://replit.com) or scan through website

### `--restrict`

Enables restricted plugins (which can lead your number to be **banned** if used too often)

* Group Administration `add, kick`

### `--img`

Enable image inspector through terminal

### `--autoread`

If enabled, all incoming messages will be marked as read

### `--autocleartmp`

If enabled, **tmp* folder contain files will be auto delete

### `--nyimak`

No bot, just print received messages and add users to database

### `--test`

**Development** Testing Mode

### `--db`

pass mongodb url or cloud url to connect to database, by the default it will connect to database.json

### `--singleauth`

you can convert single file auth to multiple file auth using this argument, it will convert if you have single file auth and folder multi auth is empty (creds.json is not exist)

---------

## FAQ
### How to send button image?
```js
// Syntax
conn.sendButton(
      jid, // jid of the user to send the message to
      text, // text to send
      foooter, // footer to send
      buffer, // buffer to send (optional), if you want to send button image, location, etc
      buttons, // buttons to send, example [['text1', 'id1'], ['text2', 'id2']]
      quoted, // quoted message to send (optional)
      options // options to send, example { asLocation: true }
)

// example 
conn.sendButton(m.chat, 'Hello world!', '@ Metro Bot', null, [
      ['Hello', 'hello'], ['Bye', 'bye']
])
// example button location
conn.sendButton(m.chat, 'Hello world!', '@ Metro Bot', 'https://instagram.com/akmall.kz', 
      [['Hello', 'hello'], ['Bye', 'bye']], 
      null, { asLocation: true }
)
```
