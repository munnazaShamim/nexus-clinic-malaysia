'use client';

import { useState, useEffect, useCallback } from 'react';

// ── price-field detection ────────────────────────────────────────────────────
const PRICE_KEYS = new Set([
  'normalPrice', 'sellingPrice', 'promoPrice', 'trialPrice',
  'price', 'selling', 'promo',
]);
const isPrice = (k: string) => PRICE_KEYS.has(k);

// label shown for each row — first non-price field with a meaningful value
const LABEL_KEYS = ['treatment', 'product', 'programme', 'factor', 'type', 'brand', 'applicator'];
function rowLabel(row: Record<string, string>): string {
  for (const k of LABEL_KEYS) {
    if (row[k]) return row[k];
  }
  return Object.entries(row).find(([k, v]) => v && !isPrice(k))?.[1] ?? '—';
}

// ── section + tab config ─────────────────────────────────────────────────────
const LABELS: Record<string, string> = {
  dermalFillerPricing: 'Dermal Filler', lipFillerPricing: 'Lip Filler',
  underEyeFillerPricing: 'Under Eye Filler', tearTroughFillerPricing: 'Tear Trough Filler',
  skinBoosterPricing: 'Skin Booster', noseThreadLiftPricing: 'Nose Thread Lift',
  noseFillerPricing: 'Nose Filler', jawlineFillerPricing: 'Jawline Filler',
  chinFillerPricing: 'Chin Filler', cheekFillerPricing: 'Cheek Filler',
  plinestPricing: 'Plinest', profhiloPricing: 'Profhilo',
  sculptraPricing: 'Sculptra', karismaPricing: 'Karisma',
  newestPricing: 'Newest', botoxPricing: 'Botox',
  mounjaroPricing: 'Mounjaro', glpPricing: 'GLP-1 Overview',
  hcgPricing: 'HCG Programme', ivDripPricing: 'IV Drip',
  doctorMonitoredPricing: 'Doctor Monitored', zepBoundPricing: 'Zepbound',
  coolsculptingPricing: 'Coolsculpting',
  acneTreatmentPricing: 'Acne Treatment', acneScarPricing: 'Acne Scar',
  melasmaPricing: 'Melasma', moleRemovalPricing: 'Mole Removal',
  hydrafacialPricing: 'Hydrafacial', picoLaserPricing: 'Pico Laser',
  darkEyeCirclePricing: 'Dark Eye Circle', skinWhiteningPricing: 'Skin Whitening',
  tattooRemovalPricing: 'Tattoo Removal', chemicalPeelPricing: 'Chemical Peel',
  rosaceaPricing: 'Rosacea', pigmentationPricing: 'Pigmentation',
  stretchMarkPricing: 'Stretch Mark',
  laserHairRemovalFemalePricing: 'Laser Hair Removal (Female)',
  laserHairRemovalMalePricing: 'Laser Hair Removal (Male)',
  hairTransplantPricing: 'Hair Transplant', fueHairTransplantPricing: 'FUE Hair Transplant',
  beardTreatmentPricing: 'Beard Treatment', prpHairPricing: 'PRP Hair',
  hairMesotherapyPricing: 'Hair Mesotherapy', minoxidilPricing: 'Minoxidil',
  finasteridePricing: 'Finasteride', hairLossPricing: 'Hair Loss',
  oShotPricing: 'O-Shot', pShotPricing: 'P-Shot',
  edTreatmentPricing: 'ED Treatment', testosteronePricing: 'Testosterone',
  menopausePricing: 'Menopause', stemCellPricing: 'Stem Cell',
  antiAgingInjectablesPricing: 'Anti-Aging Injectables',
  antiAgingWellnessPricing: 'Anti-Aging Wellness',
  hormoneReplacementPricing: 'Hormone Replacement', shockwavePricing: 'Shockwave',
};

const TABS = [
  {
    id: 'face', label: 'Face',
    keys: ['dermalFillerPricing', 'lipFillerPricing', 'underEyeFillerPricing',
      'tearTroughFillerPricing', 'skinBoosterPricing', 'noseThreadLiftPricing',
      'noseFillerPricing', 'jawlineFillerPricing', 'chinFillerPricing',
      'cheekFillerPricing', 'plinestPricing', 'profhiloPricing', 'sculptraPricing',
      'karismaPricing', 'newestPricing', 'botoxPricing'],
  },
  {
    id: 'weight', label: 'Weight Loss',
    keys: ['mounjaroPricing', 'glpPricing', 'hcgPricing', 'ivDripPricing',
      'doctorMonitoredPricing', 'zepBoundPricing', 'coolsculptingPricing'],
  },
  {
    id: 'skin', label: 'Skin',
    keys: ['acneTreatmentPricing', 'acneScarPricing', 'melasmaPricing',
      'moleRemovalPricing', 'hydrafacialPricing', 'picoLaserPricing',
      'darkEyeCirclePricing', 'skinWhiteningPricing', 'tattooRemovalPricing',
      'chemicalPeelPricing', 'rosaceaPricing', 'pigmentationPricing',
      'stretchMarkPricing', 'laserHairRemovalFemalePricing', 'laserHairRemovalMalePricing'],
  },
  {
    id: 'hair', label: 'Hair',
    keys: ['hairTransplantPricing', 'fueHairTransplantPricing', 'beardTreatmentPricing',
      'prpHairPricing', 'hairMesotherapyPricing', 'minoxidilPricing',
      'finasteridePricing', 'hairLossPricing'],
  },
  {
    id: 'regen', label: 'Regenerative',
    keys: ['oShotPricing', 'pShotPricing', 'edTreatmentPricing', 'testosteronePricing',
      'menopausePricing', 'stemCellPricing', 'antiAgingInjectablesPricing',
      'antiAgingWellnessPricing', 'hormoneReplacementPricing', 'shockwavePricing'],
  },
];

// ── types ────────────────────────────────────────────────────────────────────
type Row = Record<string, string>;
type PricingData = Record<string, Row[]>;
type CardPrices = { mounjaro: string; ozempic: string; wegovy: string; saxenda: string };

export default function PricingAdmin() {
  const [password, setPassword] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const [loginError, setLoginError] = useState('');

  const [pricingData, setPricingData] = useState<PricingData>({});
  const [cardPrices, setCardPrices] = useState<CardPrices>({ mounjaro: '', ozempic: '', wegovy: '', saxenda: '' });

  const [activeTab, setActiveTab] = useState('face');
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

  const [status, setStatus] = useState<'idle' | 'saving' | 'rebuilding' | 'done' | 'error'>('idle');
  const [countdown, setCountdown] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');

  // ── auth ──────────────────────────────────────────────────────────────────
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError('');
    const res = await fetch('/api/admin/pricing/', {
      headers: { Authorization: `Bearer ${password}` },
    });
    if (!res.ok) { setLoginError('Incorrect password'); return; }
    const { data, overrides } = await res.json();
    setToken(password);
    loadData(data, overrides);
  }

  function loadData(data: Record<string, unknown>, overrides: Record<string, unknown>) {
    const pricing: PricingData = {};
    for (const key of Object.values(TABS).flatMap(t => t.keys)) {
      if (Array.isArray(data[key])) {
        pricing[key] = (data[key] as Row[]).map((row, i) => {
          const ovRow = Array.isArray(overrides[key]) ? (overrides[key] as Row[])[i] : null;
          return ovRow ? { ...row, ...ovRow } : { ...row };
        });
      }
    }
    setPricingData(pricing);

    const card = data['productCardPrices'] as CardPrices;
    const cardOv = overrides['productCardPrices'] as Partial<CardPrices> | undefined;
    setCardPrices({ ...card, ...(cardOv ?? {}) });
  }

  // ── field edit ────────────────────────────────────────────────────────────
  const updateField = useCallback((section: string, rowIdx: number, field: string, value: string) => {
    setPricingData(prev => {
      const rows = [...(prev[section] ?? [])];
      rows[rowIdx] = { ...rows[rowIdx], [field]: value };
      return { ...prev, [section]: rows };
    });
  }, []);

  // ── save + rebuild ────────────────────────────────────────────────────────
  async function handleSave() {
    if (!token) return;
    setStatus('saving');
    setErrorMsg('');

    // Build overrides: only price fields per row
    const overrides: Record<string, unknown> = {};
    for (const [section, rows] of Object.entries(pricingData)) {
      overrides[section] = rows.map(row => {
        const patch: Record<string, string> = {};
        for (const [k, v] of Object.entries(row)) {
          if (isPrice(k)) patch[k] = v;
        }
        return patch;
      });
    }
    overrides['productCardPrices'] = { ...cardPrices };

    // Write overrides
    const saveRes = await fetch('/api/admin/pricing/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ overrides }),
    });
    if (!saveRes.ok) { setStatus('error'); setErrorMsg('Failed to save. Check server.'); return; }

    // Trigger rebuild
    setStatus('rebuilding');
    const rebuildRes = await fetch('/api/admin/rebuild/', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!rebuildRes.ok) { setStatus('error'); setErrorMsg('Rebuild failed. SSH in and run: npm run build && pm2 reload nexus-clinic-malaysia'); return; }

    // Countdown
    setCountdown(60);
  }

  useEffect(() => {
    if (countdown <= 0) {
      if (status === 'rebuilding') setStatus('done');
      return;
    }
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown, status]);

  // ── section toggle ────────────────────────────────────────────────────────
  function toggleSection(key: string) {
    setOpenSections(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }

  // ── render: login ─────────────────────────────────────────────────────────
  if (!token) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-sm">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Pricing Admin</h1>
          <p className="text-sm text-gray-500 mb-6">Nexus Clinic — internal use only</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Admin password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-lg py-3 text-sm font-semibold hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── render: editor ────────────────────────────────────────────────────────
  const activeTabDef = TABS.find(t => t.id === activeTab)!;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-bold text-gray-800 text-lg">Pricing Admin</h1>
          <div className="flex items-center gap-3">
            {status === 'idle' && (
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition"
              >
                Save &amp; Rebuild
              </button>
            )}
            {status === 'saving' && (
              <span className="text-sm text-gray-500 animate-pulse">Saving…</span>
            )}
            {status === 'rebuilding' && countdown > 0 && (
              <span className="text-sm text-amber-600 font-medium">
                Building… {countdown}s remaining
              </span>
            )}
            {status === 'done' && (
              <span className="text-sm text-green-600 font-medium flex items-center gap-1">
                ✓ Live! Reload the site to verify.
                <button onClick={() => setStatus('idle')} className="ml-2 underline text-gray-500 text-xs">Edit more</button>
              </span>
            )}
            {status === 'error' && (
              <span className="text-sm text-red-600 flex items-center gap-2">
                {errorMsg}
                <button onClick={() => setStatus('idle')} className="underline text-gray-500 text-xs whitespace-nowrap">Try again</button>
              </span>
            )}
            <button
              onClick={() => setToken(null)}
              className="text-xs text-gray-400 hover:text-gray-600 underline"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-6xl mx-auto px-4 flex gap-0 border-t overflow-x-auto">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 text-sm font-medium border-b-2 transition whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 space-y-3">
        {/* Product card prices — shown in weight loss tab */}
        {activeTab === 'weight' && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleSection('_productCards')}
              className="w-full flex items-center justify-between px-5 py-3 text-left hover:bg-gray-50"
            >
              <span className="font-semibold text-gray-800 text-sm">
                Product Card Prices (Mounjaro / Ozempic / Wegovy / Saxenda)
              </span>
              <span className="text-gray-400 text-xs">{openSections.has('_productCards') ? '▲' : '▼'}</span>
            </button>
            {openSections.has('_productCards') && (
              <div className="px-5 pb-5 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-gray-100 pt-4">
                {(Object.entries(cardPrices) as [keyof CardPrices, string][]).map(([drug, val]) => (
                  <div key={drug}>
                    <label className="block text-xs text-gray-500 mb-1 capitalize">{drug}</label>
                    <input
                      value={val}
                      onChange={e => setCardPrices(prev => ({ ...prev, [drug]: e.target.value }))}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Per-section accordion */}
        {activeTabDef.keys.map(sectionKey => {
          const rows = pricingData[sectionKey] ?? [];
          if (!rows.length) return null;

          // Detect which price fields this section uses
          const priceFields = Array.from(
            new Set(rows.flatMap(row => Object.keys(row).filter(isPrice)))
          );
          if (!priceFields.length) return null;

          const isOpen = openSections.has(sectionKey);

          return (
            <div key={sectionKey} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleSection(sectionKey)}
                className="w-full flex items-center justify-between px-5 py-3 text-left hover:bg-gray-50"
              >
                <span className="font-semibold text-gray-800 text-sm">
                  {LABELS[sectionKey] ?? sectionKey}
                  <span className="ml-2 text-xs font-normal text-gray-400">{rows.length} item{rows.length !== 1 ? 's' : ''}</span>
                </span>
                <span className="text-gray-400 text-xs">{isOpen ? '▲' : '▼'}</span>
              </button>

              {isOpen && (
                <div className="border-t border-gray-100">
                  {rows.map((row, i) => (
                    <div
                      key={i}
                      className={`px-5 py-3 flex flex-col gap-2 ${i !== 0 ? 'border-t border-gray-50' : ''}`}
                    >
                      {/* Row identifier */}
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        {rowLabel(row)}
                      </p>
                      {/* Price inputs */}
                      <div className="flex flex-wrap gap-3">
                        {priceFields.map(field => (
                          <div key={field} className="flex flex-col gap-1 min-w-[140px]">
                            <label className="text-xs text-gray-400 capitalize">
                              {field.replace(/([A-Z])/g, ' $1').toLowerCase()}
                            </label>
                            <input
                              value={row[field] ?? ''}
                              onChange={e => updateField(sectionKey, i, field, e.target.value)}
                              className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Sticky save bar at bottom */}
      <div className="sticky bottom-0 bg-white border-t px-4 py-3 flex items-center justify-between max-w-6xl mx-auto">
        <p className="text-xs text-gray-400">Changes are saved to the server and the site rebuilds automatically (~30–60s).</p>
        {status === 'idle' && (
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition"
          >
            Save &amp; Rebuild
          </button>
        )}
        {status === 'rebuilding' && countdown > 0 && (
          <span className="text-sm text-amber-600 font-semibold">Building… {countdown}s</span>
        )}
        {status === 'done' && (
          <span className="text-sm text-green-600 font-semibold">✓ Prices updated!</span>
        )}
      </div>
    </div>
  );
}
