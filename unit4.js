const JOBS=[
  {word:'teacher',cn:'老师',emoji:'🧑‍🏫',gender:'she',hint:'tea + cher，开头是 t'},{word:'student',cn:'学生',emoji:'👧',gender:'she',hint:'stu + dent，注意中间有 d'},
  {word:'housewife',cn:'家庭主妇',emoji:'👩‍🍳',gender:'she',hint:'house + wife 两个词合在一起'},{word:'fireman',cn:'消防员',emoji:'👨‍🚒',gender:'he',hint:'fire + man 两个词合在一起'},
  {word:'pilot',cn:'飞行员',emoji:'👨‍✈️',gender:'he',hint:'pi + lot，开头是 p'},{word:'doctor',cn:'医生',emoji:'👩‍⚕️',gender:'she',hint:'doc + tor，开头是 d'},
  {word:'farmer',cn:'农民',emoji:'👨‍🌾',gender:'he',hint:'farm + er，农场 farm 后加 er'},{word:'policeman',cn:'警察',emoji:'👮‍♂️',gender:'he',hint:'police + man 两个词合在一起'},
  {word:'postman',cn:'邮递员',emoji:'📮👨',gender:'he',hint:'post + man 两个词合在一起'},{word:'zookeeper',cn:'动物园管理员',emoji:'🦁🧑',gender:'he',hint:'zoo + keeper 两个词合在一起'}
];
const PHONICS=[
  {letter:'M',sound:'/m/',word:'mum',emoji:'👩',explain:'Mm 发 /m/，双唇闭合再发声：mum。'},
  {letter:'N',sound:'/n/',word:'nurse',emoji:'🧑‍⚕️',explain:'Nn 发 /n/，舌尖轻触上齿龈：nurse。'},
  {letter:'O',sound:'/ɒ/',word:'orange',emoji:'🍊',explain:'Oo 在 orange 开头发短音 /ɒ/。'},
  {letter:'P',sound:'/p/',word:'pen',emoji:'🖊️',explain:'Pp 发 /p/，双唇轻轻送气：pen。'}
];
const SENTENCES=[
  {emoji:'👩‍⚕️',cn:'她是一名医生。',text:"She's a doctor.",explain:"She 指女孩或女性；She is 可以缩写成 She's。"},
  {emoji:'👨‍✈️',cn:'他是一名飞行员。',text:"He's a pilot.",explain:"He 指男孩或男性；He is 可以缩写成 He's。"},
  {emoji:'👧',cn:'她是一名学生。',text:"She's a student.",explain:'职业前面要用 a：a student。'},
  {emoji:'👨‍🚒',cn:'他是消防员吗？',text:'Is he a fireman?',explain:'一般疑问句把 Is 放在最前面：Is + he + a + 职业?'},
  {emoji:'🧑‍🏫',cn:'她是老师吗？',text:'Is she a teacher?',explain:'一般疑问句语序：Is + she + a + 职业?'},
  {emoji:'✅👨‍🌾',cn:'是的，他是。',text:'Yes, he is.',explain:'肯定回答：Yes, + he/she + is。'},
  {emoji:'❌👩‍⚕️',cn:'不，她不是。',text:"No, she isn't.",explain:"否定回答：No, + he/she + isn't。isn't = is not。"},
  {emoji:'✅👩‍🍳',cn:'是的，她是。',text:'Yes, she is.',explain:'女孩或女性用 she，肯定回答最后用 is。'},
  {emoji:'❌👨‍✈️',cn:'不，他不是。',text:"No, he isn't.",explain:"男孩或男性用 he；isn't 是 is not 的缩写。"},
  {emoji:'👮‍♂️',cn:'他是一名警察。',text:"He's a policeman.",explain:'句首大写，职业前加 a，句末加句号。'}
];
const STORY_TEXT="This is my family. My mum is a doctor. She's kind. My dad is a pilot. He's a hero. My sister is a student. My grandpa is a farmer.";
const STORY_QS=[
  {question:'Who is a doctor?',answer:'My mum.',choices:['My mum.','My dad.','My sister.'],explain:'短文说：My mum is a doctor. 所以医生是 mum。'},
  {question:'Is Dad a pilot?',answer:'Yes, he is.',choices:['Yes, he is.',"No, he isn't.",'Yes, she is.'],explain:'短文说：My dad is a pilot. 所以用 Yes, he is.'},
  {question:'Who is a student?',answer:'My sister.',choices:['My sister.','My mum.','My grandpa.'],explain:'短文说：My sister is a student.'},
  {question:'Is Grandpa a doctor?',answer:"No, he isn't.",choices:["No, he isn't.",'Yes, he is.',"No, she isn't."],explain:'Grandpa 是 farmer，不是 doctor；男性用 he。'},
  {question:'Who is kind?',answer:'My mum.',choices:['My mum.','My dad.','My grandpa.'],explain:"She's kind 中的 She 指前一句的 mum。"},
  {question:'Who is a hero?',answer:'My dad.',choices:['My dad.','My sister.','My mum.'],explain:"He's a hero 中的 He 指前一句的 dad。"}
];
const SPEAKING_TARGETS=[
  {text:'teacher',cn:'老师',emoji:'🧑‍🏫',tip:'teacher 有两个音节：tea-cher，开头 /t/ 要清楚。'},
  {text:'student',cn:'学生',emoji:'👧',tip:'student 有两个音节：stu-dent，不要漏掉中间的 d。'},
  {text:'housewife',cn:'家庭主妇',emoji:'👩‍🍳',tip:'housewife = house + wife，两个部分都要读出来。'},
  {text:'fireman',cn:'消防员',emoji:'👨‍🚒',tip:'fireman = fire + man，慢慢连起来。'},
  {text:'pilot',cn:'飞行员',emoji:'👨‍✈️',tip:'pilot 有两个音节：pi-lot。'},
  {text:'doctor',cn:'医生',emoji:'👩‍⚕️',tip:'doctor 有两个音节：doc-tor。'},
  {text:"She's a doctor.",cn:'她是一名医生。',emoji:'👩‍⚕️',tip:"She's 要连读，等于 She is；doctor 前别漏掉 a。"},
  {text:"He's a pilot.",cn:'他是一名飞行员。',emoji:'👨‍✈️',tip:"He's 等于 He is；句子按 He's / a / pilot 分三小段练。"},
  {text:'Is she a teacher?',cn:'她是老师吗？',emoji:'🧑‍🏫',tip:'问句开头 Is 稍重读，结尾语调上扬。'},
  {text:'Yes, she is.',cn:'是的，她是。',emoji:'✅👩',tip:'Yes 后停一下，she 和 is 都要读清楚。'},
  {text:'Is he a student?',cn:'他是学生吗？',emoji:'👦🎒',tip:'不要漏掉职业前面的 a。'},
  {text:"No, he isn't.",cn:'不，他不是。',emoji:'❌👨',tip:"isn't = is not，末尾 /nt/ 要轻轻收住。"}
];

const STORAGE='ff1-unit4-state';
const state={sound:true,jobIndex:0,crowns:0,bestPoints:0,speakingBest:0,done:{},mistakes:[],next:null,jobs:{},grammar:{},spelling:{},sentence:{},story:{},phonics:{},speaking:{index:0,scores:[]},challenge:{},review:{}};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],shuffle=a=>[...a].sort(()=>Math.random()-.5),cap=s=>s[0].toUpperCase()+s.slice(1);
const mobileAudio=new Audio();mobileAudio.id='unit4Player';mobileAudio.preload='auto';mobileAudio.setAttribute('playsinline','');mobileAudio.hidden=true;document.body.appendChild(mobileAudio);
const AUDIO_LOOKUP=new Map();
const audioKey=text=>(text||'').toLowerCase().replace(/[’]/g,"'").replace(/\/([a-zɒ])\//g,'$1').replace(/[^a-zɒ']+/g,' ').trim();
const registerAudio=(text,id)=>AUDIO_LOOKUP.set(audioKey(text),id);
JOBS.forEach(j=>{registerAudio(j.word,j.word);registerAudio(`${j.gender==='he'?"He's":"She's"} a ${j.word}.`,`sent_${j.word}`);registerAudio(`Is he a ${j.word}?`,`q_he_${j.word}`);registerAudio(`Is she a ${j.word}?`,`q_she_${j.word}`)});
[["Sound is ready. Let's learn English!",'sound_ready'],['Yes, he is.','yes_he'],['Yes, she is.','yes_she'],["No, he isn't.",'no_he'],["No, she isn't.",'no_she'],['M. /m/. mum.','phonic_m'],['M. mum. /m/.','phonic_m'],['N. /n/. nurse.','phonic_n'],['N. nurse. /n/.','phonic_n'],['O. /o/. orange.','phonic_o'],['O. orange. /o/.','phonic_o'],['P. /p/. pen.','phonic_p'],['P. pen. /p/.','phonic_p'],[STORY_TEXT,'story'],['Who is a doctor?','story_doctor'],['Is Dad a pilot?','story_dad_pilot'],['Who is a student?','story_student'],['Is Grandpa a doctor?','story_grandpa'],['Who is kind?','story_kind'],['Who is a hero?','story_hero'],['Wonderful! You earned a crown!','great_crown'],['Listen and remember. You can do it!','try_again'],['Jobs complete!','jobs_complete'],['Job listening complete!','listening_complete'],['Grammar complete!','grammar_complete'],['Spelling complete!','spelling_complete'],['Sentence builder complete!','sentence_complete'],['Reading complete!','reading_complete'],['Phonics complete!','phonics_complete'],['Speaking practice complete!','speaking_complete'],['Wonderful! Your speaking is clear. You earned a crown!','speaking_crown']].forEach(([text,id])=>registerAudio(text,id));
[['She is a teacher.','she_teacher_full'],['Is she a teacher?','is_she_teacher'],['He is a doctor.','he_doctor_full'],['Is he a doctor?','is_he_doctor']].forEach(([text,id])=>registerAudio(text,id));
let audioQueue=[],audioQueueToken=0;
function playClipIds(ids){
  if(!state.sound||!window.UNIT4_AUDIO||!ids?.length)return false;
  const playable=ids.filter(id=>window.UNIT4_AUDIO[id]);if(!playable.length)return false;
  const token=++audioQueueToken;audioQueue=[...playable];mobileAudio.pause();
  const next=()=>{if(token!==audioQueueToken||!audioQueue.length)return;const id=audioQueue.shift(),src=window.UNIT4_AUDIO[id];if(!src)return;mobileAudio.src=src;mobileAudio.currentTime=0;mobileAudio.onended=next;const result=mobileAudio.play();if(result?.catch)result.catch(()=>{$('#soundGate')?.classList.add('show')})};
  next();return true;
}
function playRecorded(text){
  if(!window.UNIT4_AUDIO)return false;
  const exact=AUDIO_LOOKUP.get(audioKey(text));
  let ids=exact?[exact]:[];
  if(!ids.length){const parts=(text.match(/[^.!?]+[.!?]?/g)||[]).map(x=>x.trim()).filter(Boolean),partIds=parts.map(x=>AUDIO_LOOKUP.get(audioKey(x)));if(parts.length&&partIds.every(Boolean))ids=partIds}
  return ids.length?playClipIds(ids):false;
}
function replacePupil(value){if(typeof value==='string')return value.replace(/\bpupil\b/gi,'student');if(Array.isArray(value))return value.map(replacePupil);if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,replacePupil(v)]));return value}
function load(){try{const d=JSON.parse(localStorage.getItem(STORAGE))||{};state.crowns=d.crowns||0;state.bestPoints=d.bestPoints||0;state.speakingBest=d.speakingBest||0;state.done=d.done||{};state.mistakes=replacePupil(Array.isArray(d.mistakes)?d.mistakes:[]).map(q=>({...q,explain:q.explain||`正确答案是：${q.answer}`}))}catch{}updateDashboard()}
function save(){localStorage.setItem(STORAGE,JSON.stringify({crowns:state.crowns,bestPoints:state.bestPoints,speakingBest:state.speakingBest,done:state.done,mistakes:state.mistakes}));updateDashboard()}
function preferredVoice(lang='en-GB'){if(!('speechSynthesis'in window))return null;const vs=speechSynthesis.getVoices();const names=lang.startsWith('en')?['Samantha','Ava','Serena','Karen','Moira','Tessa','Sonia','Google UK English Female']:['Ting-Ting','Meijia','Xiaoxiao'];for(const n of names){const v=vs.find(x=>x.name.toLowerCase().includes(n.toLowerCase()));if(v)return v}return vs.find(v=>v.lang.toLowerCase().startsWith(lang.slice(0,2).toLowerCase()))||null}
function say(text,lang='en-GB',rate=.58){if(!state.sound||!text)return;if(playRecorded(text))return;if(!('speechSynthesis'in window)){$('#soundGate')?.classList.add('show');return}const u=new SpeechSynthesisUtterance(text);u.lang=lang;u.rate=rate;u.pitch=1.03;u.volume=.96;const v=preferredVoice(lang);if(v)u.voice=v;speechSynthesis.resume();speechSynthesis.speak(u)}
function updateDashboard(){
  $('#crownCount').textContent=state.crowns;$('#pointCount').textContent=state.bestPoints;$('#mistakeCount').textContent=state.mistakes.length;
  const keys=['learn','jobs','grammar','spelling','sentence','story','phonics','speaking'],done=keys.filter(k=>state.done[k]).length;
  $('#homeProgress').textContent=`${done} / ${keys.length}`;$('#homeProgressBar').style.width=`${done/keys.length*100}%`;
  keys.forEach(k=>{const el=$(`[data-done="${k}"]`);if(el)el.textContent=state.done[k]?'已完成 ✓':'未完成'});
  if($('#speakingBest'))$('#speakingBest').textContent=state.speakingBest;
}
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('show');setTimeout(()=>e.classList.remove('show'),1800)}
function show(id){
  if(id!=='grammar')stopPatternVideo();
  $$('.screen').forEach(x=>x.classList.remove('active'));$('#'+id).classList.add('active');window.scrollTo({top:0,behavior:'smooth'});
  if(id==='learn')renderJob();if(id==='jobs')startJobs();if(id==='grammar')startGrammar();if(id==='spelling')startSpelling();if(id==='sentence')startSentence();if(id==='story')startStory();if(id==='phonics')startPhonics();if(id==='speaking')startSpeaking();if(id==='final')startChallenge();if(id==='review')startReview();
}
$$('[data-screen]').forEach(b=>b.onclick=()=>show(b.dataset.screen));$$('[data-say]').forEach(b=>b.onclick=()=>say(b.dataset.say));
function enableSound(){state.sound=true;$('#soundBtn').textContent='🔊';$('#soundGate').classList.remove('show');playRecorded('Sound is ready. Let\'s learn English!');toast('声音已开启')}
$('#enableSoundBtn').onclick=enableSound;
$('#soundBtn').onclick=()=>{if(!state.sound){enableSound();return}state.sound=false;audioQueueToken++;mobileAudio.pause();if('speechSynthesis'in window)speechSynthesis.cancel();$('#soundBtn').textContent='🔇';toast('声音已关闭，再点一次可打开')};
$('#resetBtn').onclick=()=>{if(confirm('要清除 Unit 4 的皇冠、积分、口语分数和错题本吗？')){state.crowns=0;state.bestPoints=0;state.speakingBest=0;state.done={};state.mistakes=[];localStorage.removeItem(STORAGE);updateDashboard();toast('Unit 4 记录已清除')}};
function pointsFor(correct,total){const r=total?correct/total:0;return r>=.95?5:r>=.85?4:r>=.70?3:r>=.55?2:r>=.40?1:0}
function addMistake(q){if(!q||!q.id)return;const clean={id:q.id,type:q.type,prompt:q.prompt,answer:q.answer,choices:q.choices,say:q.say||q.answer,explain:q.explain||`正确答案是：${q.answer}`};const i=state.mistakes.findIndex(x=>x.id===q.id);if(i<0)state.mistakes.push(clean);else state.mistakes[i]=clean;save()}
function removeMistake(id){state.mistakes=state.mistakes.filter(x=>x.id!==id);save()}
function crown(){state.crowns++;save()}
function feedback(ok,title,text,next,speech){const f=$('#feedback');f.className=`feedback show ${ok?'correct':'wrong'}`;$('#feedbackTitle').textContent=title;$('#feedbackText').textContent=text;$('#feedbackBtn').textContent=ok?'继续 →':'记住了，继续';state.next=next||null;if(ok)crown();say(speech||(ok?'Wonderful! You earned a crown!':'Listen and remember. You can do it!'))}
$('#feedbackBtn').onclick=()=>{const n=state.next;$('#feedback').className='feedback';state.next=null;if(n)n()};
function toggleHint(button,box,text){box.textContent=text;box.classList.toggle('hidden');button.textContent=box.classList.contains('hidden')?'💡 查看解答':'收起解答'}

function jobSentence(j){return `${j.gender==='he'?"He's":"She's"} a ${j.word}.`}
function renderJob(){const j=JOBS[state.jobIndex];$('#jobEmoji').textContent=j.emoji;$('#jobWord').textContent=j.word;$('#jobCn').textContent=j.cn;$('#jobSentence').textContent=jobSentence(j);$('#jobIndex').textContent=`${state.jobIndex+1} / ${JOBS.length}`;$('#jobList').innerHTML=JOBS.map((x,i)=>`<button data-i="${i}" class="${i===state.jobIndex?'active':''}">${x.emoji} ${x.word}</button>`).join('');$$('#jobList button').forEach(b=>b.onclick=()=>{state.jobIndex=Number(b.dataset.i);renderJob();say(JOBS[state.jobIndex].word)})}
$('#jobPrev').onclick=()=>{state.jobIndex=(state.jobIndex+JOBS.length-1)%JOBS.length;renderJob();say(JOBS[state.jobIndex].word)};$('#jobNext').onclick=()=>{state.jobIndex=(state.jobIndex+1)%JOBS.length;renderJob();say(JOBS[state.jobIndex].word)};$('#jobSpeak').onclick=()=>{const j=JOBS[state.jobIndex];say(`${j.word}. ${jobSentence(j)}`)};
$('#learnDone').onclick=()=>{state.done.learn=true;save();feedback(true,'职业图鉴完成！','10 个职业英雄都认识啦！',()=>show('home'),'Jobs complete!')};

function jobQuestion(j,index=0){const options=shuffle([j,...shuffle(JOBS.filter(x=>x!==j)).slice(0,3)]).map(x=>x.word);return{id:`job-${j.word}-${index%2}`,type:'职业听音',prompt:'<span>🔊</span>Which job do you hear?',answer:j.word,choices:options,say:j.word,explain:`${j.word} 的意思是“${j.cn}”。`}}
function startJobs(){state.jobs={round:0,correct:0,crowns:0};nextJobs()}
function nextJobs(){if(state.jobs.round>=10){state.done.jobs=true;save();return feedback(true,'听音站完成！',`第一次答对 ${state.jobs.correct} / 10。错题已加入训练营。`,()=>show('home'),'Job listening complete!')}const j=JOBS[state.jobs.round],q=jobQuestion(j,state.jobs.round);state.jobs.q=q;state.jobs.round++;$('#jobsRound').textContent=`${state.jobs.round} / 10`;$('#jobsChoices').innerHTML=q.choices.map(w=>{const x=JOBS.find(j=>j.word===w);return`<button data-answer="${w}"><span>${x.emoji}</span>${w}</button>`}).join('');$$('#jobsChoices button').forEach(b=>b.onclick=()=>{if(b.dataset.answer===q.answer){state.jobs.correct++;state.jobs.crowns++;$('#jobsCrowns').textContent=state.jobs.crowns;removeMistake(q.id);feedback(true,'皇冠戴好啦！',`${cap(q.answer)}，答对了！`,nextJobs,`${q.answer}. Great job!`)}else{addMistake(q);feedback(false,'这题记下来了',`${q.explain} 最后会再练一次。`,nextJobs,`${q.answer}.`)}});setTimeout(()=>say(q.say),180)}
$('#jobsSpeak').onclick=()=>say(state.jobs.q?.say||'');

const PATTERN_SCENES=[
  {duration:5000,audio:['pattern_intro_cn']},
  {duration:7000,audio:['she_teacher_full','pattern_statement_cn']},
  {duration:7000,audio:['is_she_teacher','pattern_question_cn']},
  {duration:7000,audio:['pattern_magic_cn']},
  {duration:8000,audio:['he_doctor_full','is_he_doctor','pattern_transfer_cn']},
  {duration:6000,audio:['pattern_finish_cn']}
];
const PATTERN_TOTAL=PATTERN_SCENES.reduce((sum,x)=>sum+x.duration,0);
const PATTERN_QUESTIONS=[
  {id:'pattern-meaning',emoji:'🧑‍🏫',title:'She is a teacher.',prompt:'这句话是在“告诉”，还是在“提问”？',answer:'她是一名老师。—— 我在告诉你',choices:['她是一名老师。—— 我在告诉你','她是一名老师吗？—— 我在问你'],say:'She is a teacher.',explain:'She 在最前面，所以这是在告诉别人：她是一名老师。'},
  {id:'pattern-transform',emoji:'👨‍⚕️',title:'我想问：他是一名医生吗？',prompt:'把 He is a doctor. 变成问句，应该选哪一句？',answer:'Is he a doctor?',choices:['Is he a doctor?','He is a doctor.','Is a doctor he?'],say:'Is he a doctor?',explain:'把 is 搬到最前面，再把句号换成问号：Is he a doctor?'}
];
let patternTimer=null,patternElapsed=0,patternScene=-1;
function stopPatternVideo(){if(patternTimer){clearInterval(patternTimer);patternTimer=null}audioQueueToken++;mobileAudio.pause()}
function showPatternScene(index){
  if(index===patternScene)return;patternScene=index;
  $$('.pattern-scene').forEach((el,i)=>el.classList.toggle('active',i===index));
  $$('#patternDots b').forEach((el,i)=>el.classList.toggle('active',i===index));
  playClipIds(PATTERN_SCENES[index].audio);
}
function formatPatternTime(ms){const seconds=Math.floor(ms/1000);return`0:${String(seconds).padStart(2,'0')} / 0:40`}
function updatePatternClock(){
  patternElapsed=Math.min(patternElapsed+200,PATTERN_TOTAL);$('#patternTime').textContent=formatPatternTime(patternElapsed);$('#patternProgress').style.width=`${patternElapsed/PATTERN_TOTAL*100}%`;
  let total=0,index=0;for(let i=0;i<PATTERN_SCENES.length;i++){total+=PATTERN_SCENES[i].duration;if(patternElapsed<total){index=i;break}index=i}
  showPatternScene(index);if(patternElapsed>=PATTERN_TOTAL)finishPatternVideo();
}
function playPatternVideo(){
  stopPatternVideo();patternElapsed=0;patternScene=-1;$('#patternProgress').style.width='0';$('#patternTime').textContent='0:00 / 0:40';$('#patternPlayBtn').classList.add('hidden');$('#patternReplayBtn').classList.add('hidden');$('#patternPractice').classList.add('hidden');$('#patternComplete').classList.add('hidden');showPatternScene(0);patternTimer=setInterval(updatePatternClock,200);
}
function finishPatternVideo(){
  if(patternTimer){clearInterval(patternTimer);patternTimer=null}patternElapsed=PATTERN_TOTAL;$('#patternTime').textContent='0:40 / 0:40';$('#patternProgress').style.width='100%';$('#patternReplayBtn').classList.remove('hidden');state.grammar.mastery=0;state.grammar.masteryCorrect=0;$('#patternPractice').classList.remove('hidden');renderPatternQuestion();setTimeout(()=>$('#patternPractice').scrollIntoView({behavior:'smooth',block:'center'}),250);
}
function renderPatternQuestion(){
  const i=state.grammar.mastery,q=PATTERN_QUESTIONS[i];$('#patternQuestionCount').textContent=`第 ${i+1} 题 / 2`;$('#patternQuestion').innerHTML=`<span>${q.emoji}</span><h3>${q.title}</h3><p>${q.prompt}</p>`;$('#patternChoices').innerHTML=q.choices.map(x=>`<button>${x}</button>`).join('');$('#patternAnswerHelp').classList.add('hidden');$('#patternNextBtn').classList.add('hidden');$('#patternNextBtn').textContent=i===0?'下一题 →':'完成 2 题 ✓';$$('#patternChoices button').forEach(b=>b.onclick=()=>checkPatternAnswer(b,q));say(q.say);
}
function checkPatternAnswer(button,q){
  if(button.textContent===q.answer){$$('#patternChoices button').forEach(b=>b.disabled=true);button.classList.add('correct');$('#patternAnswerHelp').innerHTML=`<b>答对了！</b> ${q.explain}`;$('#patternAnswerHelp').classList.remove('hidden');$('#patternNextBtn').classList.remove('hidden');state.grammar.masteryCorrect++;state.grammar.crowns++;$('#grammarCrowns').textContent=state.grammar.crowns;removeMistake(q.id);crown();say('Wonderful! You earned a crown!')}
  else{button.classList.add('wrong');$('#patternAnswerHelp').innerHTML=`<b>再看一眼口诀：</b>人物在前是告诉，Is 在前是提问。你可以马上再选一次。`;$('#patternAnswerHelp').classList.remove('hidden');addMistake({id:q.id,type:'陈述句和问句',prompt:`<span>${q.emoji}</span>${q.prompt}`,answer:q.answer,choices:q.choices,say:q.say,explain:q.explain});say('Listen and remember. You can do it!')}
}
function finishPatternPractice(){
  state.done.grammar=true;save();$('#patternPractice').classList.add('hidden');$('#patternComplete').classList.remove('hidden');$('#patternComplete').scrollIntoView({behavior:'smooth',block:'center'});say('Wonderful! You earned a crown!');
}
$('#patternPlayBtn').onclick=playPatternVideo;$('#patternReplayBtn').onclick=playPatternVideo;$('#patternNextBtn').onclick=()=>{if(state.grammar.mastery===0){state.grammar.mastery=1;renderPatternQuestion()}else finishPatternPractice()};
$('#startGrammarDrill').onclick=()=>{$('#patternVideo').classList.add('hidden');$('#patternComplete').classList.add('hidden');$('#grammarDrill').classList.remove('hidden');state.grammar.round=0;state.grammar.correct=0;nextGrammar()};

function grammarQuestion(j,round){const ask=round%2===1;if(!ask){const answer=jobSentence(j),wrong1=`${j.gender==='he'?"She's":"He's"} a ${j.word}.`,wrong2=`${j.gender==='he'?'He':'She'} a ${j.word}.`;return{id:`grammar-s-${j.word}`,type:'He / She',prompt:`<span>${j.emoji}</span>${j.cn}`,answer,choices:shuffle([answer,wrong1,wrong2]),say:answer,explain:`${j.gender==='he'?'男性用 He，He is 缩写成 He\'s。':'女性用 She，She is 缩写成 She\'s。'} 职业前要有 a。`}}const claimed=JOBS[(JOBS.indexOf(j)+(round%3===0?1:0))%JOBS.length].word,truth=claimed===j.word,question=`Is ${j.gender} a ${claimed}?`,answer=truth?`Yes, ${j.gender} is.`:`No, ${j.gender} isn't.`;return{id:`grammar-q-${j.word}-${claimed}`,type:'职业问答',prompt:`<span>${j.emoji}</span>${question}`,answer,choices:shuffle([answer,truth?`No, ${j.gender} isn't.`:`Yes, ${j.gender} is.`,`Yes, ${j.gender==='he'?'she':'he'} is.`]),say:question,explain:`图中是 ${j.word}。${truth?'职业相同，用 Yes':'职业不同，用 No'}；${j.gender==='he'?'男性用 he':'女性用 she'}。`}}
function startGrammar(){stopPatternVideo();state.grammar={round:0,correct:0,crowns:0,mastery:0,masteryCorrect:0};$('#grammarCrowns').textContent='0';$('#patternVideo').classList.remove('hidden');$('#patternPractice').classList.add('hidden');$('#patternComplete').classList.add('hidden');$('#grammarDrill').classList.add('hidden');$('#patternPlayBtn').classList.remove('hidden');$('#patternReplayBtn').classList.add('hidden');patternElapsed=0;patternScene=0;$('#patternProgress').style.width='0';$('#patternTime').textContent='0:00 / 0:40';$$('.pattern-scene').forEach((el,i)=>el.classList.toggle('active',i===0));$$('#patternDots b').forEach((el,i)=>el.classList.toggle('active',i===0))}
function nextGrammar(){if(state.grammar.round>=10){state.done.grammar=true;save();return feedback(true,'He / She 通关！',`第一次答对 ${state.grammar.correct} / 10。`,()=>show('home'),'Grammar complete!')}const j=JOBS[state.grammar.round%JOBS.length],q=grammarQuestion(j,state.grammar.round);state.grammar.q=q;state.grammar.round++;$('#grammarRound').textContent=`${state.grammar.round} / 10`;$('#grammarMode').textContent=q.type;$('#grammarPerson').innerHTML=`${j.emoji}<b>${j.word}</b>`;$('#grammarQuestion').textContent=q.say;$('#grammarChoices').innerHTML=q.choices.map(x=>`<button>${x}</button>`).join('');$$('#grammarChoices button').forEach(b=>b.onclick=()=>{if(b.textContent===q.answer){state.grammar.correct++;state.grammar.crowns++;$('#grammarCrowns').textContent=state.grammar.crowns;removeMistake(q.id);feedback(true,'判断正确！',q.answer,nextGrammar,q.answer)}else{addMistake(q);feedback(false,'这题进入错题本',`${q.explain} 正确答案：${q.answer}`,nextGrammar,`${q.say} ${q.answer}`)}});say(q.say)}
$('#grammarSpeak').onclick=()=>say(state.grammar.q?.say||'');

function spellingQuestion(j,index=0){const vowels='aeiou',targetIndex=[...j.word].findIndex((c,i)=>i>0&&vowels.includes(c))>=0?[...j.word].findIndex((c,i)=>i>0&&vowels.includes(c)):Math.min(1,j.word.length-1),answer=j.word[targetIndex],letters=shuffle([...new Set([answer,...shuffle('abcdefghijklmnopqrstuvwxyz'.split('')).slice(0,7)])]).slice(0,4);if(!letters.includes(answer))letters[0]=answer;const pattern=[...j.word].map((c,i)=>i===targetIndex?'_':c).join(' ');return{id:`spell-${j.word}`,type:'职业拼写',prompt:`<span>${j.emoji}</span><b class="mini-pattern">${pattern}</b>`,answer,choices:shuffle(letters),say:j.word,pattern,job:j,explain:`${j.word} 拼作 ${[...j.word].join('-')}。${j.hint}。`}}
function startSpelling(){state.spelling={round:0,correct:0,crowns:0};nextSpelling()}
function nextSpelling(){if(state.spelling.round>=10){state.done.spelling=true;save();return feedback(true,'拼写工坊完成！',`第一次答对 ${state.spelling.correct} / 10。`,()=>show('home'),'Spelling complete!')}const j=JOBS[state.spelling.round],q=spellingQuestion(j,state.spelling.round);state.spelling.q=q;state.spelling.round++;$('#spellingRound').textContent=`${state.spelling.round} / 10`;$('#spellingEmoji').textContent=j.emoji;$('#spellingPattern').textContent=q.pattern;$('#spellingHint').classList.add('hidden');$('#spellingExplain').textContent='💡 拼写提示';$('#spellingChoices').innerHTML=q.choices.map(x=>`<button>${x}</button>`).join('');$$('#spellingChoices button').forEach(b=>b.onclick=()=>{if(b.textContent===q.answer){state.spelling.correct++;state.spelling.crowns++;$('#spellingCrowns').textContent=state.spelling.crowns;removeMistake(q.id);feedback(true,'拼写正确！',q.explain,nextSpelling,q.say)}else{addMistake(q);feedback(false,'差一点点',`${q.explain} 正确字母是 ${q.answer}。`,nextSpelling,q.say)}});say(q.say)}
$('#spellingSpeak').onclick=()=>say(state.spelling.q?.say||'');$('#spellingExplain').onclick=()=>{const q=state.spelling.q;if(q)toggleHint($('#spellingExplain'),$('#spellingHint'),q.explain)};

function sentenceOptions(s){const others=shuffle(SENTENCES.filter(x=>x!==s)).slice(0,2).map(x=>x.text);return shuffle([s.text,...others])}
function sentenceQuestion(s,index=0){return{id:`sentence-${s.text.toLowerCase().replace(/[^a-z]+/g,'-')}`,type:'句子语序',prompt:`<span>${s.emoji}</span>${s.cn}`,answer:s.text,choices:sentenceOptions(s),say:s.text,explain:s.explain}}
function startSentence(){state.sentence={round:0,correct:0,crowns:0,selected:[]};nextSentence()}
function renderSentenceBuilder(){const q=state.sentence.q,selected=state.sentence.selected;$('#sentenceAnswer').innerHTML=selected.length?selected.map((w,i)=>`<button data-remove="${i}">${w}</button>`).join(''):'<span>从下方选词</span>';$('#sentenceWords').innerHTML=q.tokens.map((w,i)=>`<button data-pick="${i}" ${q.used.includes(i)?'disabled':''}>${w}</button>`).join('');$$('[data-pick]').forEach(b=>b.onclick=()=>{const i=Number(b.dataset.pick);q.used.push(i);selected.push(q.tokens[i]);renderSentenceBuilder()});$$('[data-remove]').forEach(b=>b.onclick=()=>{const i=Number(b.dataset.remove),tokenIndex=q.used[i];q.used.splice(i,1);selected.splice(i,1);if(tokenIndex===undefined)return;renderSentenceBuilder()})}
function nextSentence(){if(state.sentence.round>=10){state.done.sentence=true;save();return feedback(true,'句子拼图完成！',`第一次答对 ${state.sentence.correct} / 10。`,()=>show('home'),'Sentence builder complete!')}const index=state.sentence.round,s=SENTENCES[index],q=sentenceQuestion(s,index);q.tokens=shuffle(s.text.split(' '));q.used=[];state.sentence.q=q;state.sentence.selected=[];state.sentence.round++;$('#sentenceRound').textContent=`${state.sentence.round} / 10`;$('#sentenceCue').innerHTML=`<span>${s.emoji}</span><b>${s.cn}</b>`;$('#sentenceHint').classList.add('hidden');$('#sentenceExplain').textContent='💡 语序解答';renderSentenceBuilder()}
$('#sentenceReset').onclick=()=>{state.sentence.selected=[];state.sentence.q.used=[];renderSentenceBuilder()};
$('#sentenceCheck').onclick=()=>{const q=state.sentence.q,built=state.sentence.selected.join(' ');if(built===q.answer){state.sentence.correct++;state.sentence.crowns++;$('#sentenceCrowns').textContent=state.sentence.crowns;removeMistake(q.id);feedback(true,'句子拼对了！',q.explain,nextSentence,q.say)}else{addMistake(q);feedback(false,'语序再记一记',`${q.explain} 正确句子：${q.answer}`,nextSentence,q.say)}};
$('#sentenceExplain').onclick=()=>{const q=state.sentence.q;if(q)toggleHint($('#sentenceExplain'),$('#sentenceHint'),`${q.explain} 正确语序：${q.answer}`)};

function storyQuestion(item,index=0){return{id:`story-${item.question.toLowerCase().replace(/[^a-z]+/g,'-')}`,type:'听读理解',prompt:`<span>📖</span>${item.question}`,answer:item.answer,choices:shuffle(item.choices),say:item.question,explain:item.explain}}
function startStory(){state.story={round:0,correct:0,crowns:0};$('#storyText').classList.add('blurred');$('#storyReveal').textContent='👀 显示文字';nextStory()}
function nextStory(){if(state.story.round>=STORY_QS.length){state.done.story=true;save();return feedback(true,'英雄一家读完啦！',`第一次答对 ${state.story.correct} / ${STORY_QS.length}。`,()=>show('home'),'Reading complete!')}const i=state.story.round,q=storyQuestion(STORY_QS[i],i);state.story.q=q;state.story.round++;$('#storyRound').textContent=`${state.story.round} / ${STORY_QS.length}`;$('#storyQuestion').textContent=q.say;$('#storyHint').classList.add('hidden');$('#storyExplain').textContent='💡 查看解答';$('#storyChoices').innerHTML=q.choices.map(x=>`<button>${x}</button>`).join('');$$('#storyChoices button').forEach(b=>b.onclick=()=>{if(b.textContent===q.answer){state.story.correct++;state.story.crowns++;$('#storyCrowns').textContent=state.story.crowns;removeMistake(q.id);feedback(true,'读懂啦！',q.explain,nextStory,q.answer)}else{addMistake(q);feedback(false,'回到短文找线索',`${q.explain} 正确答案：${q.answer}`,nextStory,q.answer)}});say(q.say)}
$('#storyListen').onclick=()=>say(STORY_TEXT,'en-GB',.54);$('#storyReveal').onclick=()=>{const hidden=$('#storyText').classList.toggle('blurred');$('#storyReveal').textContent=hidden?'👀 显示文字':'🙈 隐藏文字'};$('#storyQuestionSpeak').onclick=()=>say(state.story.q?.say||'');$('#storyExplain').onclick=()=>{const q=state.story.q;if(q)toggleHint($('#storyExplain'),$('#storyHint'),q.explain)};

function phonicQuestion(p,round){return{id:`phonic-${p.letter}-${round%4}`,type:'自然拼读',prompt:`<span>${p.letter}</span>${p.letter} says ${p.sound}`,answer:p.word,choices:shuffle([p.word,...shuffle(PHONICS.filter(x=>x!==p)).slice(0,2).map(x=>x.word)]),say:`${p.letter}. ${p.sound}. ${p.word}.`,explain:p.explain}}
function startPhonics(){state.phonics={round:0,correct:0,crowns:0};nextPhonics()}
function nextPhonics(){if(state.phonics.round>=8){state.done.phonics=true;save();return feedback(true,'声音密码完成！',`第一次答对 ${state.phonics.correct} / 8。`,()=>show('home'),'Phonics complete!')}const p=PHONICS[state.phonics.round%4],q=phonicQuestion(p,state.phonics.round);state.phonics.q=q;state.phonics.round++;$('#phonicsRound').textContent=`${state.phonics.round} / 8`;$('#phonicLetter').textContent=p.letter;$('#phonicSound').textContent=p.sound;$('#phonicsChoices').innerHTML=q.choices.map(w=>{const x=PHONICS.find(p=>p.word===w);return`<button data-answer="${w}"><span>${x.emoji}</span>${w}</button>`}).join('');$$('#phonicsChoices button').forEach(b=>b.onclick=()=>{if(b.dataset.answer===q.answer){state.phonics.correct++;state.phonics.crowns++;$('#phonicsCrowns').textContent=state.phonics.crowns;removeMistake(q.id);feedback(true,'首音配对成功！',q.explain,nextPhonics,q.say)}else{addMistake(q);feedback(false,'听开头的声音',`${q.explain} 正确答案：${p.word}`,nextPhonics,q.say)}});say(`${p.letter}. ${p.sound}.`)}
$('#phonicsSpeak').onclick=()=>say(state.phonics.q?.say||'');

let mediaRecorder=null,mediaStream=null,audioChunks=[],recognition=null,recognizedText='',recordTimer=null,recordUrl='';
function startSpeaking(){state.speaking={index:0,scores:[]};renderSpeaking()}
function renderSpeaking(){const i=state.speaking.index,t=SPEAKING_TARGETS[i];$('#speakingRound').textContent=`${i+1} / ${SPEAKING_TARGETS.length}`;$('#speakingEmoji').textContent=t.emoji;$('#speakingTarget').textContent=t.text;$('#speakingCn').textContent=t.cn;$('#scoreIdle').classList.remove('hidden');$('#scoreResult').classList.add('hidden');$('#recordPlayback').classList.add('hidden');$('#retryRecord').classList.add('hidden');$('#recordBtn').classList.remove('recording');$('#recordBtn b').textContent='按一下开始录音';$('#recordBtn small').textContent='允许麦克风后，大声读目标句'}
function normalizeSpeech(s){return (s||'').toLowerCase().replace(/[’']/g,"'").replace(/she's/g,'she is').replace(/he's/g,'he is').replace(/isn't/g,'is not').replace(/[^a-z\s]/g,'').replace(/\s+/g,' ').trim()}
function editDistance(a,b){const m=Array.from({length:a.length+1},()=>Array(b.length+1).fill(0));for(let i=0;i<=a.length;i++)m[i][0]=i;for(let j=0;j<=b.length;j++)m[0][j]=j;for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++)m[i][j]=Math.min(m[i-1][j]+1,m[i][j-1]+1,m[i-1][j-1]+(a[i-1]===b[j-1]?0:1));return m[a.length][b.length]}
function scoreSpeech(expected,heard){const e=normalizeSpeech(expected).split(' ').filter(Boolean),h=normalizeSpeech(heard).split(' ').filter(Boolean),distance=editDistance(e,h);return Math.max(0,Math.round((1-distance/Math.max(e.length,h.length,1))*100))}
function showSpeechResult(heard){const t=SPEAKING_TARGETS[state.speaking.index],score=heard?scoreSpeech(t.text,heard):0,e=normalizeSpeech(t.text).split(' '),h=normalizeSpeech(heard).split(' ');state.speaking.scores[state.speaking.index]=score;state.speakingBest=Math.max(state.speakingBest,score);save();$('#scoreIdle').classList.add('hidden');$('#scoreResult').classList.remove('hidden');$('#speechScore').textContent=heard?score:'—';$('#speechHeard').textContent=heard||'本次没有识别到文字，请播放录音自己听一听，或换 Chrome/Edge 再试。';$('#speechPraise').textContent=score>=90?'太棒了，发音很清楚！':score>=75?'很好，再清楚一点就满分！':score>=50?'有进步，慢一点再试试！':'别着急，先听示范再跟读。';$('#wordFeedback').innerHTML=e.map((w,i)=>`<span class="${h[i]===w?'word-ok':'word-fix'}">${w}<small>${h[i]===w?'✓':`听成 ${h[i]||'—'}`}</small></span>`).join('');const missing=e.filter(w=>!h.includes(w));$('#speechCorrection').innerHTML=`<b>纠正建议</b><p>${missing.length?`重点再读：${missing.join('、')}。`:'每个词都听到了！'} ${t.tip}</p>`;$('#speechExplanation').textContent=`“${t.text}” 的意思是“${t.cn}”。${t.tip}`;$('#speechExplanation').classList.add('hidden');$('#speechExplain').textContent='💡 中文讲解';if(score>=85){crown();removeMistake(`speech-${state.speaking.index}`);say('Wonderful! Your speaking is clear. You earned a crown!')}else{addMistake({id:`speech-${state.speaking.index}`,type:'口语加强',prompt:`<span>${t.emoji}</span>选出刚才要读的正确句子`,answer:t.text,choices:shuffle([t.text,...SPEAKING_TARGETS.filter(x=>x!==t).slice(0,2).map(x=>x.text)]),say:t.text,explain:`请慢慢跟读：${t.text}。${t.tip}`})}}
async function beginRecording(){try{recognizedText='';audioChunks=[];mediaStream=await navigator.mediaDevices.getUserMedia({audio:true});mediaRecorder=new MediaRecorder(mediaStream);mediaRecorder.ondataavailable=e=>{if(e.data.size)audioChunks.push(e.data)};mediaRecorder.onstop=()=>{const blob=new Blob(audioChunks,{type:mediaRecorder.mimeType||'audio/webm'});if(recordUrl)URL.revokeObjectURL(recordUrl);recordUrl=URL.createObjectURL(blob);$('#recordPlayback').src=recordUrl;$('#recordPlayback').classList.remove('hidden');$('#retryRecord').classList.remove('hidden');mediaStream?.getTracks().forEach(t=>t.stop());showSpeechResult(recognizedText)};mediaRecorder.start();const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(SR){recognition=new SR();recognition.lang='en-GB';recognition.interimResults=true;recognition.continuous=false;recognition.onresult=e=>{recognizedText=[...e.results].map(r=>r[0].transcript).join(' ')};recognition.onerror=()=>{};recognition.onend=()=>{if(mediaRecorder?.state==='recording')stopRecording()};try{recognition.start()}catch{}}$('#recordBtn').classList.add('recording');$('#recordBtn b').textContent='正在录音…再按一下结束';$('#recordBtn small').textContent='大声、慢慢读，最多 8 秒';recordTimer=setTimeout(stopRecording,8000)}catch(err){toast(err.name==='NotAllowedError'?'需要允许麦克风，才能录音':'无法启动麦克风，请检查浏览器设置');$('#speechSupport').textContent='请在浏览器地址栏的权限设置中允许麦克风，然后重新录音。'}}
function stopRecording(){clearTimeout(recordTimer);try{recognition?.stop()}catch{}if(mediaRecorder?.state==='recording')mediaRecorder.stop();$('#recordBtn').classList.remove('recording');$('#recordBtn b').textContent='录音完成';$('#recordBtn small').textContent='可以播放自己的声音'}
$('#recordBtn').onclick=()=>mediaRecorder?.state==='recording'?stopRecording():beginRecording();$('#retryRecord').onclick=beginRecording;$('#speakingModel').onclick=()=>say(SPEAKING_TARGETS[state.speaking.index].text,'en-GB',.48);$('#speechExplain').onclick=()=>toggleHint($('#speechExplain'),$('#speechExplanation'),$('#speechExplanation').textContent);$('#nextSpeaking').onclick=()=>{if(state.speaking.index>=SPEAKING_TARGETS.length-1){state.done.speaking=true;save();const avg=Math.round(state.speaking.scores.reduce((a,b)=>a+b,0)/Math.max(state.speaking.scores.length,1));return feedback(true,'口语训练完成！',`本轮平均 ${avg} 分，最佳 ${state.speakingBest} 分。`,()=>show('home'),'Speaking practice complete!')}state.speaking.index++;renderSpeaking()};

function buildChallenge(){const qs=[];shuffle(JOBS).slice(0,4).forEach((j,i)=>qs.push(jobQuestion(j,i)));shuffle(JOBS).slice(0,4).forEach((j,i)=>qs.push(grammarQuestion(j,i+1)));shuffle(JOBS).slice(0,3).forEach((j,i)=>qs.push(spellingQuestion(j,i)));shuffle(SENTENCES).slice(0,3).forEach((s,i)=>qs.push(sentenceQuestion(s,i)));shuffle(PHONICS).slice(0,3).forEach((p,i)=>qs.push(phonicQuestion(p,i)));shuffle(STORY_QS).slice(0,3).forEach((q,i)=>qs.push(storyQuestion(q,i)));return shuffle(qs)}
function startChallenge(){state.challenge={round:0,correct:0,total:0,questions:buildChallenge()};$('#challengeCard').classList.remove('hidden');$('#challengeResult').classList.add('hidden');$('#challengeAccuracy').textContent='0 / 0';$('#livePoints').textContent='0';nextChallenge()}
function nextChallenge(){if(state.challenge.round>=20)return finishChallenge();const q=state.challenge.questions[state.challenge.round];state.challenge.q=q;state.challenge.round++;$('#challengeRound').textContent=`${state.challenge.round} / 20`;$('#challengeBar').style.width=`${state.challenge.round/20*100}%`;$('#challengeType').textContent=q.type;$('#challengePrompt').innerHTML=q.prompt;$('#challengeHint').classList.add('hidden');$('#challengeExplain').textContent='💡 看解答';$('#challengeChoices').innerHTML=q.choices.map(x=>`<button>${x}</button>`).join('');$$('#challengeChoices button').forEach(b=>b.onclick=()=>{state.challenge.total++;const ok=b.textContent===q.answer;if(ok){state.challenge.correct++;removeMistake(q.id);feedback(true,'又戴上一顶皇冠！',q.explain,nextChallenge,q.say)}else{addMistake(q);feedback(false,'错题已记住',`${q.explain} 正确答案：${q.answer}`,nextChallenge,q.say)}$('#challengeAccuracy').textContent=`${state.challenge.correct} / ${state.challenge.total}`;$('#livePoints').textContent=pointsFor(state.challenge.correct,state.challenge.total)});say(q.say)}
$('#challengeSpeak').onclick=()=>say(state.challenge.q?.say||'');$('#challengeExplain').onclick=()=>{const q=state.challenge.q;if(q)toggleHint($('#challengeExplain'),$('#challengeHint'),`${q.explain} 正确答案：${q.answer}`)};
function finishChallenge(){const pts=pointsFor(state.challenge.correct,20);state.bestPoints=Math.max(state.bestPoints,pts);save();$('#challengeCard').classList.add('hidden');$('#challengeResult').classList.remove('hidden');$('#earnedPoints').textContent=pts;$('#resultSummary').textContent=`首次答对 ${state.challenge.correct} / 20；获得 ${pts} 分。${state.mistakes.length?`还有 ${state.mistakes.length} 道需要加强。`:'错题已经全部清空！'}`;$('#goReview').textContent=state.mistakes.length?'进入错题加强复习 →':'领取完成证书 →';$('#certPoints').textContent=`${pts} / 5`;$('#goReview').onclick=()=>state.mistakes.length?show('review'):show('certificate')}

function startReview(){$('#reviewLeft').textContent=state.mistakes.length;if(!state.mistakes.length){$('#reviewCard').classList.add('hidden');$('#reviewEmpty').classList.remove('hidden');return}$('#reviewCard').classList.remove('hidden');$('#reviewEmpty').classList.add('hidden');nextReview()}
function nextReview(){if(!state.mistakes.length){$('#reviewCard').classList.add('hidden');$('#reviewEmpty').classList.remove('hidden');$('#reviewLeft').textContent=0;setTimeout(()=>show('certificate'),900);return}const q=state.mistakes[0];state.review.q=q;$('#reviewLeft').textContent=state.mistakes.length;$('#reviewType').textContent=q.type;$('#reviewPrompt').innerHTML=q.prompt;$('#reviewHint').classList.add('hidden');$('#reviewExplain').textContent='💡 查看解答';$('#reviewChoices').innerHTML=shuffle(q.choices).map(x=>`<button>${x}</button>`).join('');$$('#reviewChoices button').forEach(b=>b.onclick=()=>{if(b.textContent===q.answer){removeMistake(q.id);feedback(true,'这道错题掌握啦！','已经从错题本移除。',nextReview,q.say)}else feedback(false,'再想一次',`${q.explain} 错题训练中要答对才能过关。`,nextReview,q.say)});say(q.say)}
$('#reviewSpeak').onclick=()=>say(state.review.q?.say||'');$('#reviewExplain').onclick=()=>{const q=state.review.q;if(q)toggleHint($('#reviewExplain'),$('#reviewHint'),`${q.explain} 正确答案：${q.answer}`)};

load();renderJob();
if(window.matchMedia?.('(pointer: coarse)').matches||/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||new URLSearchParams(location.search).has('mobiletest'))$('#soundGate').classList.add('show');
