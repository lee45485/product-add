(function() {
  function init() {
    var generateBtn = document.getElementById('generate-btn');
    var inputSection = document.getElementById('input-section');
    var resultSection = document.getElementById('result-section');
    var loadingState = document.getElementById('loading-state');
    var outputContent = document.getElementById('output-content');

    if (!generateBtn) return;

    generateBtn.addEventListener('click', function() {
      var product = document.getElementById('product-name').value.trim();
      var audience = document.getElementById('target-audience').value.trim();
      var country = document.getElementById('target-country').value;

      if (!product || !audience) {
        alert('상품명과 타겟층을 입력해주세요!');
        return;
      }

      inputSection.style.display = 'none';
      resultSection.style.display = 'block';
      loadingState.style.display = 'block';
      outputContent.style.display = 'none';

      setTimeout(function() {
        try {
          render(product, audience, country, outputContent);
          loadingState.style.display = 'none';
          outputContent.style.display = 'block';
          if (window.lucide) lucide.createIcons();
        } catch (err) {
          alert('오류가 발생했습니다.');
        }
      }, 1000);
    });
  }

  function render(product, audience, country, container) {
    var langData = {
      USA: { lang: 'English', greeting: 'Revolutionize Your Life' },
      UK: { lang: 'English (UK)', greeting: 'Elevate Your Everyday' },
      Japan: { lang: 'Japanese', greeting: 'あなたの生活を革新する' },
      China: { lang: 'Chinese', greeting: '革新您的生活' },
      France: { lang: 'French', greeting: 'Révolutionnez votre vie' },
      Germany: { lang: 'German', greeting: 'Revolutionieren Sie Ihr Leben' },
      Spain: { lang: 'Spanish', greeting: 'Revoluciona tu vida' },
      Italy: { lang: 'Italian', greeting: 'Rivoluziona la tua vita' },
      Brazil: { lang: 'Portuguese', greeting: 'Revolucione sua vida' },
      Vietnam: { lang: 'Vietnamese', greeting: 'Cách mạng hóa cuộc sống' },
      Thailand: { lang: 'Thai', greeting: 'ปฏิวัติชีวิตของคุณ' }
    };

    var target = langData[country] || langData['USA'];
    var encodedProduct = encodeURIComponent(product);

    container.innerHTML = 
      '<div class="glass-card" style="margin-bottom: 2rem;">' +
        '<h2 style="font-size: 2.2rem; margin-bottom: 1.5rem; color: var(--primary-color); text-align: center;">' + target.greeting + '</h2>' +
        '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">' +
          '<div style="border-radius: 20px; overflow: hidden; background: #000; aspect-ratio: 16/9;">' +
            '<img src="https://picsum.photos/seed/' + encodedProduct + '/800/450" alt="Product" style="width: 100%; height: 100%; object-fit: cover;">' +
          '</div>' +
          '<div style="border-radius: 20px; overflow: hidden; background: var(--surface-color); border: 2px dashed var(--primary-color); display: flex; flex-direction: column; align-items: center; justify-content: center; aspect-ratio: 16/9; padding: 1.5rem; text-align: center;">' +
            '<i data-lucide="sparkles" size="40" style="color: var(--accent-color); margin-bottom: 1rem;"></i>' +
            '<h4 style="font-weight: 700; color: var(--primary-color); margin: 0;">GLOBAL CAMPAIGN READY</h4>' +
            '<p style="font-size: 0.9rem; opacity: 0.7; margin-top: 0.5rem;">Targeted for ' + country + ' Market</p>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">' +
        '<div class="glass-card" style="border-top: 5px solid var(--accent-color);">' +
          '<div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">' +
            '<i data-lucide="globe" size="24" style="color: var(--accent-color);"></i>' +
            '<h3 style="font-weight: 700; margin: 0;">' + target.lang + ' Version</h3>' +
          '</div>' +
          '<p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-color);">' +
            'Experience <strong>' + product + '</strong>, meticulously crafted for <strong>' + audience + '</strong>. ' +
            'Our latest breakthrough redefine standard for excellence in ' + country + '. ' +
            'Don\'t just observe the future - live it with us today.' +
          '</p>' +
        '</div>' +
        '<div class="glass-card" style="border-top: 5px solid var(--primary-color);">' +
          '<div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">' +
            '<i data-lucide="languages" size="24" style="color: var(--primary-color);"></i>' +
            '<h3 style="font-weight: 700; margin: 0;">한국어 번역</h3>' +
          '</div>' +
          '<p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-color);">' +
            '<strong>' + audience + '</strong>를 위해 정교하게 제작된 <strong>' + product + '</strong>를 경험해 보세요. ' +
            '우리의 최신 기술은 ' + country + '에서 탁월함의 기준을 새롭게 정의합니다. ' +
            '미래를 그저 지켜보지 마세요 - 오늘 우리와 함께 그 미래를 살아가세요.' +
          '</p>' +
        '</div>' +
      '</div>' +
      '<div style="text-align: center; margin-top: 3rem;">' +
        '<button id="restart-btn" class="btn-primary" style="padding: 1rem 3rem;">다시 만들기</button>' +
      '</div>';

    document.getElementById('restart-btn').onclick = function() {
      location.reload();
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
