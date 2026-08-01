import type { ProcessStep } from '../types';

export const processData: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation & Visioning",
    subtitle: "Understanding Lifestyle & Architectural Ambition",
    description: "In-depth discovery session assessing site topography, spatial requirements, lifestyle preferences, acoustic needs, and budget parameters.",
    deliverables: ["Project Brief Document", "Site Feasibility Study", "Initial Concept Moodboard"],
  },
  {
    number: "02",
    title: "Master Planning & Layout",
    subtitle: "Modulating Volumetric Flow & Light",
    description: "Developing 2D layout options and structural flow diagrams focusing on ergonomics, natural light harvesting, and micro-climate orientation.",
    deliverables: ["Architectural CAD Floor Plans", "Spatial Circulation Mapping", "Solar & Lighting Analysis"],
  },
  {
    number: "03",
    title: "3D Concept Design & VR",
    subtitle: "Photorealistic Visuals & Tactile Material Curation",
    description: "Transforming 2D blueprints into high-resolution 3D renders, physical material palette boards, and immersive VR spatial walk-throughs.",
    deliverables: ["4K Photorealistic Renders", "Material & Finish Samples", "Interactive 3D Virtual Tour"],
  },
  {
    number: "04",
    title: "Execution & Site Oversight",
    subtitle: "Precision Engineering & Millimeter Tolerance",
    description: "Deploying our specialized execution team, supervising sub-trades, managing HVAC HEPA cleanroom setups, and auditing custom millwork.",
    deliverables: ["Weekly Site Audit Reports", "Trade Coordination Schedules", "Millwork Quality Sign-offs"],
  },
  {
    number: "05",
    title: "Quality Audit & Handover",
    subtitle: "Flawless Snagging & White-Glove Onboarding",
    description: "Final comprehensive snagging inspection, automated lighting system calibration, deep white-glove cleaning, and structural warranty handover.",
    deliverables: ["As-Built Drawings", "Automated Systems Manual", "5-Year Structural Warranty Card"],
  },
];
