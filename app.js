const WORDS = [
  {en:'pen', cn:'钢笔', emoji:'🖊️', phon:'/pen/'},{en:'pencil',cn:'铅笔',emoji:'✏️',phon:'/ˈpensl/'},
  {en:'rubber',cn:'橡皮',emoji:'🧽',phon:'/ˈrʌbə(r)/'},{en:'ruler',cn:'尺子',emoji:'📏',phon:'/ˈruːlə(r)/'},
  {en:'book',cn:'书',emoji:'📘',phon:'/bʊk/'},{en:'school bag',cn:'书包',emoji:'🎒',phon:'/skuːl bæɡ/'},
  {en:'pencil case',cn:'铅笔盒',emoji:'👝',phon:'/ˈpensl keɪs/'},{en:'folder',cn:'文件夹',emoji:'📁',phon:'/ˈfəʊldə(r)/'},
  {en:'door',cn:'门',emoji:'🚪',phon:'/dɔː(r)/'},{en:'window',cn:'窗户',emoji:'🪟',phon:'/ˈwɪndəʊ/'},
  {en:'bookcase',cn:'书架',emoji:'📚',phon:'/ˈbʊkkeɪs/'}
];
const PHONICS = [
  {letter:'Aa',sound:'/æ/',word:'apple',emoji:'🍎'}, {letter:'Bb',sound:'/b/',word:'bird',emoji:'🐦'},
  {letter:'Cc',sound:'/k/',word:'cat',emoji:'🐱'}, {letter:'Dd',sound:'/d/',word:'dog',emoji:'🐶'}
];
const LESSONS = [
  {emoji:'🎒 ✏️ 📘',title:'School things',text:'学校用品',line:'pen · pencil · rubber · ruler · book',say:'School things. Pen, pencil, rubber, ruler, book.'},
  {emoji:'❓',title:"What’s this?",text:'看到一个近处的物品，这样提问。',line:"What’s = What is",say:"What's this? What is this?"},
  {emoji:'📏',title:"It’s a ruler.",text:'用 It’s a… 回答物品名称。',line:"It’s = It is",say:"It's a ruler. It is a ruler."},
  {emoji:'📖 🚪 🪟',title:'Open or close?',text:'听懂并执行课堂指令。',line:'Open the book. Close the door.',say:'Open the book. Close the door. Open the window.'},
  {emoji:'🍎 🐦 🐱 🐶',title:'Aa · Bb · Cc · Dd',text:'字母形状 + 字母名称 + 开头音。',line:'apple · bird · cat · dog',say:'A, apple. B, bird. C, cat. D, dog.'},
  {emoji:'🎒',title:'This is my bag.',text:'用 my 介绍属于自己的物品。',line:'This is my pencil case.',say:'This is my school bag. This is my pencil case.'}
];
const state = {sound:true, wordIndex:0, lessonIndex:0, lessonTimer:null, scores:{}, wordQuiz:{round:0,correct:0,target:null}, question:{round:0,correct:0}, command:{round:0,correct:0,current:null}, phonics:{round:0,correct:0,current:null}, final:{round:0,correct:0,items:[]}};
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];

function load(){try{state.scores=JSON.parse(localStorage.getItem('ff1-unit1-scores'))||{}}catch(e){state.scores={}};updateDashboard()}
function save(){localStorage.setItem('ff1-unit1-scores',JSON.stringify(state.scores));updateDashboard()}
function award(key,stars){state.scores[key]=Math.max(state.scores[key]||0,stars);save();toast(`太棒了！获得 ${stars} 颗星 ★`)}
function updateDashboard(){
  let completed=0,total=0;
  ['lesson','words','question','commands','phonics','final'].forEach(k=>{const n=state.scores[k]||0;if(n)completed++;total+=n;$$(`[data-stars="${k}"]`).forEach(el=>el.textContent='★'.repeat(n)+'☆'.repeat(3-n))});
  $('#totalStars').textContent=total;$('#progressText').textContent=`${completed} / 6`;$('#progressBar').style.width=`${completed/6*100}%`;
}
function showScreen(id){
  $$('.screen').forEach(x=>x.classList.remove('active'));$('#'+id).classList.add('active');window.scrollTo({top:0,behavior:'smooth'});
  clearInterval(state.lessonTimer);if(id==='lesson')renderLesson();if(id==='words')renderWord();if(id==='question')startQuestion();if(id==='commands')startCommands();if(id==='phonics')startPhonics();if(id==='final')startFinal();
}
function speak(text,rate=.82){if(!state.sound||!('speechSynthesis'in window))return; speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='en-GB';u.rate=rate;u.pitch=1.05;speechSynthesis.speak(u)}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function stars(correct,total){const pct=correct/total;return pct>=.9?3:pct>=.65?2:1}
function setFeedback(el,msg,good){el.textContent=msg;el.className='feedback '+(good?'good':'bad')}

$$('[data-screen]').forEach(b=>b.addEventListener('click',()=>showScreen(b.dataset.screen)));
$$('[data-say]').forEach(b=>b.addEventListener('click',()=>speak(b.dataset.say)));
$('#soundToggle').onclick=()=>{state.sound=!state.sound;$('#soundToggle').textContent=state.sound?'🔊':'🔇';toast(state.sound?'声音已打开':'声音已关闭')};
$('#resetBtn').onclick=()=>{if(confirm('要清除所有星星和学习进度吗？')){localStorage.removeItem('ff1-unit1-scores');state.scores={};updateDashboard();toast('进度已清除')}};

function renderLesson(){
  const s=LESSONS[state.lessonIndex];$('#videoScene').innerHTML=`<div class="scene-content"><span class="scene-emoji">${s.emoji}</span><h2>${s.title}</h2><p>${s.text}</p><div class="scene-line">${s.line}</div></div>`;
  $('#videoDots').innerHTML=LESSONS.map((_,i)=>`<i class="${i===state.lessonIndex?'active':''}"></i>`).join('');
}
function lessonStep(dir=1){state.lessonIndex=(state.lessonIndex+dir+LESSONS.length)%LESSONS.length;renderLesson();speak(LESSONS[state.lessonIndex].say)}
$('#videoNext').onclick=()=>lessonStep(1);$('#videoPrev').onclick=()=>lessonStep(-1);
$('#videoPlay').onclick=()=>{clearInterval(state.lessonTimer);let remaining=LESSONS.length;$('#videoPlay').textContent='⏸ 播放中';speak(LESSONS[state.lessonIndex].say);state.lessonTimer=setInterval(()=>{lessonStep(1);remaining--;if(remaining<=0){clearInterval(state.lessonTimer);$('#videoPlay').textContent='↻ 再播放';award('lesson',3)}},4300)};
$('#lessonDone').onclick=()=>award('lesson',3);

function renderWord(){const w=WORDS[state.wordIndex];$('#wordEmoji').textContent=w.emoji;$('#wordEnglish').textContent=w.en;$('#wordPhonetic').textContent=w.phon;$('#wordChinese').textContent=w.cn;$('#wordExample').textContent=`It’s a ${w.en}.`;$('#wordCount').textContent=`${state.wordIndex+1} / ${WORDS.length}`}
function wordStep(d){state.wordIndex=(state.wordIndex+d+WORDS.length)%WORDS.length;renderWord();speak(WORDS[state.wordIndex].en)}
$('#wordPrev').onclick=()=>wordStep(-1);$('#wordNext').onclick=()=>wordStep(1);$('#wordSpeak').onclick=()=>{const w=WORDS[state.wordIndex];speak(`${w.en}. It's a ${w.en}.`)};
$$('[data-wordmode]').forEach(b=>b.onclick=()=>{$$('[data-wordmode]').forEach(x=>x.classList.remove('active'));b.classList.add('active');const quiz=b.dataset.wordmode==='quiz';$('#wordLearn').classList.toggle('hidden',quiz);$('#wordQuiz').classList.toggle('hidden',!quiz);if(quiz)startWordQuiz()});
function startWordQuiz(){state.wordQuiz={round:0,correct:0,target:null};nextWordQuiz()}
function nextWordQuiz(){
  if(state.wordQuiz.round>=5){award('words',stars(state.wordQuiz.correct,5));$('#wordChoices').innerHTML=`<button class="correct" style="grid-column:1/-1">完成！答对 ${state.wordQuiz.correct} / 5<br><small>再玩一次</small></button>`;$('#wordChoices button').onclick=startWordQuiz;return}
  const target=WORDS[Math.floor(Math.random()*WORDS.length)];state.wordQuiz.target=target;state.wordQuiz.round++;$('#wordQuizScore').textContent=`${state.wordQuiz.round} / 5`;$('#wordFeedback').textContent='';
  let choices=shuffle([target,...shuffle(WORDS.filter(x=>x!==target)).slice(0,2)]);$('#wordChoices').innerHTML=choices.map(w=>`<button data-en="${w.en}">${w.emoji}<small>${w.en}</small></button>`).join('');$$('#wordChoices button').forEach(b=>b.onclick=()=>answerWord(b));setTimeout(()=>speak(target.en),250)
}
function answerWord(btn){const ok=btn.dataset.en===state.wordQuiz.target.en;btn.classList.add(ok?'correct':'wrong');if(ok){state.wordQuiz.correct++;setFeedback($('#wordFeedback'),`Yes! ${state.wordQuiz.target.en} ✓`,true);speak(`Yes! ${state.wordQuiz.target.en}.`);setTimeout(nextWordQuiz,850)}else{setFeedback($('#wordFeedback'),'再听一次，你可以的！',false);speak(state.wordQuiz.target.en)}}
$('#quizSpeak').onclick=()=>speak(state.wordQuiz.target?.en||'');

function startQuestion(){state.question={round:0,correct:0};nextQuestion()}
function nextQuestion(){
  if(state.question.round>=6){award('question',stars(state.question.correct,6));$('#questionChoices').innerHTML=`<button class="correct">完成！答对 ${state.question.correct} / 6<br><small>再挑战一次</small></button>`;$('#questionChoices button').onclick=startQuestion;return}
  const target=WORDS[Math.floor(Math.random()*WORDS.length)];state.question.target=target;state.question.round++;$('#questionScore').textContent=`第 ${state.question.round} / 6 题`;$('#questionEmoji').textContent=target.emoji;$('#questionFeedback').textContent='';
  const choices=shuffle([target,...shuffle(WORDS.filter(x=>x!==target)).slice(0,2)]);$('#questionChoices').innerHTML=choices.map(w=>`<button data-en="${w.en}">It’s a ${w.en}.</button>`).join('');$$('#questionChoices button').forEach(b=>b.onclick=()=>{const ok=b.dataset.en===target.en;b.classList.add(ok?'correct':'wrong');if(ok){state.question.correct++;setFeedback($('#questionFeedback'),`Great! It’s a ${target.en}.`,true);speak(`What's this? It's a ${target.en}.`);setTimeout(nextQuestion,1000)}else{setFeedback($('#questionFeedback'),'句子对了，物品再想一想！',false)}})
}

const COMMANDS=[['open','book'],['close','book'],['open','door'],['close','door'],['open','window'],['close','window']];
const cap=s=>s[0].toUpperCase()+s.slice(1);
function startCommands(){state.command={round:0,correct:0,current:null};$('.book-object').classList.add('closed');$('.book-object').classList.remove('open');$('.door-object').classList.add('closed');$('.door-object').classList.remove('open');$('.window-object').classList.add('closed');$('.window-object').classList.remove('open');nextCommand()}
function nextCommand(){
  if(state.command.round>=6){award('commands',stars(state.command.correct,6));$('#actionButtons').innerHTML=`<button class="correct">完成！答对 ${state.command.correct} / 6 · 再玩一次</button>`;$('#actionButtons button').onclick=startCommands;return}
  const current=COMMANDS[Math.floor(Math.random()*COMMANDS.length)];state.command.current=current;state.command.round++;const phrase=`${cap(current[0])} the ${current[1]}.`;$('#commandText').textContent=phrase;$('#commandScore').textContent=`${state.command.round} / 6`;$('#commandFeedback').textContent='';
  const alternatives=shuffle([current,...shuffle(COMMANDS.filter(c=>c.join()!=current.join())).slice(0,2)]);$('#actionButtons').innerHTML=alternatives.map(c=>`<button data-cmd="${c.join('-')}">${cap(c[0])} the ${c[1]}</button>`).join('');$$('#actionButtons button').forEach(b=>b.onclick=()=>answerCommand(b));setTimeout(()=>speak(phrase),300)
}
function answerCommand(btn){const val=btn.dataset.cmd;const correct=state.command.current.join('-');const [action,obj]=val.split('-');const el=$(`#${obj}Object`);el.classList.toggle('open',action==='open');el.classList.toggle('closed',action==='close');const ok=val===correct;btn.classList.add(ok?'correct':'wrong');if(ok){state.command.correct++;setFeedback($('#commandFeedback'),'Good listening! 做对了！',true);setTimeout(nextCommand,1050)}else{setFeedback($('#commandFeedback'),'动作很快！但是要再听清楚哦。',false);speak(`${cap(state.command.current[0])} the ${state.command.current[1]}.`)}}
$('#commandSpeak').onclick=()=>speak(`${cap(state.command.current?.[0]||'open')} the ${state.command.current?.[1]||'book'}.`);

function startPhonics(){state.phonics={round:0,correct:0,current:null};nextPhonic()}
function nextPhonic(){
  if(state.phonics.round>=6){award('phonics',stars(state.phonics.correct,6));$('#phonicChoices').innerHTML=`<button class="correct" style="grid-column:1/-1">完成！答对 ${state.phonics.correct} / 6<br><small>再玩一次</small></button>`;$('#phonicChoices button').onclick=startPhonics;return}
  const target=PHONICS[Math.floor(Math.random()*PHONICS.length)];state.phonics.current=target;state.phonics.round++;$('#phonicLetter').textContent=target.letter;$('#phonicSound').textContent=target.sound;$('#phonicScore').textContent=`${state.phonics.round} / 6`;$('#phonicFeedback').textContent='';
  const choices=shuffle(PHONICS).slice(0,3);if(!choices.includes(target))choices[0]=target;shuffle(choices);$('#phonicChoices').innerHTML=shuffle(choices).map(x=>`<button data-word="${x.word}">${x.emoji}<small>${x.word}</small></button>`).join('');$$('#phonicChoices button').forEach(b=>b.onclick=()=>{const ok=b.dataset.word===target.word;b.classList.add(ok?'correct':'wrong');if(ok){state.phonics.correct++;setFeedback($('#phonicFeedback'),`${target.letter} — ${target.word}!`,true);speak(`${target.letter[0]}. ${target.word}.`);setTimeout(nextPhonic,900)}else{setFeedback($('#phonicFeedback'),`听开头：${target.sound}`,false);speak(`${target.letter[0]}. ${target.sound}.`)}});setTimeout(()=>speak(`${target.letter[0]}. ${target.sound}.`),300)
}
$('#phonicSpeak').onclick=()=>{const p=state.phonics.current;if(p)speak(`${p.letter[0]}. ${p.sound}.`)};

function buildFinal(){
  const items=[];
  shuffle(WORDS).slice(0,4).forEach(w=>items.push({type:'词汇挑战',prompt:w.emoji,answer:`It's a ${w.en}.`,choices:shuffle([w,...shuffle(WORDS.filter(x=>x!==w)).slice(0,2)]).map(x=>`It's a ${x.en}.`)}));
  shuffle(COMMANDS).slice(0,3).forEach(c=>{const phrase=`${cap(c[0])} the ${c[1]}.`;items.push({type:'指令挑战',prompt:`<p>🔊 点击下面正确的指令<br><button class="round-btn" onclick="speak('${phrase}')">🔊</button></p>`,answer:phrase,choices:shuffle([phrase,...shuffle(COMMANDS.filter(x=>x.join()!=c.join())).slice(0,2).map(x=>`${cap(x[0])} the ${x[1]}.`)])})});
  shuffle(PHONICS).slice(0,3).forEach(p=>items.push({type:'拼读挑战',prompt:`${p.letter} <small style="font-size:28px">${p.sound}</small>`,answer:p.word,choices:shuffle([p.word,...shuffle(PHONICS.filter(x=>x!==p)).slice(0,2).map(x=>x.word)])}));return shuffle(items)
}
function startFinal(){state.final={round:0,correct:0,items:buildFinal()};$('#finalCard').classList.remove('hidden');$('#certificate').classList.add('hidden');nextFinal()}
function nextFinal(){
  if(state.final.round>=10){award('final',stars(state.final.correct,10));$('#finalCard').classList.add('hidden');$('#certificate').classList.remove('hidden');$('#finalResult').textContent=`${state.final.correct} / 10`;speak('Wonderful! Unit one completed!');return}
  const item=state.final.items[state.final.round];state.final.current=item;$('#finalRound').textContent=`${state.final.round+1} / 10`;$('#finalBar').style.width=`${(state.final.round+1)*10}%`;$('#finalType').textContent=item.type;$('#finalPrompt').innerHTML=item.prompt;$('#finalFeedback').textContent='';$('#finalChoices').innerHTML=item.choices.map(c=>`<button>${c}</button>`).join('');$$('#finalChoices button').forEach(b=>b.onclick=()=>{const ok=b.textContent===item.answer;b.classList.add(ok?'correct':'wrong');if(ok){state.final.correct++;setFeedback($('#finalFeedback'),'Amazing! 正确！',true);speak(item.answer);state.final.round++;setTimeout(nextFinal,850)}else{setFeedback($('#finalFeedback'),'再想一想，你离答案很近了！',false)}})
}

load();renderWord();renderLesson();
