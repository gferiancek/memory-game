// All Hiragana characters and their EN equivalent, excluding combination sounds.
const HIRAGANA = [
  { jp: 'あ', en: 'a' },
  { jp: 'い', en: 'i' },
  { jp: 'う', en: 'u' },
  { jp: 'え', en: 'e' },
  { jp: 'お', en: 'o' },
  { jp: 'か', en: 'ka' },
  { jp: 'き', en: 'ki' },
  { jp: 'く', en: 'ku' },
  { jp: 'け', en: 'ke' },
  { jp: 'こ', en: 'ko' },
  { jp: 'さ', en: 'sa' },
  { jp: 'し', en: 'shi' },
  { jp: 'す', en: 'su' },
  { jp: 'せ', en: 'se' },
  { jp: 'そ', en: 'so' },
  { jp: 'た', en: 'ta' },
  { jp: 'ち', en: 'chi' },
  { jp: 'つ', en: 'tsu' },
  { jp: 'て', en: 'te' },
  { jp: 'と', en: 'to' },
  { jp: 'な', en: 'na' },
  { jp: 'に', en: 'ni' },
  { jp: 'ぬ', en: 'nu' },
  { jp: 'ね', en: 'ne' },
  { jp: 'の', en: 'no' },
  { jp: 'は', en: 'ha' },
  { jp: 'ひ', en: 'hi' },
  { jp: 'ふ', en: 'fu' },
  { jp: 'へ', en: 'he' },
  { jp: 'ほ', en: 'ho' },
  { jp: 'ま', en: 'ma' },
  { jp: 'み', en: 'mi' },
  { jp: 'む', en: 'mu' },
  { jp: 'め', en: 'me' },
  { jp: 'も', en: 'mo' },
  { jp: 'や', en: 'ya' },
  { jp: 'ゆ', en: 'yu' },
  { jp: 'よ', en: 'yo' },
  { jp: 'ら', en: 'ra' },
  { jp: 'り', en: 'ri' },
  { jp: 'る', en: 'ru' },
  { jp: 'れ', en: 're' },
  { jp: 'ろ', en: 'ro' },
  { jp: 'わ', en: 'wa' },
  { jp: 'を', en: 'wo' },
  { jp: 'ん', en: 'n' },
  { jp: 'が', en: 'ga' },
  { jp: 'ぎ', en: 'gi' },
  { jp: 'ぐ', en: 'gu' },
  { jp: 'げ', en: 'ge' },
  { jp: 'ご', en: 'go' },
  { jp: 'ざ', en: 'za' },
  { jp: 'じ', en: 'ji' },
  { jp: 'ず', en: 'zu' },
  { jp: 'ぜ', en: 'ze' },
  { jp: 'ぞ', en: 'zo' },
  { jp: 'だ', en: 'da' },
  { jp: 'ぢ', en: 'dzi' },
  { jp: 'づ', en: 'dzu' },
  { jp: 'で', en: 'de' },
  { jp: 'ど', en: 'do' },
  { jp: 'ば', en: 'ba' },
  { jp: 'び', en: 'bi' },
  { jp: 'ぶ', en: 'bu' },
  { jp: 'べ', en: 'be' },
  { jp: 'ぼ', en: 'bo' },
  { jp: 'ぱ', en: 'pa' },
  { jp: 'ぴ', en: 'pi' },
  { jp: 'ぷ', en: 'pu' },
  { jp: 'ぺ', en: 'pe' },
  { jp: 'ぽ', en: 'po' },
];

// All Katakana characters and their EN equivalent, excluding combination sounds.
const KATAKANA = [
  { jp: 'ア', en: 'a' },
  { jp: 'イ', en: 'i' },
  { jp: 'ウ', en: 'u' },
  { jp: 'エ', en: 'e' },
  { jp: 'オ', en: 'o' },
  { jp: 'カ', en: 'ka' },
  { jp: 'キ', en: 'ki' },
  { jp: 'ク', en: 'ku' },
  { jp: 'ケ', en: 'ke' },
  { jp: 'コ', en: 'ko' },
  { jp: 'サ', en: 'sa' },
  { jp: 'シ', en: 'shi' },
  { jp: 'ス', en: 'su' },
  { jp: 'セ', en: 'se' },
  { jp: 'ソ', en: 'so' },
  { jp: 'タ', en: 'ta' },
  { jp: 'チ', en: 'chi' },
  { jp: 'ツ', en: 'tsu' },
  { jp: 'テ', en: 'te' },
  { jp: 'ト', en: 'to' },
  { jp: 'ナ', en: 'na' },
  { jp: 'ニ', en: 'ni' },
  { jp: 'ヌ', en: 'nu' },
  { jp: 'ネ', en: 'ne' },
  { jp: 'ノ', en: 'no' },
  { jp: 'ハ', en: 'ha' },
  { jp: 'ヒ', en: 'hi' },
  { jp: 'フ', en: 'fu' },
  { jp: 'ヘ', en: 'he' },
  { jp: 'ホ', en: 'ho' },
  { jp: 'マ', en: 'ma' },
  { jp: 'ミ', en: 'mi' },
  { jp: 'ム', en: 'mu' },
  { jp: 'メ', en: 'me' },
  { jp: 'モ', en: 'mo' },
  { jp: 'ヤ', en: 'ya' },
  { jp: 'ユ', en: 'yu' },
  { jp: 'ヨ', en: 'yo' },
  { jp: 'ラ', en: 'ra' },
  { jp: 'リ', en: 'ri' },
  { jp: 'ル', en: 'ru' },
  { jp: 'レ', en: 're' },
  { jp: 'ロ', en: 'ro' },
  { jp: 'ワ', en: 'wa' },
  { jp: 'ヲ', en: 'wo' },
  { jp: 'ン', en: 'n' },
  { jp: 'ガ', en: 'ga' },
  { jp: 'ギ', en: 'gi' },
  { jp: 'グ', en: 'gu' },
  { jp: 'ゲ', en: 'ge' },
  { jp: 'ゴ', en: 'go' },
  { jp: 'ザ', en: 'za' },
  { jp: 'ジ', en: 'ji' },
  { jp: 'ズ', en: 'zu' },
  { jp: 'ゼ', en: 'ze' },
  { jp: 'ゾ', en: 'zo' },
  { jp: 'ダ', en: 'da' },
  { jp: 'ヂ', en: 'dzi' },
  { jp: 'ヅ', en: 'dzu' },
  { jp: 'デ', en: 'de' },
  { jp: 'ド', en: 'do' },
  { jp: 'バ', en: 'ba' },
  { jp: 'ビ', en: 'bi' },
  { jp: 'ブ', en: 'bu' },
  { jp: 'ベ', en: 'be' },
  { jp: 'ボ', en: 'bo' },
  { jp: 'パ', en: 'pa' },
  { jp: 'ピ', en: 'pi' },
  { jp: 'プ', en: 'pu' },
  { jp: 'ペ', en: 'pe' },
  { jp: 'ポ', en: 'po' },
];

// Src determines which list to use for the game.
const SRC_SETTINGS = {
  hiragana: HIRAGANA,
  katakana: KATAKANA,
};

// Difficulty determines the # of pairs in the game.
const BATCH_SIZE = {
  easy: 6,
  medium: 8,
  hard: 10,
};
