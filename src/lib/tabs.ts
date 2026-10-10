// Accessible tabs (WAI-ARIA tabs pattern): click or use ←/→/Home/End to switch.
// Only the selected tab is in the Tab order; the rest are reached with the arrow keys.
export function initTabs(tabs: HTMLElement[], panels: HTMLElement[], idPrefix: string) {
  tabs.forEach((tab, i) => {
    const panel = panels[i];
    if (!panel) return;
    tab.id ||= `${idPrefix}-tab-${i}`;
    panel.id ||= `${idPrefix}-panel-${i}`;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panel.id);
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tab.id);
    panel.tabIndex = 0;
  });

  const select = (n: number, focus = false) => {
    tabs.forEach((t, i) => {
      t.setAttribute('aria-selected', String(i === n));
      t.tabIndex = i === n ? 0 : -1;
    });
    panels.forEach((p, i) => (p.hidden = i !== n));
    if (focus) tabs[n].focus();
  };
  // Keep the chosen tab fully visible in a swipeable row (phones).
  const reveal = (n: number) => tabs[n].scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => { select(i); reveal(i); });
    tab.addEventListener('keydown', (e) => {
      const last = tabs.length - 1;
      const next = { ArrowRight: i === last ? 0 : i + 1, ArrowLeft: i === 0 ? last : i - 1, Home: 0, End: last }[e.key];
      if (next === undefined) return;
      e.preventDefault();
      select(next, true);
      reveal(next);
    });
  });

  const start = tabs.findIndex((t) => t.getAttribute('aria-selected') === 'true');
  select(start < 0 ? 0 : start);
}
