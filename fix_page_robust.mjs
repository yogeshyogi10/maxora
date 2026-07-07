import fs from 'fs';

let file = fs.readFileSync('./src/app/page.tsx', 'utf-8');

const correctBlock = `              <div className="p-5 rounded-2xl border border-glass bg-[#0d0724]/20">
                <h4 className="text-white font-normal text-sm uppercase tracking-wider mb-2">Our Mission</h4>
                <p className="text-white/60 text-xs font-light leading-relaxed">
                  We aim to provide end-to-end solutions — from website development to social media management and SEO — enabling our clients to build credibility, attract customers, and scale their business in the digital world.
                </p>
              </div>
              <div className="p-5 rounded-2xl border border-glass bg-[#0d0724]/20">
                <h4 className="text-white font-normal text-sm uppercase tracking-wider mb-2">Our Vision</h4>
                <p className="text-white/60 text-xs font-light leading-relaxed">
                  To empower individuals and businesses to establish a strong digital presence by making online growth simple, accessible, and impactful for everyone.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Values grid with Stagger */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              { value: "Integrity First", desc: "Transparent timelines and clear flat contracts." },
              { value: "Excellence Driven", desc: "Rigorous checks targeting perfect performance." },
              { value: "High Innovation", desc: "Deploying latest Next.js 15 & React 19 standards." },
              { value: "Client Obsessed", desc: "Dedicated support sprints and active iterations." }
            ].map((v, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 rounded-2xl border border-glass bg-white/[0.01] flex flex-col gap-2 hover:border-[#B03DFF]/20 hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-[#B03DFF]/10 flex items-center justify-center text-xs font-bold text-[#D9B3FF] border border-[#B03DFF]/20">
                  {i + 1}
                </div>
                <h4 className="text-white font-normal text-sm mt-2">{v.value}</h4>
                <p className="text-white/50 text-xs font-light leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>`;

// Split file by lines to easily replace the corrupted block
const lines = file.split('\n');
const newLines = [];

let insideBrokenBlock = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  if (line.includes('<div className="p-5 rounded-2xl border border-glass bg-[#0d0724]/20">')) {
    // This is line 421. We start replacing here.
    if (!insideBrokenBlock) {
      insideBrokenBlock = true;
      newLines.push(correctBlock);
    }
  }

  // If we reach the end of the broken block (line 432)
  if (insideBrokenBlock && line.includes('</motion.div>') && lines[i-1].includes('))}')) {
    insideBrokenBlock = false;
    continue;
  }

  if (!insideBrokenBlock) {
    newLines.push(line);
  }
}

fs.writeFileSync('./src/app/page.tsx', newLines.join('\n'), 'utf-8');
console.log("Successfully fixed page.tsx syntax errors using line arrays!");
