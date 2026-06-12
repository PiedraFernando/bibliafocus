(function() {
  const bible = BIBLE_DATA;
  let currentBook = null;
  let currentChapter = null;
  let currentVerse = null;
  let currentVerseNum = 0;
  let blockedDomain = '';
  let originalUrl = '';

  function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    blockedDomain = params.get('site') || '';
    originalUrl = params.get('original') || '';
  }

  function showBlockedDomain() {
    const domainEl = document.getElementById('blockedDomain');
    if (blockedDomain) {
      domainEl.textContent = blockedDomain;
      domainEl.style.display = 'block';
    }
  }

  function getRandomVerse() {
    const bookIndex = Math.floor(Math.random() * bible.length);
    currentBook = bible[bookIndex];
    const chapterIndex = Math.floor(Math.random() * currentBook.ch.length);
    currentChapter = currentBook.ch[chapterIndex];
    const verseIndex = Math.floor(Math.random() * currentChapter.v.length);
    currentVerse = currentChapter.v[verseIndex];
    currentVerseNum = verseIndex;
    return {
      book: currentBook.n,
      chapter: currentChapter.c,
      verse: currentVerse.v,
      text: currentVerse.t
    };
  }

  function displayVerse(verse) {
    const reference = document.getElementById('verseReference');
    const text = document.getElementById('verseText');
    const chapterContainer = document.getElementById('chapterContainer');

    reference.textContent = verse.book + ' ' + verse.chapter + ':' + verse.verse;
    text.textContent = verse.text;
    chapterContainer.style.display = 'none';

    document.getElementById('btnReadChapter').style.display = 'inline-block';
  }

  function showChapter() {
    if (!currentBook || !currentChapter) return;

    const container = document.getElementById('chapterContainer');
    const title = document.getElementById('chapterTitle');
    const versesDiv = document.getElementById('chapterVerses');

    title.textContent = currentBook.n + ' ' + currentChapter.c;

    versesDiv.innerHTML = '';
    currentChapter.v.forEach(function(verse, index) {
      const p = document.createElement('p');
      const num = document.createElement('span');
      num.className = 'verse-num';
      num.textContent = verse.v;
      p.appendChild(num);
      p.appendChild(document.createTextNode(verse.t));

      if (index === currentVerseNum) {
        p.className = 'highlight';
      }

      versesDiv.appendChild(p);
    });

    container.style.display = 'block';
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function hideChapter() {
    document.getElementById('chapterContainer').style.display = 'none';
  }

  function newVerse() {
    const card = document.getElementById('verseCard');
    card.style.opacity = '0';
    card.style.transform = 'translateY(10px)';

    setTimeout(function() {
      displayVerse(getRandomVerse());
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 300);
  }

  function allowSite() {
    if (!blockedDomain) return;

    const btn = document.getElementById('btnAllowSite');
    const feedback = document.getElementById('allowFeedback');
    const feedbackText = document.getElementById('allowFeedbackText');

    btn.disabled = true;
    btn.textContent = 'Habilitando...';

    chrome.runtime.sendMessage(
      { action: 'allowSite', domain: blockedDomain },
      function(response) {
        if (response && response.success) {
          feedbackText.textContent = 'Sitio habilitado por 30 minutos. Redirigiendo...';
          feedback.style.display = 'block';
          feedback.className = 'allow-feedback success';
          btn.style.display = 'none';

          setTimeout(function() {
            if (originalUrl) {
              window.location.href = decodeURIComponent(originalUrl);
            } else {
              window.history.back();
            }
          }, 1500);
        } else {
          feedbackText.textContent = 'Error al habilitar el sitio. Intenta de nuevo.';
          feedback.style.display = 'block';
          feedback.className = 'allow-feedback error';
          btn.disabled = false;
          btn.textContent = '\u23F0 Habilitar este sitio por 30 minutos';
        }
      }
    );
  }

  document.addEventListener('DOMContentLoaded', function() {
    getUrlParams();
    showBlockedDomain();

    const card = document.getElementById('verseCard');
    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

    displayVerse(getRandomVerse());

    document.getElementById('btnReadChapter').addEventListener('click', showChapter);
    document.getElementById('btnCloseChapter').addEventListener('click', hideChapter);
    document.getElementById('btnAnotherVerse').addEventListener('click', newVerse);
    document.getElementById('btnAllowSite').addEventListener('click', allowSite);
  });
})();