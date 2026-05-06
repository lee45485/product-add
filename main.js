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
        alert('모든 필드를 채워주세요.');
        return;
      }

      inputSection.style.display = 'none';
      resultSection.style.display = 'block';
      loadingState.style.display = 'block';
      outputContent.style.display = 'none';

      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Simulate a multi-step "AI reasoning" process
      setTimeout(function() {
        render(product, audience, country, outputContent);
        loadingState.style.display = 'none';
        outputContent.style.display = 'block';
        if (window.lucide) lucide.createIcons();
      }, 2000);
    });
  }

  function render(product, audience, country, container) {
    var countryData = {
      USA: { lang: 'English', market: 'Global/US', tone: 'Innovative & Bold' },
      UK: { lang: 'English (UK)', market: 'European/Premium', tone: 'Elegant & Classic' },
      Japan: { lang: 'Japanese', market: 'East Asian/Craftsmanship', tone: 'Minimal & Refined' },
      China: { lang: 'Chinese', market: 'East Asian/Modern', tone: 'Powerful & Vibrant' },
      France: { lang: 'French', market: 'European/Luxury', tone: 'Sophisticated & Artistic' },
      Germany: { lang: 'German', market: 'European/Quality', tone: 'Technical & Reliable' },
      Spain: { lang: 'Spanish', market: 'Hispanic/Passionate', tone: 'Warm & Dynamic' },
      Italy: { lang: 'Italian', market: 'European/Design', tone: 'Stylish & Authentic' },
      Brazil: { lang: 'Portuguese', market: 'Latin/Energetic', tone: 'Vivid & Social' },
      Vietnam: { lang: 'Vietnamese', market: 'SE Asian/Emerging', tone: 'Fresh & Friendly' },
      Thailand: { lang: 'Thai', market: 'SE Asian/Cultural', tone: 'Creative & Inviting' }
    };

    var data = countryData[country] || countryData['USA'];
    // Use Keyword-based image service for relevance
    var imageUrl = 'https://loremflickr.com/1200/800/' + encodeURIComponent(product);

    container.innerHTML = 
      '<div class="animate-fade">' +
        '<section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 4rem; margin-bottom: 5rem; align-items: start;">' +
          '<div>' +
            '<span style="color: var(--accent); font-weight: 700; text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem;">Campaign Preview</span>' +
            '<h2 style="font-size: 3.5rem; font-weight: 800; line-height: 1.1; margin: 1rem 0 2rem; letter-spacing: -1px;">' + product + '</h2>' +
            '<div style="background: #f1f5f9; padding: 2rem; border-radius: 20px; margin-bottom: 2rem;">' +
              '<div style="display: flex; gap: 1rem; margin-bottom: 1rem; opacity: 0.6; font-size: 0.8rem; font-weight: 700; text-transform: uppercase;">' +
                '<span>Target: ' + audience + '</span> • <span>Market: ' + country + '</span>' +
              '</div>' +
              '<p style="font-size: 1.1rem; line-height: 1.7; color: #334155;">이 캠페인은 ' + country + ' 시장의 ' + audience + '님들을 타겟으로 하여, <strong>' + data.tone + '</strong>한 톤앤매너로 제작되었습니다.</p>' +
            '</div>' +
            '<div style="display: flex; gap: 1rem;">' +
              '<button class="btn-luxury" id="restart-btn" style="background: #f1f5f9; color: #000; padding: 1rem 1.5rem;"><i data-lucide="arrow-left"></i></button>' +
              '<button class="btn-luxury" style="flex: 1;">Publish Campaign <i data-lucide="external-link"></i></button>' +
            '</div>' +
          '</div>' +
          '<div style="position: relative;">' +
            '<div class="card-premium" style="padding: 0; overflow: hidden; border: none;">' +
              '<div class="image-shimmer" style="width: 100%; aspect-ratio: 4/5;">' +
                '<img src="' + imageUrl + '" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s ease;" onload="this.parentElement.classList.remove(\'image-shimmer\')">' +
              '</div>' +
              '<div style="position: absolute; bottom: 30px; left: 30px; right: 30px; background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); padding: 1.5rem; border-radius: 16px;">' +
                '<div style="font-weight: 800; font-size: 1.1rem; margin-bottom: 0.25rem;">Visual Concept A</div>' +
                '<div style="font-size: 0.8rem; opacity: 0.7;">Premium Editorial Photography</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</section>' +

        '<section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 3rem;">' +
          '<div class="card-premium">' +
            '<div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">' +
              '<div style="background: var(--accent-light); color: var(--accent); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center;">' +
                '<i data-lucide="globe"></i>' +
              '</div>' +
              '<div>' +
                '<h3 style="font-weight: 800; font-size: 1.2rem;">' + data.lang + ' Copy</h3>' +
                '<span style="font-size: 0.8rem; opacity: 0.5;">Optimized for ' + data.market + '</span>' +
              '</div>' +
            '</div>' +
            '<p style="font-size: 1.25rem; line-height: 1.8; color: #1e293b; font-weight: 400;">' +
              'Embrace the timeless beauty of <strong>' + product + '</strong>. Crafted for the modern <strong>' + audience + '</strong> who values both tradition and innovation. ' +
              'Now available across ' + country + ', experience a new standard of luxury that speaks your language.' +
            '</p>' +
          '</div>' +

          '<div class="card-premium">' +
            '<div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">' +
              '<div style="background: #f1f5f9; color: #1e293b; width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center;">' +
                '<i data-lucide="languages"></i>' +
              '</div>' +
              '<div>' +
                '<h3 style="font-weight: 800; font-size: 1.2rem;">Korean Translation</h3>' +
                '<span style="font-size: 0.8rem; opacity: 0.5;">Brand Tone Consistency</span>' +
              '</div>' +
            '</div>' +
            '<p style="font-size: 1.25rem; line-height: 1.8; color: #1e293b; font-weight: 400;">' +
              '<strong>' + product + '</strong>의 시대를 초월한 아름다움을 만나보세요. ' +
              '전통과 혁신의 가치를 아는 현대의 <strong>' + audience + '</strong>님들을 위해 정교하게 제작되었습니다. ' +
              '이제 ' + country + ' 전역에서, 당신의 감각을 깨우는 새로운 럭셔리의 기준을 경험하십시오.' +
            '</p>' +
          '</div>' +
        '</section>' +
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
