export const marketingFlags = {
  enableHeroValue: true,
  enableProblemSolution: true,
  enableWorkflow: true,
  enableBenefits: true,
  enablePersonas: true,
  enableSecurity: true,
  enableFAQ: true,
  enableFinalCTA: true,
  enableMarketingSlider: true,
};

export const marketingEnvOverrides = {
  enableHeroValue: process.env.NEXT_PUBLIC_MARKETING_ENABLE_HERO_VALUE,
  enableProblemSolution: process.env.NEXT_PUBLIC_MARKETING_ENABLE_PROBLEM_SOLUTION,
  enableWorkflow: process.env.NEXT_PUBLIC_MARKETING_ENABLE_WORKFLOW,
  enableBenefits: process.env.NEXT_PUBLIC_MARKETING_ENABLE_BENEFITS,
  enablePersonas: process.env.NEXT_PUBLIC_MARKETING_ENABLE_PERSONAS,
  enableSecurity: process.env.NEXT_PUBLIC_MARKETING_ENABLE_SECURITY,
  enableFAQ: process.env.NEXT_PUBLIC_MARKETING_ENABLE_FAQ,
  enableFinalCTA: process.env.NEXT_PUBLIC_MARKETING_ENABLE_FINAL_CTA,
  enableMarketingSlider: process.env.NEXT_PUBLIC_MARKETING_ENABLE_SLIDER,
};

export function getMarketingFlags() {
  const overrides: Record<string, boolean | undefined> = {};
  Object.entries(marketingEnvOverrides).forEach(([key, value]) => {
    if (value === 'true') overrides[key] = true;
    else if (value === 'false') overrides[key] = false;
  });
  return {
    ...marketingFlags,
    ...overrides,
  };
}

