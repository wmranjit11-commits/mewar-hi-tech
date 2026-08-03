export interface HotspotData {
  id: string;
  position: [number, number, number];
  cameraTarget: [number, number, number]; // Where the camera moves when clicked
  partName: string;
  overview: string;
  features: string[];
  image?: string;
}

export interface Product3DData {
  id: string;
  name: string;
  modelPath: string;
  showroomPosition: [number, number, number]; // [x, y, z]
  scale: number;
  yOffset: number; // To lift model above the floor
  rotation: [number, number, number];
  hotspots: HotspotData[];
}

export const PRODUCTS_3D_DATA: Product3DData[] = [
  {
    id: "track-mounted-mobile-project",
    name: "Track Mounted Mobile Crusher",
    modelPath: "/mobile_plant_3dmodel/track-mounted-mobile-project.glb",
    showroomPosition: [-30, 12, -10],
    scale: 25,
    yOffset: 12,
    rotation: [0, Math.PI / 4, 0],
    hotspots: [
      {
        id: "hotspot-1",
        position: [0, 8, 0],
        cameraTarget: [10, 15, 10],
        partName: "Auto Feeding System",
        overview: "Regulated feed with ultra-sonic sensor for optimum performance.",
        features: [
          "Regulated feed with ultra-sonic sensor.",
          "Ensures continuous choke feed.",
          "Maintains wearing uniformity."
        ]
      },
      {
        id: "hotspot-2",
        position: [4, 6, 4],
        cameraTarget: [15, 12, 15],
        partName: "Crushing Chamber",
        overview: "High-performance crushing chamber for optimal reduction ratio.",
        features: [
          "Robust steel frame.",
          "High quality manganese plates.",
          "Adjustable gap settings."
        ]
      }
    ]
  },
  {
    id: "track-mounted-mobile-projects-1",
    name: "Track Mounted Crusher Type A",
    modelPath: "/mobile_plant_3dmodel/track-mounted-mobile-projects-1.glb",
    showroomPosition: [0, 10, 5],
    scale: 25,
    yOffset: 10,
    rotation: [0, -Math.PI / 6, 0],
    hotspots: [
      {
        id: "hotspot-1",
        position: [0, 6, 2],
        cameraTarget: [10, 12, 15],
        partName: "Motorized Pulley",
        overview: "High torque motorized pulley for consistent power delivery.",
        features: [
          "Energy efficient.",
          "Low maintenance design.",
          "Variable speed control."
        ]
      },
      {
        id: "hotspot-2",
        position: [-3, 8, -2],
        cameraTarget: [-10, 15, 10],
        partName: "Conveyor Belt",
        overview: "Heavy-duty discharge conveyor with impact idlers.",
        features: [
          "High capacity throughput.",
          "Wear-resistant rubber.",
          "Adjustable height."
        ]
      }
    ]
  },
  {
    id: "track-mounted-mobile-projects-5",
    name: "Track Mounted Crusher Type B",
    modelPath: "/mobile_plant_3dmodel/track-mounted-mobile-projects-5.glb",
    showroomPosition: [30, 8, -10],
    scale: 25,
    yOffset: 8,
    rotation: [0, -Math.PI / 4, 0],
    hotspots: [
      {
        id: "hotspot-1",
        position: [2, 5, 0],
        cameraTarget: [12, 10, 10],
        partName: "Vibrating Screen",
        overview: "Multi-deck vibrating screen for precise material classification.",
        features: [
          "High screening efficiency.",
          "Adjustable amplitude.",
          "Quick screen mesh replacement."
        ]
      },
      {
        id: "hotspot-2",
        position: [-4, 7, 2],
        cameraTarget: [-15, 12, 12],
        partName: "Control Panel",
        overview: "Advanced PLC control panel with touch interface.",
        features: [
          "Real-time monitoring.",
          "Automated fault detection.",
          "Remote operation capability."
        ]
      }
    ]
  },
  {
    id: "wheel-mounted-mobile-project",
    name: "Wheel Mounted Mobile Plant",
    modelPath: "/mobile_plant_3dmodel/wheel_mounted-mobile-project.glb",
    showroomPosition: [0, 8, -40],
    scale: 25,
    yOffset: 8,
    rotation: [0, Math.PI, 0],
    hotspots: [
      {
        id: "hotspot-1",
        position: [0, 6, 4],
        cameraTarget: [10, 12, 15],
        partName: "Wheel Axle System",
        overview: "Heavy duty wheel mounted chassis for easy transportation.",
        features: [
          "High mobility between sites.",
          "Robust suspension system.",
          "Integrated braking controls."
        ]
      },
      {
        id: "hotspot-2",
        position: [3, 9, -2],
        cameraTarget: [15, 15, 10],
        partName: "Primary Crusher",
        overview: "High capacity primary jaw crusher unit.",
        features: [
          "Large feed opening.",
          "Deep crushing cavity.",
          "Hydraulic setting adjustment."
        ]
      }
    ]
  }
];
