document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-btn');
  const inputSection = document.getElementById('input-section');
  const resultSection = document.getElementById('result-section');
  const loadingState = document.getElementById('loading-state');
  const outputContent = document.getElementById('output-content');

  if (!generateBtn) {
    console.error('Generate button not found');
    return;
  }

  generateBtn.addEventListener('click', () => {
    const product = document.getElementById('product-name').value.trim();
    const audience = document.getElementById('target-audience').value.trim();
    const country = document.getElementById('target-country').value;

    if (!product || !audience) {
      alert('상품명과 타겟층을 입력해주세요!');
      return;
    }

    // Prepare UI
    inputSection.style.display = 'none';
    resultSection.style.display = 'block';
    loadingState.style.display = 'block';
    outputContent.innerHTML = '';
    outputContent.style.display = 'none'; // Hide content while loading

    // Simulate AI Generation delay
    setTimeout(() => {
      loadingState.style.display = 'none';
      outputContent.style.display = 'block'; // Show content after loading
      renderResults(product, audience, country);
    }, 2000);
  });

  function renderResults(product, audience, country) {
    const langMap = {
      USA: { lang: 'English', greeting: 'Revolutionize Your Life' },
      Japan: { lang: 'Japanese', greeting: 'あなたの生活を革新する' },
      France: { lang: 'French', greeting: 'Révolutionnez votre vie' },
      Germany: { lang: 'German', greeting: 'Revolutionieren Sie Ihr Leben' }
    };

    const target = langMap[country] || langMap['USA'];

    const htmlContent = \`
      <div class="glass-card" style="margin-bottom: 2rem;">
        <h2 style="font-size: 2rem; margin-bottom: 1.5rem; color: var(--primary-color);">\${target.greeting}</h2>
        <div class="result-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          <div class="media-container" style="border-radius: 16px; overflow: hidden; background: #000; aspect-ratio: 4/3;">
            <img src="https://picsum.photos/seed/\${encodeURIComponent(product)}/800/600" alt="Product Image" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div class="video-placeholder" style="border-radius: 16px; overflow: hidden; background: var(--bg-color); display: flex; flex-direction: column; align-items: center; justify-content: center; border: 2px dashed var(--primary-color); aspect-ratio: 4/3;">
            <i data-lucide="video" size="48" style="color: var(--primary-color);"></i>
            <p style="margin-top: 1rem; font-weight: 600;">Promotional Video Concept Ready</p>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
        <div class="glass-card">
          <h3 style="margin-bottom: 1rem; border-bottom: 2px solid var(--accent-color); display: inline-block;">\${target.lang} Version</h3>
          <p style="font-size: 1.1rem; line-height: 1.8;">
            Experience the future of <strong>\${product}</strong> designed specifically for <strong>\${audience}</strong>. 
            Our latest innovation brings unparalleled quality and style to your daily routine. 
            Don't miss out on the most anticipated release in <strong>\${country}</strong> this year.
          </p>
        </div>
        <div class="glass-card">
          <h3 style="margin-bottom: 1rem; border-bottom: 2px solid var(--primary-color); display: inline-block;">한국어 번역 (Korean)</h3>
          <p style="font-size: 1.1rem; line-height: 1.8;">
            <strong>\${audience}</strong>를 위해 특별히 설계된 <strong>\${product}</strong>의 미래를 경험해보세요.
            우리의 최신 혁신은 당신의 일상에 비교할 수 없는 품질과 스타일을 선사합니다.
            올해 <strong>\${country}</strong>에서 가장 기대되는 출시작을 놓치지 마세요.
          </p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 3rem;">
        <button class="btn-primary" id="reset-btn">새로운 문구 생성하기</button>
      </div>
    \`;
    
    outputContent.innerHTML = htmlContent;
    
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        window.location.reload();
      });
    }
    
    if (window.lucide) {
      lucide.createIcons();
    }
  }
});
