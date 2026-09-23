const translations = {
  zh: {
    pageTitle: 'AI 虚拟陪伴数字纪念网站', pageDescription: '用照片、性格与回忆，创建一份只保存在当前设备的虚拟陪伴档案。',
    brand: 'AI 虚拟陪伴数字纪念网站', brandAria: 'AI 虚拟陪伴数字纪念网站首页', localOnly: '资料仅保存在此设备',
    createProfile: '创建陪伴档案', heroTitle: '把想念，轻轻放在这里', heroIntro: '上传一张照片，告诉我们你记得的样子。这个版本不会把资料发送到服务器。',
    who: 'TA 是谁？', kindAria: '对象类型', person: '一个人', pet: '一只动物', choosePhoto: '选择一张最熟悉的照片', photoHint: 'JPG、PNG 或 WebP，最大 10MB', changePhoto: '点击可更换照片', restoredPhoto: '已恢复保存在此设备的照片',
    nameLabel: 'TA 的名字', namePlaceholder: '例如：小雨 / 奶糖', relationLabel: '你们的关系', relationPetLabel: 'TA 是你的', relationPersonPlaceholder: '例如：外婆 / 最好的朋友', relationPetPlaceholder: '例如：家人 / 从小陪我的猫',
    remembered: '你记得的 TA', traitsLegend: '选择最贴近的性格', traitGentle: '温柔', traitCheerful: '爱笑', traitQuiet: '安静', traitHumorous: '幽默', traitReserved: '有点嘴硬',
    expressionLabel: 'TA 说话或表达的方式', expressionPersonPlaceholder: '例如：总是先问我有没有好好吃饭', expressionPetPlaceholder: '例如：听见钥匙声就跑到门口，开心时会轻轻叫',
    memoryLabel: '一段你想保存的回忆', memoryPlaceholder: '写下一件真实发生过的小事。陪伴对话会以这段资料为边界，不替你编造新的回忆。',
    confirmCreate: '确认与创建', consent: '我确认有权使用这些照片和资料，并理解生成的角色是基于资料创作的 AI 形象，不是真实的人或动物。', createButton: '创建陪伴档案',
    previewAria: '陪伴档案预览', sampleAlt: '原创示例陪伴形象', personProfile: '人物档案', petProfile: '动物档案', creating: '正在创建', noName: '还没有名字', emptyRelation: '填入资料后，这里会慢慢变成你熟悉的样子。', relationPreview: '你记忆里的{name}', waitingDescription: '等待你的描述', emptyMemory: '“真正重要的回忆，不需要被重新编写。”',
    trustTitle: '这是纪念与陪伴，不是复刻生命', trustText: '系统会始终明确告知：所有回应来自 AI，并可能与真实对象不同。',
    editProfile: '修改档案', aiExperience: 'AI 陪伴体验', companionSpace: '陪伴空间', avatarAlt: '陪伴对象头像', roomTitle: '和{name}说说话', roomDescription: '{name}的回应只参考你保存的资料，不代表真实的{kind}。', kindPerson: '人物', kindPet: '动物',
    chatLabel: '想说的话', chatPlaceholder: '写下你此刻想说的话…', send: '发送', chatDisclaimer: '体验模式：目前使用安全的本地回应逻辑，不会联网，也不会假装拥有真实记忆。', aiLabel: 'AI 生成 · 体验模式',
    greetingPerson: '你好，我是根据你保存的资料创建的陪伴形象。关于{name}，我不会假装知道你没有告诉我的事，但我愿意听你慢慢说。', greetingPet: '我在这里。你可以和我说说今天发生了什么，也可以一起想念{name}。',
    invalidType: '请选择 JPG、PNG 或 WebP 图片。', tooLarge: '照片不能超过 10MB。', photoRequired: '请先选择一张照片。', fieldsRequired: '请补充名字、关系和一段真实回忆。', consentRequired: '请先确认资料使用权和 AI 形象说明。', saveFailed: '当前浏览器无法保存资料，请检查隐私设置后重试。',
    petReplies: ['如果{name}此刻在你身边，也许会用它熟悉的方式靠近你。你愿意再讲讲那段回忆吗？', '我听见了。关于{name}，你保存下来的这些细节很珍贵。', '我们不替{name}说它没有说过的话，但可以一起把你记得的样子留久一点。'],
    personReplies: ['我听见你在想{name}。你写下的那段回忆很重要，愿意告诉我当时还有什么细节吗？', '我不能代替{name}回答，也不会编造新的记忆；但你可以把想说的话慢慢说完。', '你记得{name}{traits}。今天是什么让你想起了 TA？'],
    traitsPhrase: '是{traits}的', traitsFallback: '有很独特的样子'
  },
  en: {
    pageTitle: 'AI Virtual Companion & Digital Memorial', pageDescription: 'Create a private virtual companion profile from photos, personality, and real memories.',
    brand: 'AI Virtual Companion & Digital Memorial', brandAria: 'AI Virtual Companion and Digital Memorial home', localOnly: 'Data stays on this device',
    createProfile: 'Create a companion profile', heroTitle: 'A gentle place for the memories you carry', heroIntro: 'Upload a photo and describe the person or animal you remember. This version does not send your information to a server.',
    who: 'Who are you remembering?', kindAria: 'Companion type', person: 'A person', pet: 'An animal', choosePhoto: 'Choose a familiar photo', photoHint: 'JPG, PNG, or WebP · up to 10MB', changePhoto: 'Click to choose another photo', restoredPhoto: 'Photo restored from this device',
    nameLabel: 'Their name', namePlaceholder: 'For example: Maya / Mochi', relationLabel: 'Your relationship', relationPetLabel: 'They were your', relationPersonPlaceholder: 'For example: grandmother / best friend', relationPetPlaceholder: 'For example: family / my childhood cat',
    remembered: 'How you remember them', traitsLegend: 'Choose the traits that feel closest', traitGentle: 'Gentle', traitCheerful: 'Cheerful', traitQuiet: 'Quiet', traitHumorous: 'Humorous', traitReserved: 'Reserved but caring',
    expressionLabel: 'How they spoke or expressed themselves', expressionPersonPlaceholder: 'For example: always asked whether I had eaten', expressionPetPlaceholder: 'For example: ran to the door at the sound of my keys',
    memoryLabel: 'A memory you want to preserve', memoryPlaceholder: 'Write down one real moment. The companion experience uses this information as a boundary and will not invent new shared memories.',
    confirmCreate: 'Confirm and create', consent: 'I confirm that I have the right to use these photos and details, and I understand that the generated character is an AI interpretation—not the real person or animal.', createButton: 'Create companion profile',
    previewAria: 'Companion profile preview', sampleAlt: 'Original sample companion illustration', personProfile: 'Person profile', petProfile: 'Animal profile', creating: 'Profile preview', noName: 'No name yet', emptyRelation: 'As you add details, this profile will begin to feel more familiar.', relationPreview: 'Your remembered {name}', waitingDescription: 'Waiting for your description', emptyMemory: '“Important memories do not need to be rewritten.”',
    trustTitle: 'A space for memory and companionship—not a recreation of life', trustText: 'The experience always makes clear that responses come from AI and may differ from the real person or animal.',
    editProfile: 'Edit profile', aiExperience: 'AI companion experience', companionSpace: 'Companion space', avatarAlt: 'Companion profile image', roomTitle: 'Talk with {name}', roomDescription: '{name} responds only from the information you saved. This does not represent the real {kind}.', kindPerson: 'person', kindPet: 'animal',
    chatLabel: 'Your message', chatPlaceholder: 'Write what you would like to say…', send: 'Send', chatDisclaimer: 'Prototype mode: responses use safe local rules, do not connect to the internet, and never claim to hold real memories.', aiLabel: 'AI generated · Prototype mode',
    greetingPerson: 'Hello. I am a companion created from the information you chose to save. I will not pretend to know anything about {name} that you did not share, but I am here to listen.', greetingPet: 'I am here. You can tell me about your day, or we can spend a moment remembering {name} together.',
    invalidType: 'Please choose a JPG, PNG, or WebP image.', tooLarge: 'The photo must be smaller than 10MB.', photoRequired: 'Please choose a photo first.', fieldsRequired: 'Please add a name, relationship, and one real memory.', consentRequired: 'Please confirm your right to use the material and acknowledge the AI identity.', saveFailed: 'This browser could not save the profile. Check your privacy settings and try again.',
    petReplies: ['If {name} were beside you now, perhaps they would come close in the familiar way you remember. Would you like to share another detail from that memory?', 'I hear you. The details you have preserved about {name} are meaningful.', 'We will not put words into {name}’s experience, but we can make space for what you remember.'],
    personReplies: ['I hear that you are thinking about {name}. The memory you saved matters. What other detail from that moment stands out to you?', 'I cannot answer in place of {name}, and I will not invent a new memory. You can still take your time saying what you need to say.', 'You remember {name} as {traits}. What brought them to mind today?'],
    traitsPhrase: '{traits}', traitsFallback: 'someone with a presence all their own'
  }
};

const traitKeys = { '温柔': 'traitGentle', '爱笑': 'traitCheerful', '安静': 'traitQuiet', '幽默': 'traitHumorous', '有点嘴硬': 'traitReserved' };
const form = document.querySelector('#companion-form');
const shell = document.querySelector('.app-shell');
const topbar = document.querySelector('.topbar');
const room = document.querySelector('#companion-room');
const photoInput = document.querySelector('#photo-input');
const uploadZone = document.querySelector('#upload-zone');
const portrait = document.querySelector('#portrait-preview');
const roomAvatar = document.querySelector('#room-avatar');
const nameInput = document.querySelector('#name-input');
const relationInput = document.querySelector('#relation-input');
const voiceInput = document.querySelector('#voice-input');
const memoryInput = document.querySelector('#memory-input');
const memoryCount = document.querySelector('#memory-count');
const errorBox = document.querySelector('#form-error');
const typeOptions = [...document.querySelectorAll('.type-option')];
const traitInputs = [...document.querySelectorAll('input[name="traits"]')];
let currentPhoto = '';
let currentPhotoName = '';
let currentProfile = null;
let currentLanguage = localStorage.getItem('companion-language') || (navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en');

function interpolate(value, replacements = {}) { return value.replace(/\{(\w+)\}/g, (_, key) => replacements[key] ?? ''); }
function t(key, replacements) { const value = translations[currentLanguage][key]; return typeof value === 'string' ? interpolate(value, replacements) : value; }
function selectedKind() { return document.querySelector('input[name="kind"]:checked').value; }
function selectedTraits() { return traitInputs.filter((input) => input.checked).map((input) => input.value); }
function translatedTrait(value) { return t(traitKeys[value] || value); }

function updateKindCopy() {
  const pet = selectedKind() === 'pet';
  document.querySelector('#relation-label').textContent = t(pet ? 'relationPetLabel' : 'relationLabel');
  relationInput.placeholder = t(pet ? 'relationPetPlaceholder' : 'relationPersonPlaceholder');
  voiceInput.placeholder = t(pet ? 'expressionPetPlaceholder' : 'expressionPersonPlaceholder');
}

function updatePreview() {
  const kind = selectedKind();
  const traits = selectedTraits();
  document.querySelector('#kind-badge').textContent = t(kind === 'pet' ? 'petProfile' : 'personProfile');
  document.querySelector('#preview-name').textContent = nameInput.value.trim() || t('noName');
  document.querySelector('#preview-relation').textContent = relationInput.value.trim() ? t('relationPreview', { name: relationInput.value.trim() }) : t('emptyRelation');
  document.querySelector('#preview-traits').innerHTML = traits.length ? traits.map((trait) => `<span>${escapeHtml(translatedTrait(trait))}</span>`).join('') : `<span>${escapeHtml(t('waitingDescription'))}</span>`;
  const memory = memoryInput.value.trim();
  document.querySelector('#preview-memory').textContent = memory ? `“${memory.length > 90 ? `${memory.slice(0, 90)}…` : memory}”` : t('emptyMemory');
  memoryCount.textContent = memoryInput.value.length;
}

function applyLanguage(language, save = true) {
  currentLanguage = language === 'en' ? 'en' : 'zh';
  document.documentElement.lang = currentLanguage === 'en' ? 'en' : 'zh-CN';
  document.title = t('pageTitle');
  document.querySelector('meta[name="description"]').content = t('pageDescription');
  document.querySelectorAll('[data-i18n]').forEach((element) => { element.textContent = t(element.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => { element.placeholder = t(element.dataset.i18nPlaceholder); });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => { element.setAttribute('aria-label', t(element.dataset.i18nAria)); });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => { element.alt = t(element.dataset.i18nAlt); });
  document.querySelectorAll('.language-toggle').forEach((button) => {
    button.textContent = currentLanguage === 'zh' ? 'EN' : '中文';
    button.setAttribute('aria-label', currentLanguage === 'zh' ? 'Switch to English' : '切换到中文');
  });
  if (!currentPhoto) {
    uploadZone.querySelector('strong').textContent = t('choosePhoto');
    uploadZone.querySelector('small').textContent = t('photoHint');
  } else {
    uploadZone.querySelector('strong').textContent = currentPhotoName || t('restoredPhoto');
    uploadZone.querySelector('small').textContent = t('changePhoto');
  }
  updateKindCopy();
  updatePreview();
  if (currentProfile && !room.hidden) renderRoom(currentProfile, true);
  if (save) localStorage.setItem('companion-language', currentLanguage);
}

function escapeHtml(value) { const div = document.createElement('div'); div.textContent = value; return div.innerHTML; }

function setPhoto(file) {
  errorBox.textContent = '';
  if (!file) return;
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) return void (errorBox.textContent = t('invalidType'));
  if (file.size > 10 * 1024 * 1024) return void (errorBox.textContent = t('tooLarge'));
  const reader = new FileReader();
  reader.onload = () => {
    currentPhoto = reader.result; currentPhotoName = file.name; portrait.src = currentPhoto; roomAvatar.src = currentPhoto;
    uploadZone.classList.add('has-file'); uploadZone.querySelector('strong').textContent = file.name; uploadZone.querySelector('small').textContent = t('changePhoto');
  };
  reader.readAsDataURL(file);
}

function openDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('ai-companion-memorial-local', 1);
    request.onupgradeneeded = () => request.result.createObjectStore('profiles'); request.onsuccess = () => resolve(request.result); request.onerror = () => reject(request.error);
  });
}

async function saveProfile(profile) {
  const db = await openDb();
  await new Promise((resolve, reject) => { const tx = db.transaction('profiles', 'readwrite'); tx.objectStore('profiles').put(profile, 'current'); tx.oncomplete = resolve; tx.onerror = () => reject(tx.error); });
  db.close();
}

async function loadProfile() {
  try {
    const db = await openDb();
    const profile = await new Promise((resolve, reject) => { const request = db.transaction('profiles').objectStore('profiles').get('current'); request.onsuccess = () => resolve(request.result); request.onerror = () => reject(request.error); });
    db.close(); return profile;
  } catch { return null; }
}

function renderRoom(profile, resetChat = false) {
  roomAvatar.src = profile.photo || './assets/sample-companion.jpg';
  document.querySelector('#room-title').textContent = t('roomTitle', { name: profile.name });
  document.querySelector('#room-description').textContent = t('roomDescription', { name: profile.name, kind: t(profile.kind === 'pet' ? 'kindPet' : 'kindPerson') });
  if (resetChat) {
    const greeting = t(profile.kind === 'pet' ? 'greetingPet' : 'greetingPerson', { name: profile.name });
    document.querySelector('#chat-window').innerHTML = `<div class="message ai">${escapeHtml(greeting)}<small>${escapeHtml(t('aiLabel'))}</small></div>`;
  }
}

function showRoom(profile) { currentProfile = profile; shell.hidden = true; topbar.hidden = true; room.hidden = false; renderRoom(profile, true); room.scrollIntoView({ behavior: 'smooth' }); }

form.addEventListener('input', updatePreview);
form.addEventListener('change', updatePreview);
photoInput.addEventListener('change', () => setPhoto(photoInput.files[0]));
document.querySelectorAll('.language-toggle').forEach((button) => button.addEventListener('click', () => applyLanguage(currentLanguage === 'zh' ? 'en' : 'zh')));

typeOptions.forEach((option) => {
  option.addEventListener('click', () => { typeOptions.forEach((item) => item.classList.remove('active')); option.classList.add('active'); updateKindCopy(); updatePreview(); });
});

['dragenter', 'dragover'].forEach((eventName) => uploadZone.addEventListener(eventName, (event) => { event.preventDefault(); uploadZone.classList.add('dragging'); }));
['dragleave', 'drop'].forEach((eventName) => uploadZone.addEventListener(eventName, (event) => { event.preventDefault(); uploadZone.classList.remove('dragging'); }));
uploadZone.addEventListener('drop', (event) => setPhoto(event.dataTransfer.files[0]));

form.addEventListener('submit', async (event) => {
  event.preventDefault(); errorBox.textContent = '';
  if (!currentPhoto) return void (errorBox.textContent = t('photoRequired'));
  if (!nameInput.value.trim() || !relationInput.value.trim() || !memoryInput.value.trim()) return void (errorBox.textContent = t('fieldsRequired'));
  if (!document.querySelector('#consent-input').checked) return void (errorBox.textContent = t('consentRequired'));
  const profile = { kind: selectedKind(), name: nameInput.value.trim(), relation: relationInput.value.trim(), traits: selectedTraits(), voiceStyle: voiceInput.value.trim(), memory: memoryInput.value.trim(), photo: currentPhoto, updatedAt: Date.now() };
  try { await saveProfile(profile); showRoom(profile); } catch { errorBox.textContent = t('saveFailed'); }
});

document.querySelector('#back-button').addEventListener('click', () => { room.hidden = true; shell.hidden = false; topbar.hidden = false; window.scrollTo({ top: 0, behavior: 'smooth' }); });

document.querySelector('#chat-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('#chat-input'); const text = input.value.trim(); if (!text || !currentProfile) return;
  const chat = document.querySelector('#chat-window'); chat.insertAdjacentHTML('beforeend', `<div class="message user">${escapeHtml(text)}</div>`); input.value = '';
  const traits = currentProfile.traits.map(translatedTrait).join(currentLanguage === 'zh' ? '、' : ', ');
  const replyTemplates = t(currentProfile.kind === 'pet' ? 'petReplies' : 'personReplies');
  const template = replyTemplates[chat.querySelectorAll('.message.user').length % replyTemplates.length];
  const reply = interpolate(template, { name: currentProfile.name, traits: traits ? t('traitsPhrase', { traits }) : t('traitsFallback') });
  window.setTimeout(() => { chat.insertAdjacentHTML('beforeend', `<div class="message ai">${escapeHtml(reply)}<small>${escapeHtml(t('aiLabel'))}</small></div>`); chat.scrollTop = chat.scrollHeight; }, 420);
  chat.scrollTop = chat.scrollHeight;
});

async function restoreProfile() {
  const profile = await loadProfile(); if (!profile) return;
  currentProfile = profile; currentPhoto = profile.photo || ''; nameInput.value = profile.name || ''; relationInput.value = profile.relation || ''; voiceInput.value = profile.voiceStyle || ''; memoryInput.value = profile.memory || '';
  document.querySelector(`input[name="kind"][value="${profile.kind || 'person'}"]`).click();
  traitInputs.forEach((input) => { input.checked = (profile.traits || []).includes(input.value); });
  if (currentPhoto) { portrait.src = currentPhoto; roomAvatar.src = currentPhoto; uploadZone.classList.add('has-file'); uploadZone.querySelector('strong').textContent = t('restoredPhoto'); uploadZone.querySelector('small').textContent = t('changePhoto'); }
  updatePreview();
}

function registerWebMcp() {
  const context = document.modelContext; if (!context?.registerTool) return;
  const acceptedTraits = [...Object.keys(traitKeys), 'Gentle', 'Cheerful', 'Quiet', 'Humorous', 'Reserved but caring'];
  const normalizeTrait = (value) => Object.keys(traitKeys).find((key) => translations.en[traitKeys[key]] === value) || value;
  try {
    context.registerTool({
      name: 'stage_companion_profile', title: 'Stage companion profile / 填写陪伴档案草稿',
      description: 'Fill the visible profile draft with a type, name, relationship, traits, and memory. The user still uploads a photo, confirms consent, and creates the profile.',
      inputSchema: { type: 'object', properties: { kind: { type: 'string', enum: ['person', 'pet'] }, name: { type: 'string', maxLength: 24 }, relation: { type: 'string', maxLength: 30 }, traits: { type: 'array', items: { type: 'string', enum: acceptedTraits }, uniqueItems: true }, voiceStyle: { type: 'string', maxLength: 80 }, memory: { type: 'string', maxLength: 600 } }, required: ['kind', 'name', 'relation', 'memory'], additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        if (!input || !['person', 'pet'].includes(input.kind) || !input.name?.trim() || !input.relation?.trim() || !input.memory?.trim()) throw new Error('A valid type, name, relationship, and memory are required.');
        document.querySelector(`input[name="kind"][value="${input.kind}"]`).click();
        nameInput.value = input.name.slice(0, 24); relationInput.value = input.relation.slice(0, 30); voiceInput.value = (input.voiceStyle || '').slice(0, 80); memoryInput.value = input.memory.slice(0, 600);
        const normalizedTraits = (input.traits || []).map(normalizeTrait); traitInputs.forEach((item) => { item.checked = normalizedTraits.includes(item.value); });
        updatePreview(); nameInput.dispatchEvent(new Event('input', { bubbles: true })); return { status: 'staged', requiresPhoto: true, requiresConsent: true };
      }
    });
  } catch (error) { console.info('WebMCP unavailable', error); }
}

applyLanguage(currentLanguage, false);
restoreProfile();
registerWebMcp();
