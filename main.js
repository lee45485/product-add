document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-btn');
  const inputSection = document.getElementById('input-section');
  const resultSection = document.getElementById('result-section');
  const loadingState = document.getElementById('loading-state');
  const outputContent = document.getElementById('output-content');

  generateBtn.addEventListener('click', async () => {
    const product = document.getElementById('product-name').value;
    const audience = document.getElementById('target-audience').value;
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

    // Simulate AI Generation delay
    setTimeout(() => {
      loadingState.style.display = 'none';
      renderResults(product, audience, country);
    }, 2500);
  });

  function renderResults(product, audience, country) {
    const langMap = {
      USA: { lang: 'English', greeting: 'Revolutionize Your Life' },
      Japan: { lang: 'Japanese', greeting: 'あなたの生活を革新する' },
      France: { lang: 'French', greeting: 'Révolutionnez votre vie' },
      Germany: { lang: 'German', greeting: 'Revolutionieren Sie Ihr Leben' }
    };

    const target = langMap[country];

    outputContent.innerHTML = \`
      <div class="glass-card" style="margin-bottom: 2rem;">
        <h2 style="font-size: 2rem; margin-bottom: 1.5rem; color: var(--primary-color);">\${target.greeting}</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
          <div class="media-container" style="border-radius: 16px; overflow: hidden; background: #000;">
            <img src="https://picsum.photos/seed/\${product}/800/600" alt="Product Image" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div class="video-placeholder" style="border-radius: 16px; overflow: hidden; background: var(--bg-color); display: flex; flex-direction: column; align-items: center; justify-content: center; border: 2px dashed var(--primary-color);">
            <i data-lucide="video" size="48" style="color: var(--primary-color);"></i>
            <p style="margin-top: 1rem; font-weight: 600;">Promotional Video Concept Ready</p>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
        <div class="glass-card">
          <h3 style="margin-bottom: 1rem; border-bottom: 2px solid var(--accent-color); display: inline-block;">\${target.lang} Version</h3>
          <p style="font-size: 1.1rem; line-height: 1.8;">
            Experience the future of \${product} designed specifically for \${audience}. 
            Our latest innovation brings unparalleled quality and style to your daily routine. 
            Don't miss out on the most anticipated release in \${country} this year.
          </p>
        </div>
        <div class="glass-card">
          <h3 style="margin-bottom: 1rem; border-bottom: 2px solid var(--primary-color); display: inline-block;">한국어 번역 (Korean)</h3>
          <p style="font-size: 1.1rem; line-height: 1.8;">
            \${audience}를 위해 특별히 설계된 \${product}의 미래를 경험해보세요.
            우리의 최신 혁신은 당신의 일상에 비교할 수 없는 품질과 스타일을 선사합니다.
            올해 \${country}에서 가장 기대되는 출시작을 놓치지 마세요.
          </p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 3rem;">
        <button class="btn-primary" id="reset-btn">새로운 문구 생성하기</button>
      </div>
    \`;
    
    document.getElementById('reset-btn').addEventListener('click', () => location.reload());
    
    if (window.lucide) lucide.createIcons();
  }
});
