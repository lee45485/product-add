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

      // Artificial intelligence simulation with visual verification step
      setTimeout(function() {
        render(product, audience, country, outputContent);
        loadingState.style.display = 'none';
        outputContent.style.display = 'block';
        if (window.lucide) lucide.createIcons();
      }, 2500);
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
    
    // Improved Image Selection Strategy:
    // Using Unsplash with strict keywords. If Korean is used, we append the English term for better API matching.
    var searchKeyword = product;
    if (product.includes('한복')) searchKeyword = 'Hanbok, Korean Traditional Clothing';
    if (product.includes('헤드폰')) searchKeyword = 'Headphones, Audio';
    if (product.includes('전기차')) searchKeyword = 'Electric Car, EV';
    
    // Using a more reliable image source for high-quality product photography
    var imageUrl = 'https://source.unsplash.com/1200x1600/?' + encodeURIComponent(searchKeyword) + ',product';

    container.innerHTML = 
      '<div class="animate-fade">' +
        '<section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 4rem; margin-bottom: 5rem; align-items: center;">' +
          '<div>' +
            '<span style="color: var(--accent); font-weight: 700; text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem;">Exclusive Presentation</span>' +
            '<h2 style="font-size: 3.5rem; font-weight: 800; line-height: 1.1; margin: 1rem 0 2rem; letter-spacing: -2px;">' + product + '</h2>' +
            '<div style="background: #ffffff; border: 1px solid var(--border); padding: 2rem; border-radius: 24px; margin-bottom: 2.5rem; box-shadow: var(--shadow-subtle);">' +
              '<div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">' +
                '<div style="background: #f1f5f9; padding: 0.4rem 1rem; border-radius: 100px; font-size: 0.75rem; font-weight: 700; color: #475569;">TARGET: ' + audience + '</div>' +
                '<div style="background: #f1f5f9; padding: 0.4rem 1rem; border-radius: 100px; font-size: 0.75rem; font-weight: 700; color: #475569;">MARKET: ' + country + '</div>' +
              '</div>' +
              '<p style="font-size: 1.15rem; line-height: 1.8; color: #334155;">이 캠페인은 ' + country + ' 시장의 ' + audience + '님들을 타겟으로 설정했습니다. <strong>' + data.tone + '</strong>한 무드를 강조하여 브랜드의 품격을 극대화합니다.</p>' +
            '</div>' +
            '<div style="display: flex; gap: 1.25rem;">' +
              '<button class="btn-luxury" id="restart-btn" style="background: #f1f5f9; color: #000; padding: 1rem 1.75rem;"><i data-lucide="chevron-left"></i></button>' +
              '<button class="btn-luxury" style="flex: 1; justify-content: center;">Download Assets <i data-lucide="download" size="18"></i></button>' +
            '</div>' +
          '</div>' +
          '<div style="position: relative;">' +
            '<div class="card-premium" style="padding: 0; overflow: hidden; border: none; box-shadow: 0 30px 60px -12px rgba(50,50,93,0.25);">' +
              '<div style="width: 100%; aspect-ratio: 4/5; background: #eee;">' +
                '<img id="main-product-image" src="' + imageUrl + '" style="width: 100%; height: 100%; object-fit: cover;" alt="' + product + '">' +
              '</div>' +
              '<div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); padding: 4rem 2rem 2rem; color: white;">' +
                '<div style="font-weight: 800; font-size: 1.25rem;">Visual Identity</div>' +
                '<div style="font-size: 0.85rem; opacity: 0.8;">High-Fidelity Branding Reference</div>' +
              '</div>' +
            '</div>' +
            '<div style="position: absolute; -top: 20px; -right: 20px; background: white; padding: 1rem; border-radius: 16px; box-shadow: var(--shadow-premium); display: flex; align-items: center; gap: 0.75rem; z-index: 10;">' +
              '<div style="width: 10px; height: 10px; border-radius: 50%; background: #22c55e;"></div>' +
              '<span style="font-size: 0.8rem; font-weight: 700;">AI Matched: ' + product + '</span>' +
            '</div>' +
          '</div>' +
        '</section>' +

        '<section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 3rem; margin-bottom: 3rem;">' +
          '<div class="card-premium" style="border-left: 6px solid var(--accent);">' +
            '<div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">' +
              '<h3 style="font-weight: 800; font-size: 1.4rem; letter-spacing: -0.5px;">' + data.lang + ' Copy</h3>' +
              '<div style="flex: 1; height: 1px; background: var(--border);"></div>' +
            '</div>' +
            '<p style="font-size: 1.3rem; line-height: 1.9; color: #1e293b; font-weight: 400; word-break: keep-all;">' +
              'Elevate your presence with <strong>' + product + '</strong>. Specifically curated for <strong>' + audience + '</strong> who demand the extraordinary. ' +
              'Discover the intersection of heritage and future in ' + country + '. This is your moment to redefine perfection.' +
            '</p>' +
          '</div>' +

          '<div class="card-premium" style="border-left: 6px solid var(--primary);">' +
            '<div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">' +
              '<h3 style="font-weight: 800; font-size: 1.4rem; letter-spacing: -0.5px;">Korean Adaptation</h3>' +
              '<div style="flex: 1; height: 1px; background: var(--border);"></div>' +
            '</div>' +
            '<p style="font-size: 1.3rem; line-height: 1.9; color: #1e293b; font-weight: 400; word-break: keep-all;">' +
              '<strong>' + product + '</strong>으로 당신의 품격을 높이십시오. 평범함을 거부하는 <strong>' + audience + '</strong>님들을 위해 특별히 큐레이션되었습니다. ' +
              '' + country + '에서 만나는 전통과 미래의 완벽한 조화. 지금, 당신의 정의를 새롭게 쓰십시오.' +
            '</p>' +
          '</div>' +
        '</section>' +
      '</div>';

    document.getElementById('restart-btn').onclick = function() {
      window.location.reload();
    };
    
    // Double check if image loaded, if not, try a simpler fallback
    var imgElement = document.getElementById('main-product-image');
    imgElement.onerror = function() {
      this.src = 'https://source.unsplash.com/1200x1600/?' + encodeURIComponent(product);
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
