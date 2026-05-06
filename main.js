document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-btn');
  const inputSection = document.getElementById('input-section');
  const resultSection = document.getElementById('result-section');
  const loadingState = document.getElementById('loading-state');
  const outputContent = document.getElementById('output-content');

  if (!generateBtn) return;

  generateBtn.addEventListener('click', () => {
    const product = document.getElementById('product-name').value.trim();
    const audience = document.getElementById('target-audience').value.trim();
    const country = document.getElementById('target-country').value;

    if (!product || !audience) {
      alert('상품명과 타겟층을 입력해주세요!');
      return;
    }

    // UI State: Show Loading
    inputSection.style.display = 'none';
    resultSection.style.display = 'block';
    loadingState.style.display = 'block';
    outputContent.style.display = 'none';

    // Simulate AI Processing
    setTimeout(() => {
      try {
        renderResults(product, audience, country);
        loadingState.style.display = 'none';
        outputContent.style.display = 'block';
      } catch (error) {
        console.error('Rendering error:', error);
        alert('결과를 생성하는 중 오류가 발생했습니다.');
        location.reload();
      }
    }, 1500);
  });

  function renderResults(product, audience, country) {
    const langMap = {
      USA: { lang: 'English', greeting: 'Revolutionize Your Life' },
      UK: { lang: 'English (UK)', greeting: 'Elevate Your Everyday' },
      Japan: { lang: 'Japanese', greeting: 'あなたの生活를 革新する' },
      China: { lang: 'Chinese', greeting: '革新您的生活' },
      France: { lang: 'French', greeting: 'Révolutionnez votre vie' },
      Germany: { lang: 'German', greeting: 'Revolutionieren Sie Ihr Leben' },
      Spain: { lang: 'Spanish', greeting: 'Revoluciona tu vida' },
      Italy: { lang: 'Italian', greeting: 'Rivoluziona la tua vita' },
      Brazil: { lang: 'Portuguese', greeting: 'Revolucione sua vida' },
      Vietnam: { lang: 'Vietnamese', greeting: 'Cách mạng hóa cuộc sống của bạn' },
      Thailand: { lang: 'Thai', greeting: 'ปฏิวัติชีวิตของคุณ' }
    };

    const target = langMap[country] || langMap['USA'];

    outputContent.innerHTML = \`
      <div class="glass-card" style="margin-bottom: 2rem;">
        <h2 style="font-size: 2.2rem; margin-bottom: 1.5rem; color: var(--primary-color); text-align: center;">\${target.greeting}</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
          <div style="border-radius: 20px; overflow: hidden; box-shadow: var(--shadow-premium); background: #000; aspect-ratio: 16/9;">
            <img src="https://picsum.photos/seed/\${encodeURIComponent(product)}/800/450" alt="Product" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div style="border-radius: 20px; overflow: hidden; background: var(--surface-color); border: 2px dashed var(--primary-color); display: flex; flex-direction: column; align-items: center; justify-content: center; aspect-ratio: 16/9; padding: 1rem; text-align: center;">
            <i data-lucide="sparkles" size="48" style="color: var(--accent-color); margin-bottom: 1rem;"></i>
            <h4 style="font-weight: 700; color: var(--primary-color);">Bilingual Ad Campaign Ready</h4>
            <p style="font-size: 0.9rem; opacity: 0.7; margin-top: 0.5rem;">Optimized for \${country} Market</p>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
        <div class="glass-card" style="border-top: 4px solid var(--accent-color);">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
            <i data-lucide="languages" size="24" style="color: var(--accent-color);"></i>
            <h3 style="font-weight: 700;">\${target.lang} Version</h3>
          </div>
          <p style="font-size: 1.15rem; line-height: 1.8; color: var(--text-color);">
            Discover why <strong>\${product}</strong> is the top choice for <strong>\${audience}</strong> in \${country}. 
            Our cutting-edge technology and premium design deliver an experience like no other. 
            Join the community and see the difference today.
          </p>
        </div>

        <div class="glass-card" style="border-top: 4px solid var(--primary-color);">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
            <i data-lucide="languages" size="24" style="color: var(--primary-color);"></i>
            <h3 style="font-weight: 700;">한국어 번역</h3>
          </div>
          <p style="font-size: 1.15rem; line-height: 1.8; color: var(--text-color);">
            왜 <strong>\${product}</strong>가 \${country}의 <strong>\${audience}</strong>들에게 최고의 선택인지 확인해 보세요.
            최첨단 기술과 프리미엄 디자인이 결합되어 이전에 없던 특별한 경험을 선사합니다.
            지금 바로 커뮤니티에 합류하여 그 차이를 직접 느껴보세요.
          </p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 4rem;">
        <button class="btn-primary" id="reset-btn" style="padding: 1rem 3rem; font-size: 1.1rem;">
          <i data-lucide="refresh-cw" size="20" style="vertical-align: middle; margin-right: 0.5rem;"></i>
          다시 생성하기
        </button>
      </div>
    \`;
    
    document.getElementById('reset-btn').addEventListener('click', () => {
      window.location.reload();
    });
    
    if (window.lucide) {
      lucide.createIcons();
    }
  }
});
