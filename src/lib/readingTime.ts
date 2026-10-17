// Minutes to read a case study, the way Medium estimates it: words at 200 a minute, plus time to look at
// images (12 seconds for the first, one second less for each after, never under 3 seconds).
export function readingTime(body = ''): number {
  const images = (body.match(/<(Img|Banner|BeforeAfter)\b/g) ?? []).length;
  const words = body.replace(/<[^>]*>|\{[^}]*\}|[#*_`>|-]/g, ' ').split(/\s+/).filter(Boolean).length;
  let seconds = (words / 200) * 60;
  for (let i = 0; i < images; i++) seconds += Math.max(3, 12 - i);
  return Math.max(1, Math.round(seconds / 60));
}
