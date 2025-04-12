/*
export default async (req, context) => {
  const { question } = await req.json()

  const GROQ_API_KEY = "YOUR_GROQ_API_KEY_HERE"; // <<< 這裡換成你的 API Key
  const MODEL = "llama3-70b-8192"; // 最新 LLaMA3 模型（Groq 專用）
  
  if (!GROQ_API_KEY) {
    return new Response("Missing API Key", { status: 401 });
  }

  const tarotContext = `
你是一位智慧溫柔的塔羅牌占卜師，擅長以詩意與直覺解讀牌義，幫助使用者看見內心世界的指引。
請根據以下提問，結合塔羅牌的象徵與人性的洞察，給出一段具有啟發性的預言文字。
  `;

  const messages = [
    { role: "system", content: tarotContext },
    { role: "user", content: `問題是：「${question}」，請進行塔羅占卜並給出回應。` }
  ];

  const completion = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${GROQ_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: MODEL,
      messages,
      temperature: 0.8,
    }),
  });

  const data = await completion.json();
  const responseText = data.choices?.[0]?.message?.content || "無法解析的預言，請再試一次。";

  return new Response(JSON.stringify({ result: responseText }), {
    headers: { "Content-Type": "application/json" },
  });
};
*/

// netlify/functions/tarot.js

// 將來這邊可以串接 LLM API，現在先 mock
// 🚧 TODO: replace this with real LLM call
const tarotDeck = [
  "The Fool - 象徵新的開始與冒險",
  "The Magician - 象徵創造力與掌控力",
  "The High Priestess - 象徵直覺與神秘",
  "The Empress - 象徵豐饒與自然",
  "The Emperor - 象徵秩序與穩定",
  "The Hierophant - 象徵傳統與教導",
  "The Lovers - 象徵愛與選擇",
  "The Chariot - 象徵意志力與勝利",
  "Strength - 象徵內在力量與同理心",
  "The Hermit - 象徵智慧與獨處",
  "Wheel of Fortune - 象徵命運的轉變",
  "Justice - 象徵公正與真相",
  "The Hanged Man - 象徵新的視角與犧牲",
  "Death - 象徵轉化與重生",
  "Temperance - 象徵平衡與節制",
  "The Devil - 象徵束縛與誘惑",
  "The Tower - 象徵突如其來的變動",
  "The Star - 象徵希望與靈感",
  "The Moon - 象徵潛意識與幻覺",
  "The Sun - 象徵快樂與光明",
  "Judgement - 象徵覺醒與反省",
  "The World - 象徵圓滿與完成"
];

exports.handler = async function(event, context) {
  const card = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `（測試結果）你抽到了：「${card}」`
    })
  };
};

