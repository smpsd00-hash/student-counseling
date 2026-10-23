const menuToggle = document.querySelector("#menuToggle");
const primaryNav = document.querySelector("#primaryNav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.querySelector(".sr-only").textContent = isOpen ? "關閉導覽選單" : "開啟導覽選單";
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      primaryNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.querySelector(".sr-only").textContent = "開啟導覽選單";
    });
  });
}

const moodMessages = {
  happy: {
    label: "開心，值得好好收藏",
    title: "太好了！讓這份好心情多停留一下。",
    body: "想一想，今天有什麼讓你開心的事？可以把它寫下來，或把這份好心情分享給信任的人。也別忘了，開心的時候也可以休息、照顧自己。"
  },
  calm: {
    label: "平靜，是很好的起點",
    title: "感受一下這份安穩。",
    body: "你可以慢慢呼吸，留意身體現在的感覺。平靜時，也很適合整理想法、欣賞身邊的小事，或為接下來的事情做一點準備。"
  },
  worried: {
    label: "焦慮時，先把事情放慢",
    title: "不用一次解決所有事情。",
    body: "試著慢慢吸氣、吐氣三次，再把讓你擔心的事情說清楚：哪些是現在能做的？哪一部分可以請別人幫忙？如果焦慮一直影響生活，可以找信任的師長或家長聊聊。"
  },
  sad: {
    label: "難過時，請溫柔對待自己",
    title: "你可以難過，不必急著好起來。",
    body: "找一個安全、舒服的地方，讓自己休息一下。如果願意，可以向信任的人說說發生了什麼；如果現在還說不清楚，也沒關係。你不需要獨自承受。"
  },
  angry: {
    label: "生氣時，先讓自己安全地停一下",
    title: "感受可以被接納，行動仍可以選擇。",
    body: "先把手上的事情暫停，和讓你生氣的情境保持一點距離，慢慢吐氣，等身體比較平穩後，再說出自己在意什麼、希望事情怎麼改變。若擔心自己會傷害自己或別人，請立即找大人協助。"
  }
};

const moodButtons = document.querySelectorAll(".mood-option");
const moodResult = document.querySelector("#moodResult");

moodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const mood = button.dataset.mood;
    const message = moodMessages[mood];
    if (!message || !moodResult) return;

    moodButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));

    moodResult.innerHTML = `
      <div class="result-sparkle" aria-hidden="true">✦</div>
      <p class="result-label">${message.label}</p>
      <h3>${message.title}</h3>
      <p>${message.body}</p>
      <div class="breathing-line" aria-hidden="true"><span></span><span></span><span></span></div>
      <p class="small-note">這是一般性的自我照顧建議，不是診斷或治療。如果困擾持續或涉及安全，請找可信任的大人或專業人員協助。</p>
    `;
  });
});

const currentYear = document.querySelector("#currentYear");
if (currentYear) currentYear.textContent = new Date().getFullYear();
