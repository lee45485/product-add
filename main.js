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
        alert('모든 정보를 입력해주세요.');
        return;
      }

      inputSection.style.display = 'none';
      resultSection.style.display = 'block';
      loadingState.style.display = 'block';
      outputContent.style.display = 'none';

      window.scrollTo({ top: 0, behavior: 'smooth' });

      setTimeout(function() {
        render(product, audience, country, outputContent);
        loadingState.style.display = 'none';
        outputContent.style.display = 'block';
        if (window.lucide) lucide.createIcons();
      }, 2500);
    });
  }

  function render(product, audience, country, container) {
    var langData = {
      USA: { lang: 'English', greeting: 'Future of Innovation' },
      UK: { lang: 'English (UK)', greeting: 'Elegance in Every Detail' },
      Japan: { lang: 'Japanese', greeting: '次世代の革新を体験する' },
      China: { lang: 'Chinese', greeting: '探索未来科技' },
      France: { lang: 'French', greeting: 'L\'excellence Redéfinie' },
      Germany: { lang: 'German', greeting: 'Perfektion Erleben' },
      Spain: { lang: 'Spanish', greeting: 'La Revolución de Hoy' },
      Italy: { lang: 'Italian', greeting: 'Design e Passione' },
      Brazil: { lang: 'Portuguese', greeting: 'O Futuro é Agora' },
      Vietnam: { lang: 'Vietnamese', greeting: 'Đỉnh Cao Công Nghệ' },
      Thailand: { lang: 'Thai', greeting: 'ที่สุดแห่งนวัตกรรม' }
    };

    var target = langData[country] || langData['USA'];
    var encodedProduct = encodeURIComponent(product);
    var randomSeed = Math.floor(Math.random() * 1000);

    container.innerHTML = 
      '<div class="animate-reveal">' +
        '<div class="glass-card" style="margin-bottom: 3rem; overflow: hidden; padding: 0;">' +
          '<div style="background: linear-gradient(to right, var(--primary-color), var(--accent-color)); padding: 4rem 2rem; text-align: center; color: white;">' +
            '<h2 style="font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; margin-bottom: 1rem; line-height: 1.2;">' + target.greeting + '</h2>' +
            '<p style="font-size: 1.2rem; opacity: 0.9; max-width: 700px; margin: 0 auto; font-weight: 300;">Experience the legendary performance of ' + product + ', tailored exclusively for ' + audience + ' in ' + country + '.</p>' +
          '</div>' +
          '<div style="padding: 3rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 3rem; align-items: center;">' +
            '<div style="border-radius: 24px; overflow: hidden; box-shadow: var(--shadow-premium); background: #000; position: relative; aspect-ratio: 16/9;">' +
              '<img src="https://picsum.photos/seed/' + encodedProduct + randomSeed + '/1200/800" style="width: 100%; height: 100%; object-fit: cover;">' +
              '<div style="position: absolute; top: 20px; right: 20px; background: rgba(0,0,0,0.6); padding: 5px 15px; border-radius: 100px; color: white; font-size: 0.8rem; backdrop-filter: blur(10px);">AI GENERATED ASSET</div>' +
            '</div>' +
            '<div>' +
              '<h3 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 1rem;">' +
                '<i data-lucide="award" style="color: var(--accent-color);"></i> Why ' + product + '?' +
              '</h3>' +
              '<p style="font-size: 1.1rem; opacity: 0.8; margin-bottom: 2rem;">Designed with precision and engineered for the most demanding ' + audience + '. This is not just a product; it is a statement of excellence.</p>' +
              '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">' +
                '<div style="background: rgba(0,0,0,0.03); padding: 1.5rem; border-radius: 20px;">' +
                  '<i data-lucide="zap" style="color: var(--primary-color);"></i><div style="font-weight: 800; margin-top: 0.5rem;">Powerful</div>' +
                '</div>' +
                '<div style="background: rgba(0,0,0,0.03); padding: 1.5rem; border-radius: 20px;">' +
                  '<i data-lucide="shield-check" style="color: var(--primary-color);"></i><div style="font-weight: 800; margin-top: 0.5rem;">Premium</div>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 3rem; margin-bottom: 4rem;">' +
          '<div class="glass-card" style="border-top: 8px solid var(--accent-color);">' +
            '<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem;">' +
              '<h3 style="font-weight: 800; font-size: 1.5rem; color: var(--accent-color);">' + target.lang + ' Copy</h3>' +
              '<i data-lucide="globe-2" size="32" style="opacity: 0.2;"></i>' +
            '</div>' +
            '<div style="font-size: 1.25rem; line-height: 2; font-weight: 400; color: #333;">' +
              'Unveiling the new <strong>' + product + '</strong>. Designed to empower <strong>' + audience + '</strong> across ' + country + '. ' +
              'Experience unmatched craftsmanship and cutting-edge technology in one seamless package. ' +
              'Elevate your lifestyle and redefine what is possible.' +
            '</div>' +
          '</div>' +

          '<div class="glass-card" style="border-top: 8px solid var(--primary-color);">' +
            '<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem;">' +
              '<h3 style="font-weight: 800; font-size: 1.5rem; color: var(--primary-color);">Korean Translation</h3>' +
              '<i data-lucide="languages" size="32" style="opacity: 0.2;"></i>' +
            '</div>' +
            '<div style="font-size: 1.25rem; line-height: 2; font-weight: 400; color: #333;">' +
              '새로운 <strong>' + product + '</strong>를 공개합니다. ' + country + ' 전역의 <strong>' + audience + '</strong>들을 위해 특별히 설계되었습니다. ' +
              '정교한 장인정신과 최첨단 기술이 하나의 완벽한 패키지로 탄생했습니다. ' +
              '당신의 라이프스타일을 격상시키고 가능성의 한계를 새롭게 정의해 보세요.' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<div style="text-align: center; padding-bottom: 5rem;">' +
          '<button id="restart-btn" class="btn-primary" style="background: var(--text-color);">' +
            '<i data-lucide="refresh-cw"></i> 다시 생성하기' +
          '</button>' +
        '</div>' +
      '</div>';

    document.getElementById('restart-btn').onclick = function() {
      window.location.reload();
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
