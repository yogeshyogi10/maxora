import fs from 'fs';

let file = fs.readFileSync('./src/app/page.tsx', 'utf-8');

const newCinematicStepComponent = `// --- CINEMATIC TIMELINE STEP ---
const CinematicTimelineStep = ({ step, idx, timelineProgress, totalSteps }: any) => {
  const isEven = idx % 2 === 0;
  
  const stepPeak = (idx + 0.5) / totalSteps;
  const range = 1.0 / totalSteps;
  
  // Cinematic fade in/out
  const opacity = useTransform(timelineProgress, [stepPeak - range, stepPeak, stepPeak + range], [0, 1, 0.3]);
  
  // 3D Hinge Fold & Slide
  const rotateX = useTransform(timelineProgress, [stepPeak - range, stepPeak], [75, 0]);
  const xOffset = isEven ? 80 : -80;
  const x = useTransform(timelineProgress, [stepPeak - range, stepPeak], [xOffset, 0]);
  const y = useTransform(timelineProgress, [stepPeak - range, stepPeak, stepPeak + range], [100, 0, -50]);

  return (
    <motion.div
      style={{ 
        opacity, 
        rotateX, 
        x, 
        y, 
        transformPerspective: 1200, 
        transformOrigin: "top center" 
      }}
      className={\`flex flex-col md:flex-row items-start md:items-center justify-between w-full relative \${isEven ? "md:flex-row-reverse" : ""}\`}
    >
      {/* Glowing Timeline Connector Node */}
      <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-[#050014] border border-[#B03DFF] flex items-center justify-center -translate-x-1/2 z-20">
        <motion.div
          className="w-2.5 h-2.5 rounded-full bg-[#D9B3FF]"
          whileInView={{ scale: [1, 1.35, 1] }}
          viewport={{ once: false }}
          transition={{ repeat: Infinity, duration: 2.2 }}
        />
      </div>

      {/* Step Card */}
      <div className="w-full md:w-[45%] pl-10 md:pl-0">
        <Card3D className="p-6 md:p-8 bg-glass-card border border-glass hover:border-[#B03DFF]/30 transition-all duration-300">
          <span className="text-[10px] tracking-widest uppercase font-bold text-[#D9B3FF]">
            Phase 0{idx + 1}
          </span>
          <h3 className="text-white font-normal text-xl mt-1.5 mb-3 font-display">
            {step.title}
          </h3>
          <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed">
            {step.desc}
          </p>
        </Card3D>
      </div>
      <div className="hidden md:block w-[45%]" />
    </motion.div>
  );
};`;

const oldComponentStart = file.indexOf("// --- CINEMATIC TIMELINE STEP ---");
const exportStart = file.indexOf("export default function HomePage() {");

if (oldComponentStart !== -1 && exportStart !== -1) {
    const oldStr = file.substring(oldComponentStart, exportStart);
    file = file.replace(oldStr, newCinematicStepComponent + "\n");
}

fs.writeFileSync('./src/app/page.tsx', file, 'utf-8');
console.log("Applied 3D hinge updates successfully.");
