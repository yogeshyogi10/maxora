import fs from 'fs';

let file = fs.readFileSync('./src/app/page.tsx', 'utf-8');

// 1. Add imports
const whyChooseImport = 'const WhyChooseSection = dynamic(() => import("@/components/WhyChooseSection"), { ssr: true });\n';
const industriesImport = 'const IndustriesSection = dynamic(() => import("@/components/IndustriesSection"), { ssr: true });\n';

if (!file.includes('WhyChooseSection')) {
  file = file.replace(
    'const StorytellingProblem = dynamic(() => import("@/components/StorytellingProblem"), { ssr: true });',
    'const StorytellingProblem = dynamic(() => import("@/components/StorytellingProblem"), { ssr: true });\n' + whyChooseImport + industriesImport
  );
}

// 2. Replace Why Choose Section
const whyStart = "{/* 7. WHY CHOOSE MAXORA (Grid Layout) */}";
const whyEnd = "{/* 2. TRUSTED INDUSTRIES SECTION (Stagger Reveal) */}";
const wStartIdx = file.indexOf(whyStart);
const wEndIdx = file.indexOf(whyEnd);

if (wStartIdx !== -1 && wEndIdx !== -1) {
  const oldWhy = file.substring(wStartIdx, wEndIdx);
  file = file.replace(oldWhy, "      {/* 7. WHY CHOOSE MAXORA (Cinematic Reveal) */}\n      <WhyChooseSection />\n\n      ");
}

// 3. Replace Industries Section
const indStart = "{/* 2. TRUSTED INDUSTRIES SECTION (Stagger Reveal) */}";
const indEnd = "{/* 9. TESTIMONIAL SECTION */}";
const iStartIdx = file.indexOf(indStart);
const iEndIdx = file.indexOf(indEnd);

if (iStartIdx !== -1 && iEndIdx !== -1) {
  const oldInd = file.substring(iStartIdx, iEndIdx);
  file = file.replace(oldInd, "      {/* 2. TRUSTED INDUSTRIES SECTION (Cinematic) */}\n      <IndustriesSection industryIcons={industryIcons} />\n\n      ");
}

// 4. Also fix the About section grid-cols-2 issue
file = file.replace(
  'className="lg:col-span-6 grid grid-cols-2 gap-4"',
  'className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"'
);

fs.writeFileSync('./src/app/page.tsx', file, 'utf-8');
console.log("Sections successfully reapplied!");
