import { NextRequest, NextResponse } from 'next/server';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';
import {
  dermalFillerPricing, lipFillerPricing, underEyeFillerPricing,
  tearTroughFillerPricing, skinBoosterPricing, noseThreadLiftPricing,
  noseFillerPricing, jawlineFillerPricing, chinFillerPricing,
  cheekFillerPricing, plinestPricing, profhiloPricing, sculptraPricing,
  karismaPricing, newestPricing, botoxPricing,
  coolsculptingPricing, mounjaroPricing, wegovyComparisonPricing,
  zepBoundPricing, hcgPricing, ivDripPricing, doctorMonitoredPricing,
  duromineComparisonPricing, glpPricing, ozempicComparisonPricing,
  acneTreatmentPricing, acneScarPricing, melasmaPricing, moleRemovalPricing,
  hydrafacialPricing, picoLaserPricing, darkEyeCirclePricing, skinWhiteningPricing,
  tattooRemovalPricing, chemicalPeelPricing, rosaceaPricing, pigmentationPricing,
  stretchMarkPricing, laserHairRemovalFemalePricing, laserHairRemovalMalePricing,
  hairTransplantPricing, fueHairTransplantPricing, beardTreatmentPricing,
  prpHairPricing, hairMesotherapyPricing, minoxidilPricing, finasteridePricing,
  hairLossPricing, oShotPricing, pShotPricing, edTreatmentPricing,
  testosteronePricing, menopausePricing, stemCellPricing,
  antiAgingInjectablesPricing, antiAgingWellnessPricing,
  hormoneReplacementPricing, shockwavePricing, productCardPrices,
} from '@/src/data/pricing';

export const dynamic = 'force-dynamic';

const OVERRIDES_PATH = join(process.cwd(), 'src/data/pricing-overrides.json');

const ALL_PRICING = {
  dermalFillerPricing, lipFillerPricing, underEyeFillerPricing,
  tearTroughFillerPricing, skinBoosterPricing, noseThreadLiftPricing,
  noseFillerPricing, jawlineFillerPricing, chinFillerPricing,
  cheekFillerPricing, plinestPricing, profhiloPricing, sculptraPricing,
  karismaPricing, newestPricing, botoxPricing,
  coolsculptingPricing, mounjaroPricing, wegovyComparisonPricing,
  zepBoundPricing, hcgPricing, ivDripPricing, doctorMonitoredPricing,
  duromineComparisonPricing, glpPricing, ozempicComparisonPricing,
  acneTreatmentPricing, acneScarPricing, melasmaPricing, moleRemovalPricing,
  hydrafacialPricing, picoLaserPricing, darkEyeCirclePricing, skinWhiteningPricing,
  tattooRemovalPricing, chemicalPeelPricing, rosaceaPricing, pigmentationPricing,
  stretchMarkPricing, laserHairRemovalFemalePricing, laserHairRemovalMalePricing,
  hairTransplantPricing, fueHairTransplantPricing, beardTreatmentPricing,
  prpHairPricing, hairMesotherapyPricing, minoxidilPricing, finasteridePricing,
  hairLossPricing, oShotPricing, pShotPricing, edTreatmentPricing,
  testosteronePricing, menopausePricing, stemCellPricing,
  antiAgingInjectablesPricing, antiAgingWellnessPricing,
  hormoneReplacementPricing, shockwavePricing, productCardPrices,
};

function isAuthorized(req: NextRequest) {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) return false;
  return req.headers.get('authorization') === `Bearer ${pw}`;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const currentOverrides = existsSync(OVERRIDES_PATH)
      ? JSON.parse(readFileSync(OVERRIDES_PATH, 'utf-8'))
      : {};
    return NextResponse.json({ data: ALL_PRICING, overrides: currentOverrides });
  } catch (err) {
    console.error('[Admin] GET error:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const { overrides } = await req.json() as { overrides: Record<string, unknown> };
    writeFileSync(OVERRIDES_PATH, JSON.stringify(overrides, null, 2));
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Admin] POST error:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
