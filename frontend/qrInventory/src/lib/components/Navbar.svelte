<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores"

  let isMobile = $state(true);
  let isMenuOpen = $state(false); // 1. New state variable to track menu toggle

  onMount(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    isMobile = mediaQuery.matches;

    const handler = (e) => {
      isMobile = e.matches;
      if (!isMobile) isMenuOpen = false; // Reset menu state if resized back to desktop
    };
    mediaQuery.addEventListener('change', handler);
    
    return () => mediaQuery.removeEventListener('change', handler);
  });

  let menuItems = [
    { id: 'dashboard', label: 'Dashboard', href: '/dashboard' },
    { id: 'sales', label: 'Sales', href: '/sales' },
    { id: 'inventory', label: 'Inventory', href: '/inventory' },
    { id: 'reports', label: 'Reports', badge: 6, href: '/reports' },
    { id: 'maintenance', label: 'Maintenance', badge: 1, href: '/maintenance' },
    { id: 'users', label: 'Users', href: '/users' },
    { id: 'settings', label: 'Settings', href: '/settings' }
  ];

</script>

<!-- 2. Changed to apply a 'collapsed' class ONLY when it's mobile and the menu is NOT open -->
<aside class="sidebar" class:collapsed={isMobile && !isMenuOpen}>
  <img src="/velocipede+Logo+2023.webp" alt="Velocipede" class="logo" />
  <hr class="divider" />

  <nav class="menu">
    <ul class="menu-list">
      {#if isMobile}
        <li>
          <!-- 3. Added an onclick event to toggle the menu open/closed -->
          <div class="hamburger" onclick={() => isMenuOpen = !isMenuOpen} role="button" tabindex="0">
            {#if isMenuOpen}
              <!-- Close (X) Icon when open -->
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            {:else}
              <!-- Hamburger Icon when closed -->
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            {/if}
          </div>
        </li>
      {/if}
      {#each menuItems as item}
        <li>
          <a href={item.href} class="menu-item {$page.url.pathname.startsWith(item.href) ? 'active' : ''}">
            <div class="icon-container">
              {#if item.id === 'dashboard'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              {:else if item.id === 'sales'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              {:else if item.id === 'inventory'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              {:else if item.id === 'reports'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              {:else if item.id === 'maintenance'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              {:else if item.id === 'users'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              {:else if item.id === 'settings'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              {/if}
              
              {#if item.badge}
                <span class="badge">{item.badge}</span>
              {/if}
            </div>
            
            <!-- 4. Text labels show if it's desktop OR the menu is toggled open -->
            {#if !isMobile || isMenuOpen}
              <span class="label">{item.label}</span>
            {/if}
          </a>
        </li>
      {/each}
    </ul>
  </nav>

  <hr class="divider" />

  <a href="/logout" class="menu-item logout">
    <div class="icon-container">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <polyline points="16 17 21 12 16 7"></polyline>
        <line x1="21" y1="12" x2="9" y2="12"></line>
      </svg>
    </div>
    
    {#if !isMobile || isMenuOpen}
      <span class="label">Log Out</span>
    {/if}
    
  </a>
</aside>

<style>
  .sidebar {
    width: 200px;
    padding: 24px 16px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: width 0.2s ease, padding 0.2s ease;
    overflow: hidden; /* Prevents text wrap artifacts during the transition */
  }

  /* 5. Renamed from .mobile to .collapsed so it applies correctly */
  .sidebar.collapsed {
    width: 64px;
    padding: 24px 8px;
    align-items: center;
  }

  .sidebar.collapsed .menu-item {
    justify-content: center;
    gap: 0;
  }

  .hamburger {
    width: 24px;
    height: 24px;
    cursor: pointer;
    color: #1a1a1a;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
  }

  .menu-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 28px;
    width: 100%;
  }

  .menu-item {
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    color: #446487;
    font-size: 16px;
    white-space: nowrap; /* Ensures text doesn't break to a new line while collapsing */
  }

  .menu-item:hover .label {
    opacity: 0.8;
  }

  .icon-container {
    position: relative;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1a1a1a;
    flex-shrink: 0; /* Prevent icons from getting squished during animation */
  }

  .icon-container svg {
    width: 100%;
    height: 100%;
  }

  .menu-item.active .label {
    color: #ef4444; 
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .menu-item.active .icon-container {
    color: #ef4444; 
  }

  .badge {
    position: absolute;
    top: -6px;
    right: -8px;
    background-color: #ef4444;
    color: white;
    font-size: 10px;
    font-weight: bold;
    min-width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ffffff; 
  }

  .divider {
    border: none;
    border-top: 2px dotted #caced1;
    margin: 32px 0;
    width: 100%;
  }

  .logout {
    align-items: center;
    margin-top: 8px;
    width: 100%;
  }

  .logo {
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: 0 auto;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
</style>