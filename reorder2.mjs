import fs from 'fs';

let file = fs.readFileSync('./src/app/page.tsx', 'utf-8');

// 1. Move Testimonial Section
const tStart = file.indexOf("{/* 9. TESTIMONIAL SECTION */}");
const pStart = file.indexOf("{/* 5. PROCESS SECTION");
const testimonialStr = file.substring(tStart, pStart);

// Remove testimonial from current position
file = file.replace(testimonialStr, "");

// Insert before Lead Magnet
const lStart = file.indexOf("{/* 11. LEAD MAGNET SECTION */}");
file = file.substring(0, lStart) + testimonialStr + file.substring(lStart);

// 2. Add cinematic scroll trigger to Timeline (Process) Section
// We will replace the whileInView motion.div in processSteps.map with a custom CinematicTimelineStep component

const cinematicStepComponent = `
// --- CINEMATIC TIMELINE STEP ---
const CinematicTimelineStep = ({ step, idx, timelineProgress, totalSteps }: any) => {
  const isEven = idx % 2 === 0;
  
  // Calculate specific scroll ranges for this step
  const stepStart = (idx - 0.5) / totalSteps;
  const stepPeak = idx / totalSteps;
  const stepEnd = (idx + 1.5) / totalSteps;
  
  // Cinematic fade in/out driven purely by scroll progress
  const opacity = useTransform(timelineProgress, [Math.max(0, stepStart), stepPeak, Math.min(1, stepEnd)], [0.2, 1, 0.2]);
  const scale = useTransform(timelineProgress, [Math.max(0, stepStart), stepPeak], [0.85, 1]);
  const y = useTransform(timelineProgress, [Math.max(0, stepStart), stepPeak], [50, 0]);

  return (
    <motion.div
      style={{ opacity, scale, y }}
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
};
`;

// Insert the component before export default function HomePage
file = file.replace("export default function HomePage() {", cinematicStepComponent + "\nexport default function HomePage() {");

// Replace the inner loop of the process steps mapping
const oldLoopRegex = /\{processSteps\.map\(\(step, idx\) => \{[\s\S]*?return \([\s\S]*?\}\)\}/;

const newLoop = `{processSteps.map((step, idx) => (
                <CinematicTimelineStep 
                  key={idx} 
                  step={step} 
                  idx={idx} 
                  timelineProgress={timelineProgress} 
                  totalSteps={processSteps.length} 
                />
              ))}`;

file = file.replace(oldLoopRegex, newLoop);

fs.writeFileSync('./src/app/page.tsx', file, 'utf-8');
console.log("Applied updates successfully.");
