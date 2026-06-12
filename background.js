const SOCIAL = [
  'youtube.com', 'facebook.com', 'instagram.com', 'twitter.com', 'x.com', 'tiktok.com',
  'reddit.com', 'snapchat.com', 'tumblr.com', 'pinterest.com', 'threads.net',
  'telegram.org', 'quora.com', 'medium.com', 'patreon.com', 'deviantart.com',
  'flickr.com', 'behance.net', 'dribbble.com', 'artstation.com'
];

const STREAMING = [
  'twitch.tv', 'netflix.com', 'hulu.com', 'disneyplus.com', 'hbomax.com', 'primevideo.com',
  'max.com', 'paramountplus.com', 'peacocktv.com',
  'dailymotion.com', 'vimeo.com', 'spotify.com', 'soundcloud.com', 'tubitv.com',
  'fubo.tv', 'sling.com', 'pluto.tv', 'roku.com', 'plex.tv'
];

const ADULT = [
  'pornhub.com', 'xvideos.com', 'xhamster.com', 'xnxx.com', 'redtube.com', 'youporn.com',
  'spankbang.com', 'beeg.com', 'chaturbate.com', 'livejasmin.com', 'stripchat.com',
  'cams.com', 'cam4.com', 'camsoda.com', 'myfreecams.com', 'bongacams.com',
  'onlyfans.com', 'brazzers.com', 'bangbros.com', 'mofos.com', 'naughtyamerica.com',
  'realitykings.com', 'teamskeet.com', 'twistys.com', 'vixen.com', 'tushy.com',
  'blacked.com', 'youjizz.com', 'tube8.com', 'eporner.com', 'tnaflix.com',
  'sex.com', 'xxx.com', 'porn.com', 'literotica.com',
  'imlive.com', 'manyvids.com', 'clips4sale.com', 'kink.com', 'adultwork.com',
  'keezmovies.com', 'sunporno.com', 'extremetube.com', 'spankwire.com', 'hclips.com',
  'porndude.com', 'pornpics.com', 'vrporn.com', 'nudevista.com', 'freeones.com',
  'wikifeet.com', 'iafd.com', 'boobpedia.com',
  'flingster.com', 'shagle.com', 'camwhores.tv', 'strepcam.com', 'royalcams.com'
];

const DATING = [
  'tinder.com', 'badoo.com', 'bumble.com', 'grindr.com', 'okcupid.com', 'plentyoffish.com',
  'match.com', 'eharmony.com', 'zoosk.com', 'hinge.com', 'happn.com', 'scruff.com',
  'jackd.com', 'feeld.co', 'theleague.com', 'adultfriendfinder.com', 'ashleymadison.com',
  'seeking.com', 'fling.com', 'adult.com', 'fetlife.com'
];

const GAMING = [
  'steamcommunity.com', 'steampowered.com', 'roblox.com', 'fortnite.com', 'minecraft.net',
  'epicgames.com', 'leagueoflegends.com', 'chess.com', 'lichess.org', 'nintendo.com',
  'xbox.com', 'playstation.com', 'rockstargames.com', 'blizzard.com', 'battle.net',
  'ubisoft.com', 'activision.com', 'ea.com', 'callofduty.com', 'destinythegame.com',
  'ign.com', 'gamespot.com', 'kotaku.com', 'polygon.com', 'pcgamer.com', 'eurogamer.net',
  'king.com', 'zynga.com', 'boardgamearena.com'
];

const PIRACY = [
  'thepiratebay.org', '1337x.to', 'yts.mx', 'soap2day.to', 'solarmovie.to',
  '123movies.com', 'fmovies.to', 'putlocker.so', 'watchserieshd.co', 'eztv.io',
  'torrentgalaxy.to', 'kickasstorrents.to', 'limetorrents.info', 'rarbg.to',
  'streamtape.com', 'doodstream.com', 'mixdrop.co', 'savefrom.net', 'y2mate.com'
];

const ANIME = [
  'crunchyroll.com', 'funimation.com', 'gogoanime.tv', '9anime.to', 'zoro.to',
  'myanimelist.net', 'mangadex.org', 'animenewsnetwork.com', 'anilist.co',
  'bilibili.com', 'nicovideo.jp', 'hidive.com', 'kissanime.nz',
  'manganato.com', 'mangakakalot.com', 'mangasee123.com', 'mangabat.com',
  'sankakucomplex.com', 'gelbooru.com', 'danbooru.donmai.us', 'e621.net',
  'nhentai.net', 'hentaihaven.com', 'hanime.tv'
];

const SPORTS = [
  'espn.com', 'nba.com', 'nfl.com', 'mlb.com', 'nhl.com', 'wwe.com', 'ufc.com',
  'skysports.com', 'eurosport.com', 'beinsports.com', 'bleacherreport.com',
  'goal.com', 'transfermarkt.com', 'flashscore.com', 'livescore.com', 'onefootball.com'
];

const GOSSIP = [
  'tmz.com', 'eonline.com', 'people.com', 'hollywoodreporter.com', 'variety.com',
  'deadline.com', 'rollingstone.com', 'billboard.com', 'usmagazine.com', 'pagesix.com',
  'vanityfair.com', 'vogue.com', 'cosmopolitan.com', 'elle.com', 'buzzfeed.com'
];

const MEMES = [
  '9gag.com', 'imgur.com', 'knowyourmeme.com', 'giphy.com', 'tenor.com', 'imgflip.com',
  'ifunny.co', 'cheezburger.com', 'thechive.com', 'memegenerator.net', 'funnyordie.com'
];

const GAMBLING = [
  'bet365.com', 'draftkings.com', 'fanduel.com', 'betmgm.com', '888.com',
  'pokerstars.com', 'partypoker.com', 'betfair.com', 'betway.com', 'leovegas.com'
];

const CHAT = [
  'omegle.com', 'chatroulette.com', 'tinychat.com', 'chatrandom.com',
  'bazoocam.org', 'faceflow.com', 'coomeet.com', 'chat-avenue.com',
  '4chan.org', '8chan.se', 'discord.com'
];

const BLOCKED_DOMAINS = [
  ...SOCIAL, ...STREAMING, ...ADULT, ...DATING, ...GAMING, ...PIRACY,
  ...ANIME, ...SPORTS, ...GOSSIP, ...MEMES, ...GAMBLING, ...CHAT
];

let allowedSites = {};

function loadAllowedSites() {
  return new Promise((resolve) => {
    chrome.storage.local.get('allowedSites', (data) => {
      allowedSites = data.allowedSites || {};
      const now = Date.now();
      let changed = false;
      for (const domain of Object.keys(allowedSites)) {
        if (allowedSites[domain] <= now) {
          delete allowedSites[domain];
          changed = true;
        }
      }
      if (changed) {
        chrome.storage.local.set({ allowedSites });
      }
      resolve();
    });
  });
}

const EXCLUDED_SUBDOMAINS = ['music.youtube.com'];

function getBlockedDomain(url) {
  try {
    const hostname = new URL(url).hostname.toLowerCase();
    if (EXCLUDED_SUBDOMAINS.includes(hostname)) return null;
    for (const domain of BLOCKED_DOMAINS) {
      if (hostname === domain || hostname.endsWith('.' + domain)) {
        return domain;
      }
    }
  } catch (e) {}
  return null;
}

function isCurrentlyAllowed(domain) {
  if (allowedSites[domain] && Date.now() < allowedSites[domain]) {
    return true;
  }
  return false;
}

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  if (details.frameId !== 0) return;

  const url = details.url;
  if (!url.startsWith('http://') && !url.startsWith('https://')) return;
  if (url.startsWith('chrome://') || url.startsWith('chrome-extension://')) return;

  const blockedDomain = getBlockedDomain(url);
  if (!blockedDomain) return;
  if (isCurrentlyAllowed(blockedDomain)) return;

  const blockedUrl = chrome.runtime.getURL('blocked.html') +
    '?site=' + encodeURIComponent(blockedDomain) +
    '&original=' + encodeURIComponent(url);

  chrome.tabs.update(details.tabId, { url: blockedUrl });
}, {
  url: [{ schemes: ['http', 'https'] }]
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'allowSite') {
    const domain = message.domain;
    const expiry = Date.now() + 30 * 60 * 1000;
    allowedSites[domain] = expiry;
    chrome.storage.local.set({ allowedSites: allowedSites }, () => {
      chrome.alarms.create('unblock_' + domain, { delayInMinutes: 30 });
      sendResponse({ success: true, expiry: expiry });
    });
    return true;
  }

  if (message.action === 'getAllowedStatus') {
    const domain = message.domain;
    const isAllowed = isCurrentlyAllowed(domain);
    let minsRemaining = 0;
    if (isAllowed) {
      minsRemaining = Math.round((allowedSites[domain] - Date.now()) / 60000);
    }
    sendResponse({ allowed: isAllowed, minsRemaining: minsRemaining });
    return true;
  }

  if (message.action === 'getBlockedList') {
    const now = Date.now();
    const list = {};
    for (const domain of Object.keys(allowedSites)) {
      if (allowedSites[domain] > now) {
        list[domain] = {
          expiry: allowedSites[domain],
          minsRemaining: Math.round((allowedSites[domain] - now) / 60000)
        };
      }
    }
    sendResponse({ sites: list });
    return true;
  }
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name.startsWith('unblock_')) {
    const domain = alarm.name.replace('unblock_', '');
    loadAllowedSites().then(() => {
      delete allowedSites[domain];
      chrome.storage.local.set({ allowedSites });
    });
  }
});

chrome.runtime.onInstalled.addListener(() => {
  loadAllowedSites();
});

loadAllowedSites();