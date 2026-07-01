import fs from 'fs';

let file = fs.readFileSync('./src/app/page.tsx', 'utf-8');

// 1. Add import (check if it exists first to avoid duplicates)
if (!file.includes('IndustriesSection')) {
  const importStatement = 'const IndustriesSection = dynamic(() => import("@/components/IndustriesSection"), { ssr: true });\n';
  file = file.replace(
    'const WhyChooseSection = dynamic(() => import("@/components/WhyChooseSection"), { ssr: true });',
    'const WhyChooseSection = dynamic(() => import("@/components/WhyChooseSection"), { ssr: true });\n' + importStatement
  );
}

// 2. Replace section
const startMarker = "{/* 2. TRUSTED INDUSTRIES SECTION (Stagger Reveal) */}";
const endMarker = "{/* 9. TESTIMONIAL SECTION */}";

const startIdx = file.indexOf(startMarker);
const endIdx = file.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  const oldSection = file.substring(startIdx, endIdx);
  const newSection = `      {/* 2. TRUSTED INDUSTRIES SECTION (Cinematic) */}\n      <IndustriesSection industryIcons={industryIcons} />\n\n      `;
  file = file.replace(oldSection, newSection);
  fs.writeFileSync('./src/app/page.tsx', file, 'utf-8');
  console.log("Updated page.tsx successfully.");
} else {
  console.log("Could not find section markers. startIdx:", startIdx, "endIdx:", endIdx);
}
