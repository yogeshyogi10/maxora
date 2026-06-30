import fs from 'fs';

let file = fs.readFileSync('./src/app/page.tsx', 'utf-8');

const luxuryEffectComponent = `// --- CINEMATIC LUXURY TIMELINE STEP ---
const CinematicTimelineStep = ({ step, idx, timelineProgress, totalSteps }: any) => {
  const isEven = idx % 2 === 0;
  
  const stepPeak = (idx + 0.5) / totalSteps;
  const range = 1.0 / totalSteps;
  
  // Elegant, buttery smooth opacity
  const opacity = useTransform(timelineProgress, [stepPeak - range, stepPeak, stepPeak + range], [0.2, 1, 0.2]);
  
  // Subtle luxury scaling (pushes inactive cards back)
  const scale = useTransform(timelineProgress, [stepPeak - range, stepPeak, stepPeak + range], [0.95, 1, 0.95]);
  
  // Gentle floating Y-axis movement
  const y = useTransform(timelineProgress, [stepPeak - range, stepPeak, stepPeak + range], [50, 0, -50]);

  // Spotlight effect: dims and blurs inactive cards slightly to draw focus to the center
  const blurValue = useTransform(timelineProgress, [stepPeak - range, stepPeak, stepPeak + range], [4, 0, 4]);
  const filter = useTransform(blurValue, (v) => \`blur(\${v}px) brightness(\${1 - (v/10)})\`);

  return (
    <motion.div
      style={{ opacity, scale, y, filter }}
      className={\`flex flex-col md:flex-row items-start md:items-center justify-between w-full relative \${isEven ? "md:flex-row-reverse" : ""}\`}
    >
      {/* Glowing Timeline Connector Node */}
      <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-[#050014] border border-[#B03DFF]/50 flex items-center justify-center -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(176,61,255,0.4)]">
        <motion.div
          className="w-2 h-2 rounded-full bg-white"
          whileInView={{ scale: [1, 1.5, 1] }}
          viewport={{ once: false }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </div>

      {/* Step Card */}
      <div className="w-full md:w-[45%] pl-10 md:pl-0">
        <Card3D className="p-7 md:p-10 bg-[#070312]/90 backdrop-blur-xl border border-white/5 hover:border-[#D9B3FF]/30 transition-all duration-700 shadow-2xl relative overflow-hidden group">
          {/* Subtle luxury shine overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          
          <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-[#D9B3FF]/80 mb-2 block">
            Phase 0{idx + 1}
          </span>
          <h3 className="text-white font-normal text-2xl mt-1.5 mb-4 font-display tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#D9B3FF] transition-all duration-500">
            {step.title}
          </h3>
          <p className="text-white/50 text-sm font-light leading-loose group-hover:text-white/70 transition-colors duration-500">
            {step.desc}
          </p>
        </Card3D>
      </div>
      <div className="hidden md:block w-[45%]" />
    </motion.div>
  );
};`;

// We need to replace the old dust effect code.
const dustComponentStart = file.indexOf("// --- SVG DUST FILTER");
const exportStart = file.indexOf("export default function HomePage() {");

if (dustComponentStart !== -1 && exportStart !== -1) {
    const oldStr = file.substring(dustComponentStart, exportStart);
    file = file.replace(oldStr, luxuryEffectComponent + "\n");
} else {
    const backupStart = file.indexOf("// --- CINEMATIC TIMELINE STEP");
    if (backupStart !== -1) {
        const oldStr = file.substring(backupStart, exportStart);
        file = file.replace(oldStr, luxuryEffectComponent + "\n");
    }
}

fs.writeFileSync('./src/app/page.tsx', file, 'utf-8');
console.log("Applied luxury cinematic effect successfully.");
