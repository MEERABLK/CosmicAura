// src/data/datasets.ts
import earthSample from "@/assets/earth-sample.jpg";
import cycloneImage from "@/assets/tropical-cyclone-02a.png";
import preCycloneImage from "@/assets/pre-cyclone-02a-arabian-sea-2024.jpg";
import stage1Image from "@/assets/cyclone-02a-stage1.jpg";
import stage2Image from "@/assets/cyclone-02a-stage2.jpg";
import stage3Image from "@/assets/cyclone-02a-stage3.jpg";

export const cycloneImages = {
  preCycloneImage,
  stage1Image,
  stage2Image,
  stage3Image,
  cycloneImage,
};
export const aiInsights: Record<string, { pattern: string; confidence: number }[]> = {
  "cyclone-02a-stage1": [{ pattern: "Cyclone formation zone", confidence: 92 }],
  "cyclone-02a-stage2": [{ pattern: "Tropical storm eye emerging", confidence: 88 }],
  "tropical-cyclone-02a": [{ pattern: "Landfall region", confidence: 95 }],
};


export interface DatasetMetadata {
  id: string;
  name: string;
  planet: string;
  coordinates?: { lat: number; lon: number };
  timestamp: string;
  instrument: string;
  windSpeed?: string;
  description: string;
  source: string;
  resolution: string;
  wavelength: string;
  image: string;
  thumbnail: string;
}

export const datasets: Record<string, DatasetMetadata[]> = {
  Earth: [
    {
      id: "pre-cyclone-02a",
      name: "Pre-Cyclone 02A – Arabian Sea",
      planet: "Earth",
      coordinates: { lat: 15.0, lon: 62.0 },
      timestamp: "2024-11-18",
      instrument: "MODIS/VIIRS True Color",
      windSpeed: "10 kts",
      description:
        "Satellite view before Cyclone 02A formed, showing early disturbances in the North Arabian Sea.",
      source: "NASA MODIS/VIIRS",
      resolution: "2.1 GP",
      wavelength: "True Color Composite",
      image: preCycloneImage,
      thumbnail: preCycloneImage,
    },
    {
      id: "cyclone-02a-stage1",
      name: "Cyclone 02A – Early Development",
      planet: "Earth",
      timestamp: "2025-02-26",
      instrument: "MODIS/VIIRS True Color",
      windSpeed: "25 kts",
      description:
        "Formation of a tropical depression — visible spiral structure starting to form.",
      source: "NASA MODIS/VIIRS",
      resolution: "2.1 GP",
      wavelength: "True Color Composite",
      image: stage1Image,
      thumbnail: stage1Image,
    },
    {
      id: "cyclone-02a-stage2",
      name: "Cyclone 02A – Strengthening",
      planet: "Earth",
      timestamp: "2025-06-06",
      instrument: "MODIS/VIIRS True Color",
      windSpeed: "45 kts",
      description:
        "Mid-strength tropical storm with increasing convection and a better-defined eye.",
      source: "NASA MODIS/VIIRS",
      resolution: "2.1 GP",
      wavelength: "True Color Composite",
      image: stage2Image,
      thumbnail: stage2Image,
    },
    {
      id: "cyclone-02a-stage3",
      name: "Cyclone 02A – Intensifying",
      planet: "Earth",
      timestamp: "2025-09-14",
      instrument: "MODIS/VIIRS True Color",
      windSpeed: "55 kts",
      description:
        "Rapid intensification — organized eyewall and strong cloud bands visible.",
      source: "NASA MODIS/VIIRS",
      resolution: "2.1 GP",
      wavelength: "True Color Composite",
      image: stage3Image,
      thumbnail: stage3Image,
    },
    {
      id: "tropical-cyclone-02a",
      name: "Tropical Cyclone 02A – Landfall",
      planet: "Earth",
      timestamp: "2025-10-03",
      instrument: "MODIS/VIIRS True Color",
      windSpeed: "65 kts",
      description:
        "Final stage — Tropical Cyclone 02A making landfall near the Pakistan coastline.",
      source: "NASA MODIS/VIIRS",
      resolution: "2.1 GP",
      wavelength: "True Color Composite",
      image: cycloneImage,
      thumbnail: cycloneImage,
    },
  ],
};
