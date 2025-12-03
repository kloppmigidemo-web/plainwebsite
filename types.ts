
export interface ColorInfo {
  name: string;
  description: string;
}

export interface ColorMix {
  equation: string[];
  colors: string[];
}

export interface ColorSystemProps {
  title: string;
  usage: string;
  colors: ColorInfo[];
  reason: string;
  mixes: ColorMix[];
  type: 'RYB' | 'RGB';
}

export interface ExperimentCardProps {
  title: string;
  description: string;
  steps: string[];
  result: string;
}
