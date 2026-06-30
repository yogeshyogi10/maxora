import fs from 'fs';

const file = fs.readFileSync('./src/app/page.tsx', 'utf-8');

// Define section split markers (using the exact comments)
const markers = [
  "{/* 1. HERO SECTION",
  "{/* 2. TRUSTED INDUSTRIES",
  "{/* 3. ABOUT SECTION",
  "{/* 4. SERVICES SECTION",
  "{/* 5. PROCESS SECTION",
  "{/* 6. FEATURED PROJECTS",
  "{/* 7. WHY CHOOSE MAXORA",
  "{/* 8. PRICE QUOTE SECTION",
  "{/* 9. TESTIMONIAL SECTION",
  "{/* 10. FAQ SECTION",
  "{/* 11. LEAD MAGNET SECTION",
  "{/* 12. CONTACT SECTION",
  "    </div>\r\n  );\r\n}"
];

// Extract sections by splitting at each marker and keeping track of the chunks
let remainingFile = file;
let preamble = remainingFile.substring(0, remainingFile.indexOf(markers[0]));

const sections = {};
for (let i = 0; i < markers.length - 1; i++) {
  const currentMarker = markers[i];
  const nextMarker = markers[i + 1];
  
  const startIdx = file.indexOf(currentMarker);
  let endIdx = file.indexOf(nextMarker);
  
  if (endIdx === -1) {
    // try to find the end of the return statement div if next marker not found
    endIdx = file.lastIndexOf("    </div>");
  }
  
  sections[i + 1] = file.substring(startIdx, endIdx);
}

const postamble = file.substring(file.indexOf("    </div>\r\n  );\r\n}"));

// Add StorytellingProblem import
preamble = preamble.replace(
  'const StackedServices = dynamic(() => import("@/components/StackedServices"), { ssr: true });',
  'const StackedServices = dynamic(() => import("@/components/StackedServices"), { ssr: true });\nconst StorytellingProblem = dynamic(() => import("@/components/StorytellingProblem"), { ssr: true });'
);

// Desired order: 
// 1. HERO (1)
// NEW: StorytellingProblem
// 3. ABOUT (3)
// 4. SERVICES (4)
// 5. FEATURED PROJECTS (6)
// 6. TESTIMONIAL (9)
// 7. PROCESS (5)
// 8. WHY CHOOSE (7)
// 9. TRUSTED INDUSTRIES (2)
// 10. LEAD MAGNET (11)
// 11. PRICE QUOTE (8)
// 12. FAQ (10)
// 13. CONTACT (12)

const newOrder = [
  sections[1],
  '      {/* 1.5 STORYTELLING PROBLEM */}\n      <StorytellingProblem />\n\n',
  sections[3],
  sections[4],
  sections[6],
  sections[9],
  sections[5],
  sections[7],
  sections[2],
  sections[11],
  sections[8],
  sections[10],
  sections[12]
];

const newFileContent = preamble + newOrder.join('') + postamble;

fs.writeFileSync('./src/app/page.tsx', newFileContent, 'utf-8');
console.log("Successfully reordered page.tsx!");
