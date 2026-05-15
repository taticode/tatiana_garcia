// --- COMPONENTES ATÓMICOS ---
const Icon = (cls, extra = "") => `<i class="${cls} ${extra}"></i>`;

// --- COMPONENTES DE ESTRUCTURA ---
const NavIconItem = (i) => `
    <div class="relative flex items-center px-1">
        ${Icon(i.name, "text-white text-xl cursor-pointer")}
        ${i.notification ? `<span class="absolute top-3 -right-2.5 bg-sygris-status-red-dark text-[9px] text-white font-bold px-1 py-0.5 rounded-lg border border-sygris-primary-purple">${appData.navData.notifNumber}</span>` : ''}
    </div>`;

const SubfolderItem = (sub) => {
    const activeClass = sub.active ? 'folder-active' : 'hover:bg-sygris-neutral-neutral';
    const folderIcons = sub.active 
        ? Icon("fa-regular fa-folder-open") 
        : `${Icon("fa-regular fa-folder", "group-hover:hidden")} ${Icon("fa-regular fa-folder-open", "hidden group-hover:inline-block")}`;

    return `
    <div class="pl-9 pr-2 py-2 flex items-center justify-between rounded-lg cursor-pointer group ${activeClass}">
        <div class="flex items-center gap-2 text-sygris-primary-purple">
            ${folderIcons}
            <span class="text-sm ${sub.active ? 'font-medium' : ''}">${sub.name} (${sub.count})</span>
        </div>
        <div class="relative">
            <button id="db-${sub.id}" data-dropdown-toggle="dd-${sub.id}" class="${sub.active ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 text-sygris-primary-purple">
                ${Icon("fa-solid fa-ellipsis-vertical")}
            </button>
            <div id="dd-${sub.id}" class="z-50 hidden bg-white rounded-lg shadow-xl border border-sygris-neutral-dark-2 w-44 ml-2">
                <ul class="py-2 text-[13px] font-bold">
                    <li class="text-sygris-primary-purple hover:bg-sygris-neutral-neutral">
                        <a href="#" class="flex items-center px-4 py-2">${Icon("fa-solid fa-pencil", "mr-3")} Edit folder</a>
                    </li>
                    <li class="text-sygris-status-red-dark hover:bg-sygris-neutral-neutral">
                        <a href="#" class="flex items-center px-4 py-2">${Icon("fa-solid fa-trash", "mr-3")} Delete folder</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>`;
};

// --- MÉTODOS DE RENDERIZADO ---
const renderNavbar = () => {
    const nav = appData.navData;
    let html = `
        <button class="flex items-center text-white gap-1 hover:opacity-80 transition cursor-pointer">
            <span class="text-[11px] font-bold uppercase">${nav.language}</span>
            ${Icon("fa-solid fa-chevron-down", "text-[8px]")}
        </button>
        <div class="h-4 w-px bg-white/20 mx-1"></div>
        ${nav.icons.map(NavIconItem).join('')}
        <div class="w-8 h-8 rounded-full bg-sygris-status-green-dark border border-white flex items-center justify-center ml-2">
            <span class="text-white text-[10px] font-bold">${nav.userInitials}</span>
        </div>`;
    document.getElementById('nav-items-container').innerHTML = html;
};

const renderSidenav = () => {
    const mapItems = (arr) => arr.map(item => `
        <div class="relative flex items-center mb-5 last:mb-0">
            <button data-tooltip-target="tt-${item.id}" class="sidenav-link ${item.active ? 'active' : ''}">
                ${item.isText ? `<span class="text-[10px] font-bold">${item.label}</span>` : Icon(item.icon, "text-lg")}
            </button>
            <div id="tt-${item.id}" role="tooltip" class="absolute z-50 invisible inline-block px-3 py-2 text-xs font-medium text-white bg-sygris-primary-grey rounded-lg shadow-sm opacity-0 tooltip">
                ${item.tooltip} <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>`).join('');
    
    document.getElementById('sidenav-top').innerHTML = mapItems(appData.sideData.top);
    document.getElementById('sidenav-bottom').innerHTML = mapItems(appData.sideData.bottom);
};

const renderFolders = () => {
    document.getElementById('folders-accordion-container').innerHTML = appData.folders.map(f => `
        <div class="mb-2">
            <h2 id="heading-${f.id}">
                <button type="button" class="flex items-center justify-between w-full p-2 text-sygris-primary-grey hover:bg-sygris-neutral-neutral rounded-lg" data-accordion-target="#body-${f.id}" aria-expanded="${f.isOpen}">
                    <div class="flex items-center gap-3">
                        ${Icon("fa-solid fa-chevron-up", "text-[10px] text-sygris-primary-purple transition-transform duration-300 accordion-chevron")}
                        ${Icon(f.icon, "text-xs text-sygris-grey-tertiary")}
                        <span class="text-sm font-medium">${f.name}</span>
                    </div>
                </button>
            </h2>
            <div id="body-${f.id}" class="hidden accordion-body-container">
                <div class="py-1 space-y-1">${f.subfolders.map(SubfolderItem).join('')}</div>
            </div>
        </div>`).join('');
    
    if (window.initFlowbite) window.initFlowbite();
};

const renderDashboards = () => {
    const container = document.getElementById('cards-grid-container');
    container.className = "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 overflow-y-auto px-8 pb-8 custom-scroll flex-1";
    
    container.innerHTML = appData.dashboards.map(dash => `
        <article class="dashboard-card group bg-white border border-sygris-neutral-dark-2 rounded-xl p-6 transition-all hover:shadow-lg">
            <div class="flex justify-between items-start mb-8">
                ${Icon(dash.isLocked ? 'fa-lock' : 'fa-lock-open', "text-sygris-neutral-dark-2")}
                <div class="flex gap-2">
                    ${Icon("fa-solid fa-thumbtack", dash.isPinned ? 'text-sygris-status-red-dark' : 'text-sygris-neutral-dark-2 opacity-40')}
                    ${Icon("fa-solid fa-star", dash.isFavorite ? 'text-sygris-status-yellow' : 'text-sygris-neutral-dark-2 opacity-40')}
                </div>
            </div>
            <h3 class="text-sygris-primary-purple font-bold text-base mb-1 group-hover:underline">${dash.title}</h3>
            <p class="text-[11px] text-sygris-grey-tertiary font-medium">${dash.author}, ${dash.date}</p>
        </article>`).join('');
};

document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderSidenav();
    renderFolders();
    renderDashboards();
});