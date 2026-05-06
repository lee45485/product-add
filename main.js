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

      setTimeout(function() {
        render(product, audience, country, outputContent);
        loadingState.style.display = 'none';
        outputContent.style.display = 'block';
        if (window.lucide) lucide.createIcons();
      }, 2000);
    });
  }

  function render(product, audience, country, container) {
    var translations = {
      USA: { lang: 'English', greet: 'Future of Innovation', body: 'Experience ' + product + ', meticulously crafted for ' + audience + '. Our latest breakthrough redefines excellence in the USA. Don\'t just observe the future - live it with us today.' },
      UK: { lang: 'English (UK)', greet: 'Elegance Redefined', body: 'Experience ' + product + ', meticulously crafted for ' + audience + '. Our latest breakthrough redefines excellence in the UK. Don\'t just observe the future - live it with us today.' },
      Japan: { lang: 'Japanese', greet: '次世代の革新を体験する', body: audience + 'のために精巧に作られた' + product + 'を体験してください。当社の最新の画期적인技術は、日本における卓越性を再定義します。未来をただ眺めるだけでなく、今日私たちと共にその未来を生きてください。' },
      China: { lang: 'Chinese', greet: '探索未来科技', body: '体验为' + audience + '精心打造的' + product + '。我们的最新突破重新定义了中国的卓越。不要只是观察未来——今天就和我们一起生活在未来。' },
      France: { lang: 'French', greet: 'L\'excellence Redéfinie', body: 'Découvrez ' + product + ', méticuleusement conçu pour ' + audience + '. Notre dernière percée redéfinit l\'excellence en France. Ne vous contentez pas d\'observer le futur - vivez-le avec nous dès aujourd\'hui.' },
      Germany: { lang: 'German', greet: 'Perfektion Erleben', body: 'Erleben Sie ' + product + ', sorgfältig gefertigt für ' + audience + '. Unser neuester Durchbruch definiert Exzellenz in Deutschland neu. Beobachten Sie nicht nur die Zukunft – leben Sie sie noch heute mit uns.' },
      Spain: { lang: 'Spanish', greet: 'La Revolución de Hoy', body: 'Experimente ' + product + ', meticulosamente diseñado para ' + audience + '. Nuestro último avance redefine la excelencia en España. No se limite a observar el futuro: vívalo con nosotros hoy.' },
      Italy: { lang: 'Italian', greet: 'Design e Passione', body: 'Scopri ' + product + ', meticolosamente realizzato per ' + audience + '. La nostra ultima innovazione ridefinisce l\'eccellenza in Italia. Non limitarti a osservare il futuro: vivilo con noi oggi.' },
      Brazil: { lang: 'Portuguese', greet: 'O Futuro é Agora', body: 'Experimente o ' + product + ', meticulosamente fabricado para ' + audience + '. Nosso mais recente avanço redefine a excelência no Brasil. Não apenas observe o futuro - viva-o conosco hoje.' },
      Vietnam: { lang: 'Vietnamese', greet: 'Đỉnh Cao Công Nghệ', body: 'Trải nghiệm ' + product + ', được chế tác tỉ mỉ cho ' + audience + '. Đột phá mới nhất của chúng tôi định nghĩa lại sự xuất sắc tại Việt Nam. Đừng chỉ quan sát tương lai - hãy sống cùng chúng tôi ngay hôm nay.' },
      Thailand: { lang: 'Thai', greet: 'ที่สุดแห่งนวัตกรรม', body: 'สัมผัสประสบการณ์ ' + product + ' ที่สร้างสรรค์อย่างพิถีพิถันเพื่อ ' + audience + ' นวัตกรรมล่าสุดของเรากำหนดนิยามใหม่ของความยอดเยี่ยมในประเทศไทย อย่าเพียงแค่เฝ้าดูอนาคต แต่จงใช้ชีวิตไปกับเราตั้งแต่วันนี้' }
    };

    var data = translations[country] || translations['USA'];
    
    // Tiered Image Strategy
    var imageUrl = 'https://loremflickr.com/1200/800/' + encodeURIComponent(product);
    
    // Direct curated matches for common terms to guarantee "Wow" factor
    if (product.match(/한복|Hanbok/i)) {
      imageUrl = 'https://images.unsplash.com/photo-1589133866652-f47ca5439977?auto=format&fit=crop&w=1200&q=80';
    } else if (product.match(/헤드폰|Headphone/i)) {
      imageUrl = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80';
    } else if (product.match(/전기차|Car|Electric/i)) {
      imageUrl = 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80';
    } else if (product.match(/화장품|Cosmetic|Beauty/i)) {
      imageUrl = 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80';
    }

    container.innerHTML = 
      '<div class="animate-fade">' +
        '<div class="glass-card" style="margin-bottom: 3rem; overflow: hidden; padding: 0; background: white;">' +
          '<div style="background: linear-gradient(135deg, #0f172a, #1e293b); padding: 5rem 2rem; text-align: center; color: white;">' +
            '<span style="display: inline-block; padding: 0.5rem 1.25rem; background: rgba(255,255,255,0.1); border-radius: 100px; font-size: 0.8rem; letter-spacing: 2px; margin-bottom: 2rem; font-weight: 600;">PREMIUM GLOBAL CAMPAIGN</span>' +
            '<h2 style="font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 800; line-height: 1.1; margin-bottom: 2rem; letter-spacing: -2px;">' + data.greet + '</h2>' +
            '<p style="font-size: 1.3rem; opacity: 0.85; max-width: 800px; margin: 0 auto; font-weight: 300;">' + product + ' for ' + audience + ' in ' + country + '</p>' +
          '</div>' +
          '<div style="width: 100%; aspect-ratio: 16/9; background: #f1f5f9; position: relative;">' +
            '<img src="' + imageUrl + '" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src=\'https://picsum.photos/1200/800?seed=' + encodeURIComponent(product) + '\'">' +
            '<div style="position: absolute; bottom: 20px; right: 20px; background: rgba(0,0,0,0.5); color: white; padding: 5px 15px; border-radius: 50px; font-size: 0.75rem; backdrop-filter: blur(5px);">© AI Vision Asset</div>' +
          '</div>' +
        '</div>' +

        '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 3rem; margin-bottom: 5rem;">' +
          '<div class="card-premium" style="border-top: 8px solid var(--accent);">' +
            '<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem;">' +
              '<h3 style="font-weight: 800; font-size: 1.6rem; color: #1e293b;">' + data.lang + ' Copy</h3>' +
              '<i data-lucide="globe" style="color: var(--accent);"></i>' +
            '</div>' +
            '<div style="font-size: 1.4rem; line-height: 1.8; color: #334155; font-weight: 400; word-break: keep-all;">' + data.body + '</div>' +
          '</div>' +

          '<div class="card-premium" style="border-top: 8px solid #000;">' +
            '<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem;">' +
              '<h3 style="font-weight: 800; font-size: 1.6rem; color: #000;">한국어 번역본</h3>' +
              '<i data-lucide="languages" style="color: #64748b;"></i>' +
            '</div>' +
            '<div style="font-size: 1.4rem; line-height: 1.8; color: #334155; font-weight: 400; word-break: keep-all;">' +
              '<strong>' + product + '</strong>의 정점을 경험하세요. <strong>' + audience + '</strong>를 위해 정교하게 제작된 이 제품은 ' + country + '에서 탁월함의 기준을 새롭게 정의합니다. 미래를 그저 지켜보지 마세요 - 오늘 우리와 함께 그 미래의 주인공이 되십시오.' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<div style="text-align: center; margin-bottom: 8rem;">' +
          '<button id="restart-btn" class="btn-luxury" style="background: #0f172a; padding: 1.5rem 4rem; font-size: 1.2rem;">' +
            '<i data-lucide="refresh-cw"></i> 새로운 홍보 시작하기' +
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
