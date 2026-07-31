<script>
  // Data structure representing the menu items from image_84fbff.png
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', isActive: true, href: '/dashboard' },
    { id: 'sales', label: 'Sales', isActive: false, href: '/sales' },
    { id: 'inventory', label: 'Inventory', isActive: false, href: '/inventory' },
    { id: 'reports', label: 'Reports', isActive: false, badge: 6, href: '/reports' },
    { id: 'maintenance', label: 'Maintenance', isActive: false, badge: 1, href: '/maintenance' },
    { id: 'users', label: 'Users', isActive: false, href: '/users' },
    { id: 'settings', label: 'Settings', isActive: false, href: '/settings' }
  ];
</script>

<aside class="sidebar">
  <img src="/velocipede+Logo+2023.webp" alt="Velocipede" class="logo" />

  <hr class="divider" />

    <nav class="menu">
    <ul class="menu-list">
        {#each menuItems as item}
        <li>
            <!-- Swapped to an anchor tag and added the href attribute -->
            <a href={item.href} class="menu-item {item.isActive ? 'active' : ''}">
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
            <span class="label">{item.label}</span>
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
  <span class="label">Log Out</span>
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
  }

  .menu-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .menu-item {
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    color: #446487; /* Standard dark blue/grey text */
    font-size: 16px;
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
    color: #1a1a1a; /* Black outline for icons */
  }

  .icon-container svg {
    width: 100%;
    height: 100%;
  }

  /* Active State Styling */
  .menu-item.active .label {
    color: #ef4444; /* Red color */
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  /* Red Notification Badge */
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
    border: 2px solid #ffffff; /* White border to separate from icon */
  }

  /* Dotted Line Divider */
  .divider {
    border: none;
    border-top: 2px dotted #caced1;
    margin: 32px 0;
    width: 100%;
  }

  .logout {
    align-items: center;
    margin-top: 8px;
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