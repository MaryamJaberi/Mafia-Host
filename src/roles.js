/** Role catalog for میز خدا — Mafia Host. Pure data, no DOM. */
export const ROLES = {
  godfather: { id: "godfather", name: "پدرخوانده", team: "mafia", act: "shot", inquiryAs: "town", desc: "رئیس مافیا. شلیک شب با اوست. در استعلام شهروند دیده می‌شود." },
  mafiaboss: { id: "mafiaboss", name: "رئیس مافیا", team: "mafia", act: "shot", inquiryAs: "mafia", desc: "رئیس تیم مافیا در سناریوی مذاکره." },
  mafia: { id: "mafia", name: "مافیای ساده", team: "mafia", act: null, inquiryAs: "mafia", desc: "با تیم بیدار می‌شود و مشورت می‌دهد." },
  saul: { id: "saul", name: "ساول", team: "mafia", act: "buy", inquiryAs: "mafia", desc: "می‌تواند یک شهروند ساده را بخرد (یک‌بار)." },
  matador: { id: "matador", name: "ماتادور", team: "mafia", act: "block", inquiryAs: "mafia", desc: "یک نقش شهری را برای همان شب بلاک می‌کند." },
  negotiator: { id: "negotiator", name: "مذاکره‌کننده", team: "mafia", act: "negotiate", inquiryAs: "mafia", desc: "پس از خروج یک مافیا می‌تواند با شهروند ساده مذاکره کند." },
  doctor: { id: "doctor", name: "دکتر", team: "town", act: "save", inquiryAs: "town", desc: "هر شب یک نفر را نجات می‌دهد." },
  watson: { id: "watson", name: "واتسون", team: "town", act: "save", inquiryAs: "town", desc: "پزشک سناریوی پدرخوانده؛ نجات شبانه." },
  detective: { id: "detective", name: "کارآگاه", team: "town", act: "inquire", inquiryAs: "town", desc: "هر شب از یک نفر استعلام می‌گیرد. پدرخوانده منفی دیده می‌شود." },
  citizenkane: { id: "citizenkane", name: "همشهری کین", team: "town", act: "inquire", inquiryAs: "town", desc: "استعلام وضعیت." },
  leon: { id: "leon", name: "لئون", team: "town", act: "snipe", oneShot: true, inquiryAs: "town", desc: "یک شلیک در کل بازی." },
  sniper: { id: "sniper", name: "اسنایپر", team: "town", act: "snipe", oneShot: true, inquiryAs: "town", desc: "یک شلیک در کل بازی." },
  armored: { id: "armored", name: "زره‌پوش", team: "town", act: null, armor: true, inquiryAs: "town", desc: "اولین شلیک مافیا را زنده می‌ماند." },
  constantine: { id: "constantine", name: "کنستانتین", team: "town", act: "revive", oneShot: true, inquiryAs: "town", desc: "یک‌بار می‌تواند یک نفر را برگرداند." },
  reporter: { id: "reporter", name: "خبرنگار", team: "town", act: "inquire", inquiryAs: "town", desc: "بعد از مذاکره استعلام می‌گیرد." },
  mayor: { id: "mayor", name: "شهردار", team: "town", act: null, inquiryAs: "town", desc: "رأی روزش می‌تواند دو برابر باشد." },
  citizen: { id: "citizen", name: "شهروند ساده", team: "town", act: null, inquiryAs: "town", desc: "نقش ساده شهر." },
  nostradamus: { id: "nostradamus", name: "نوستراداموس", team: "independent", act: "predict", inquiryAs: "town", desc: "مستقل. دو حدس مافیا = برد مستقل." }
};
export function roleName(id) { return ROLES[id]?.name || id; }
export function teamOf(id) { return ROLES[id]?.team || "town"; }
export function inquiryResult(targetRoleId) {
  const role = ROLES[targetRoleId];
  if (!role) return { positive: false, text: "نامشخص", side: "town" };
  const side = role.inquiryAs || (role.team === "mafia" ? "mafia" : "town");
  const positive = side === "mafia";
  return { positive, side, text: positive ? "مثبت — مافیا" : "منفی — شهر" };
}
