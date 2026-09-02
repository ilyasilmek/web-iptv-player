/**
 * M3U / M3U8 Playlist Parser
 * Parses extended M3U format with attributes like tvg-logo, group-title, tvg-id, etc.
 */

export function parseM3U(content) {
  if (!content || typeof content !== string) {
    return { channels: [], groups: [] };
  }

  const lines = content.split(/\r?\n/);
  const channels = [];
  const groupsSet = new Set();

  let currentChannel = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) continue;

    if (line.startsWith(#EXTINF:)) {
      currentChannel = extractExtInfData(line);
    } else if (line.startsWith(#EXTGRP:) && currentChannel) {
      // Direct group tag support
      const grp = line.replace(#EXTGRP:, ").trim();
 if (grp) {
 currentChannel.group = grp;
 }
 } else if (!line.startsWith(#)) {
 // It's a stream URL
 if (currentChannel) {
 currentChannel.url = line;
 
 // Infer group if missing
 if (!currentChannel.group) {
 currentChannel.group = Genel;
 }

 // Infer resolution if missing
 if (!currentChannel.resolution) {
 currentChannel.resolution = detectResolution(currentChannel.name);
 }

 // Add to groups
 groupsSet.add(currentChannel.group);

 channels.push(currentChannel);
 currentChannel = null;
 } else if (line.startsWith(http://) || line.startsWith(https://)) {
 // Standalone URL without EXTINF
 const title = line.split(/).pop().split(?)[0] || Kanal  + (channels.length + 1);
 channels.push({
 id: ch- + Math.random().toString(36).substr(2, 9),
 name: title,
 group: Genel,
 logo: ,
 url: line,
 resolution: detectResolution(title)
 });
 groupsSet.add(Genel);
 }
 }
 }

 return {
 channels,
 groups: Array.from(groupsSet).sort()
 };
}

function extractExtInfData(line) {
 // Example: #EXTINF:-1 tvg-id=TRT1 tvg-name=TRT 1 tvg-logo=http://...logo.png group-title=Ulusal,TRT 1 HD
 const channel = {
 id: ch- + Math.random().toString(36).substr(2, 9),
 name: İsimsiz Kanal,
 group: Genel,
 logo: ,
 url: ,
 resolution: HD
 };

 // Extract attributes using regex
 const tvgIdMatch = line.match(/tvg-id=([^]*)/i);
  if (tvgIdMatch && tvgIdMatch[1]) channel.tvgId = tvgIdMatch[1];

  const tvgNameMatch = line.match(/tvg-name=([^]*)/i);
 if (tvgNameMatch && tvgNameMatch[1]) channel.tvgName = tvgNameMatch[1];

 const logoMatch = line.match(/tvg-logo=([^]*)/i);
  if (logoMatch && logoMatch[1]) channel.logo = logoMatch[1];

  const groupMatch = line.match(/group-title=([^]*)/i);
 if (groupMatch && groupMatch[1]) channel.group = groupMatch[1];

 const countryMatch = line.match(/tvg-country=([^]*)/i);
  if (countryMatch && countryMatch[1]) channel.country = countryMatch[1];

  // Channel title after last comma
  const commaIndex = line.lastIndexOf(,);
  if (commaIndex !== -1 && commaIndex < line.length - 1) {
    const rawTitle = line.substring(commaIndex + 1).trim();
    if (rawTitle) {
      channel.name = rawTitle;
    }
  } else if (channel.tvgName) {
    channel.name = channel.tvgName;
  }

  return channel;
}

function detectResolution(title) {
  if (!title) return HD;
  const upper = title.toUpperCase();
  if (upper.includes(4K) || upper.includes(UHD) || upper.includes(2160P)) return 4K;
  if (upper.includes(FHD) || upper.includes(1080P) || upper.includes(1080I)) return FHD;
  if (upper.includes(HD) || upper.includes(720P)) return HD;
  if (upper.includes(SD) || upper.includes(576P) || upper.includes(480P)) return SD;
  return HD;
}
