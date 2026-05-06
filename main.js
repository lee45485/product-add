// Helper for Lucide icons in Shadow DOM
function initIcons(root) {
  if (window.lucide) {
    window.lucide.createIcons({
      portal: root
    });
  }
}

// Custom Web Component: Header
class YtHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = \`
      <header slot="header">
        <div class="header-left">
          <button class="icon-btn"><i data-lucide="menu"></i></button>
          <div class="logo">
            <i data-lucide="play-circle" fill="currentColor"></i>
            <span>YouTube</span>
          </div>
        </div>
        <div class="header-center">
          <div class="search-container">
            <input type="text" placeholder="Search">
            <button class="search-btn"><i data-lucide="search" size="20"></i></button>
          </div>
          <button class="icon-btn mic-btn"><i data-lucide="mic" size="20"></i></button>
        </div>
        <div class="header-right">
          <button class="icon-btn"><i data-lucide="video"></i></button>
          <button class="icon-btn"><i data-lucide="bell"></i></button>
          <div class="user-avatar">
            <i data-lucide="user" size="20"></i>
          </div>
        </div>
      </header>
    \`;
    // Since we are NOT using Shadow DOM for the header to keep it part of the grid layout easily,
    // we just use innerHTML. Or we can use Shadow DOM and absolute positioning.
    // Let's stick to standard DOM for top-level layout components for simplicity in grid areas.
    if (window.lucide) lucide.createIcons();
  }
}
customElements.define('yt-header', YtHeader);

// Custom Web Component: Sidebar
class YtSidebar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = \`
      <aside>
        <nav>
          <div class="nav-item active"><i data-lucide="home"></i><span>Home</span></div>
          <div class="nav-item"><i data-lucide="clapperboard"></i><span>Shorts</span></div>
          <div class="nav-item"><i data-lucide="library"></i><span>Subscriptions</span></div>
          <hr>
          <div class="nav-section-title">You</div>
          <div class="nav-item"><i data-lucide="history"></i><span>History</span></div>
          <div class="nav-item"><i data-lucide="play-square"></i><span>Your videos</span></div>
          <div class="nav-item"><i data-lucide="clock"></i><span>Watch later</span></div>
          <div class="nav-item"><i data-lucide="thumbs-up"></i><span>Liked videos</span></div>
        </nav>
      </aside>
    \`;
    if (window.lucide) lucide.createIcons();
  }
}
customElements.define('yt-sidebar', YtSidebar);

// Custom Web Component: Categories
class YtCategories extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const categories = ["All", "Music", "Gaming", "Live", "Coding", "News", "Movies", "Tech", "Podcasts", "Mixes", "Comedy"];
    this.innerHTML = \`
      <div class="categories-bar">
        \${categories.map(cat => \`<button class="chip \${cat === 'All' ? 'active' : ''}">\${cat}</button>\`).join('')}
      </div>
    \`;
  }
}
customElements.define('yt-categories', YtCategories);

// Custom Web Component: Video Card (using Shadow DOM)
class VideoCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['thumbnail', 'title', 'channel', 'views', 'time'];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const thumbnail = this.getAttribute('thumbnail') || 'https://via.placeholder.com/320x180';
    const title = this.getAttribute('title') || 'Video Title';
    const channel = this.getAttribute('channel') || 'Channel Name';
    const views = this.getAttribute('views') || '0';
    const time = this.getAttribute('time') || 'just now';

    this.shadowRoot.innerHTML = \`
      <style>
        :host {
          display: block;
          cursor: pointer;
        }
        .card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: transform 0.2s ease;
        }
        .card:hover {
          transform: translateY(-4px);
        }
        .thumbnail-container {
          position: relative;
          aspect-ratio: 16 / 9;
          border-radius: 12px;
          overflow: hidden;
          background: #222;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        .thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .duration {
          position: absolute;
          bottom: 8px;
          right: 8px;
          background: rgba(0,0,0,0.8);
          color: white;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
        }
        .details {
          display: flex;
          gap: 12px;
        }
        .channel-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(45deg, #444, #666);
          flex-shrink: 0;
        }
        .info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .title {
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.4;
        }
        .meta {
          font-size: 13px;
          color: #aaa;
        }
      </style>
      <div class="card">
        <div class="thumbnail-container">
          <img class="thumbnail" src="\${thumbnail}" alt="\${title}">
          <div class="duration">15:20</div>
        </div>
        <div class="details">
          <div class="channel-avatar"></div>
          <div class="info">
            <div class="title">\${title}</div>
            <div class="meta">\${channel}</div>
            <div class="meta">\${views} views • \${time}</div>
          </div>
        </div>
      </div>
    \`;
  }
}
customElements.define('yt-video-card', VideoCard);

// Mock Data
const MOCK_VIDEOS = [
  { title: "Building a YouTube Clone with Web Components", channel: "Modern Web Dev", views: "1.2M", time: "2 days ago", thumbnail: "https://picsum.photos/seed/yt1/320/180" },
  { title: "CSS Container Queries are Finally Here!", channel: "Design Systems", views: "850K", time: "5 hours ago", thumbnail: "https://picsum.photos/seed/yt2/320/180" },
  { title: "Top 10 Baseline Features in 2024", channel: "Web Standards", views: "2.5M", time: "1 week ago", thumbnail: "https://picsum.photos/seed/yt3/320/180" },
  { title: "The Future of JavaScript: Signals?", channel: "JS Weekly", views: "500K", time: "3 days ago", thumbnail: "https://picsum.photos/seed/yt4/320/180" },
  { title: "Mastering the :has() Selector", channel: "CSS Pro", views: "150K", time: "12 hours ago", thumbnail: "https://picsum.photos/seed/yt5/320/180" },
  { title: "Advanced Three.js Shader Techniques", channel: "3D Graphics Hub", views: "300K", time: "4 days ago", thumbnail: "https://picsum.photos/seed/yt6/320/180" },
  { title: "The Art of Clean Code in 2026", channel: "Code Mastery", views: "450K", time: "2 days ago", thumbnail: "https://picsum.photos/seed/yt7/320/180" },
  { title: "WebGPU vs WebGL: What should you use?", channel: "Graphics Guru", views: "200K", time: "6 days ago", thumbnail: "https://picsum.photos/seed/yt8/320/180" }
];

// Initialize Grid
function initGrid() {
  const grid = document.getElementById('video-grid');
  if (grid) {
    grid.innerHTML = '';
    MOCK_VIDEOS.forEach(video => {
      const card = document.createElement('yt-video-card');
      card.setAttribute('title', video.title);
      card.setAttribute('channel', video.channel);
      card.setAttribute('views', video.views);
      card.setAttribute('time', video.time);
      card.setAttribute('thumbnail', video.thumbnail);
      grid.appendChild(card);
    });
  }
}

document.addEventListener('DOMContentLoaded', initGrid);
