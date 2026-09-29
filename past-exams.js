// IPAが公開するITパスポート試験の問題冊子・解答例を使った年度別演習。
// IPAは解説を公開していないため、解説文は本アプリ独自の学習補助です。
const PAST_EXAMS=[
  {year:2026,reiwa:'令和8年度',file:'2026r08',pages:56,answers:'AACBDDBCBDDDCABABAABCDBADABBCACCCADCDBCACBBBBCCCACDABCCDCACABDCCDBBDCDABDADDCDCDAAADDDAABCCBABBABCBC'},
  {year:2025,reiwa:'令和7年度',file:'2025r07',pages:54,answers:'CCBDCBBBCDDDCBABAAABBCCDACBDBDBCABDADDABDAADABDACADABAAABCADCACBABBCBDDBCACCBDACDCCBBDCBADDACBCCACCA'},
  {year:2024,reiwa:'令和6年度',file:'2024r06',pages:52,answers:'DBCBBDBCABBADACBDCCBCCACAABABDDBDDDADBDABBBADDCBADDACCCBCDBBADABCDCCBCBCDDDCCADADBDDDCDACADCBABCBBCB'},
  {year:2023,reiwa:'令和5年度',file:'2023r05',pages:52,answers:'DADBDCABBDCCDADDCCCCCCBADBBADAADBCAAABCCCDDCACADAADDADBBDCDABDBCABCDBAACBDCCCBCDAADDCAACBBDDDDABBBCD'},
  {year:2022,reiwa:'令和4年度',file:'2022r04',pages:52,answers:'DBCABCBDAABDDADDCADBBBBDABDDABDDAABABDACBADDDBCCADBBDCAACBDDDAAAAABAACBACACBBBBDACCDAAABCABBAACDDBAC'},
  {year:2021,reiwa:'令和3年度',file:'2021r03',pages:50,answers:'CDCACCAADDDCCBACADABBADACCCCAAABCCADDBDAADCCACBDCADBBDABDACCBABDDDAACACABDABDDCADBADBCDBBDBBAACDCDAB'},
  {year:2020,reiwa:'令和2年度',file:'2020r02',pages:50,answers:'CBBCBAABBDDCBBBACDCABBBDDCACBDBADACAAADBDADAAAADDDDCBBDCBDCAAABACACCDBCDDCCBABBDDCCCBAABADCADBDACCDA'},
].map(exam=>({...exam,questionPdf:`assets/past-exams/${exam.file}_ip_qs.pdf`,answerPdf:`assets/past-exams/${exam.file}_ip_ans.pdf`}));

const PAST_DOMAIN_INFO={
  'ストラテジ系':{
    range:[1,35],
    explanation:'企業活動、法律、経営戦略などの知識を使う問題です。問題文の「目的」と、選択肢が説明している言葉の意味を対応させるのがポイントです。',
    junior:'会社や社会のルールについての問題です。「何のためにするのか」を先に見つけ、いちばん目的に合う答えを選びましょう。',
    advice:'経営用語と法律を、用語名だけでなく「誰が・何のために使うか」のセットで復習しましょう。'
  },
  'マネジメント系':{
    range:[36,55],
    explanation:'開発工程、プロジェクト管理、サービス管理、監査の問題です。担当者の役割と、作業を行う順番を整理すると判断しやすくなります。',
    junior:'システムを作る人たちの仕事の進め方についての問題です。「いつ」「だれが」「何を確かめるか」を順番に並べて考えましょう。',
    advice:'工程・担当者・成果物の3点を表にして、似た管理用語の違いを復習しましょう。'
  },
  'テクノロジ系':{
    range:[56,100],
    explanation:'コンピュータ、ネットワーク、データベース、セキュリティなどの仕組みを問う問題です。図や数値の条件を一つずつ分けて確認しましょう。',
    junior:'コンピュータが動く仕組みについての問題です。知らない言葉があっても、図・数字・「安全にする方法」などの手掛かりを一つずつ拾いましょう。',
    advice:'ネットワークとセキュリティを優先し、計算問題は式を書いてから単位をそろえる練習をしましょう。'
  }
};

function pastDomain(questionNumber){
  return Object.entries(PAST_DOMAIN_INFO).find(([,info])=>questionNumber>=info.range[0]&&questionNumber<=info.range[1])?.[0]||'テクノロジ系';
}
