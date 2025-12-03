
import { ColorSystemProps, ExperimentCardProps } from './types';

export const rybData: ColorSystemProps = {
  title: '1. Traditional/Artistic Primary Colors (RYB)',
  usage: 'Used in painting, drawing, and traditional art.',
  colors: [
    { name: 'Red', description: 'The color of fire, passion, and energy' },
    { name: 'Yellow', description: 'The color of sunshine, happiness, and warmth' },
    { name: 'Blue', description: 'The color of sky, water, and calm' },
  ],
  reason: 'Artists discovered that by mixing red, yellow, and blue pigments (paints), they could create almost any other color needed for their artwork.',
  mixes: [
    { equation: ['Red', '+', 'Yellow', '=', 'Orange'], colors: ['#EF4444', '', '#FBBF24', '', '#F97316'] },
    { equation: ['Yellow', '+', 'Blue', '=', 'Green'], colors: ['#FBBF24', '', '#3B82F6', '', '#22C55E'] },
    { equation: ['Blue', '+', 'Red', '=', 'Purple'], colors: ['#3B82F6', '', '#EF4444', '', '#8B5CF6'] },
  ],
  type: 'RYB'
};

export const rgbData: ColorSystemProps = {
  title: '2. Light Primary Colors (RGB)',
  usage: 'Used in screens, TVs, computers, and digital displays.',
  colors: [
    { name: 'Red', description: 'Warm, stimulating light' },
    { name: 'Green', description: 'Natural, balanced light' },
    { name: 'Blue', description: 'Cool, calming light' },
  ],
  reason: 'When you mix colored light (not paint), red, green, and blue can create all other colors including white. Your phone, TV, and computer screen use millions of tiny red, green, and blue lights to show you every color you see.',
  mixes: [
    { equation: ['Red', '+', 'Green', '=', 'Yellow light'], colors: ['#EF4444', '', '#22C55E', '', '#FBBF24'] },
    { equation: ['Green', '+', 'Blue', '=', 'Cyan light'], colors: ['#22C55E', '', '#3B82F6', '', '#06B6D4'] },
    { equation: ['Blue', '+', 'Red', '=', 'Magenta light'], colors: ['#3B82F6', '', '#EF4444', '', '#D946EF'] },
    { equation: ['Red', '+', 'Green', '+', 'Blue', '=', 'White light'], colors: ['#EF4444', '', '#22C55E', '', '#3B82F6', '', '#FFFFFF'] },
  ],
  type: 'RGB'
};

export const whyItMatters = [
  { title: 'Art and Design', description: 'Understanding primary colors helps artists mix any color they need from just three tubes of paint.' },
  { title: 'Technology', description: 'Every pixel on your screen uses RGB to create millions of colors.' },
  { title: 'Color Theory', description: 'Primary colors are the foundation for understanding color relationships, complementary colors, and color harmony.' },
  { title: 'Printing', description: 'Printers use a related system called CMYK (Cyan, Magenta, Yellow, Black) which is based on primary color principles.' },
];

export const funFacts: string[] = [
  'Your eyes have three types of color receptors (cones) that detect red, green, and blue light.',
  'The color wheel, a fundamental tool for artists, is built from the three primary colors.',
  'Some animals see different primary colors than humans - birds can see ultraviolet light!',
  "There's no \"best\" primary color system - it depends on whether you're working with paint or light.",
];

export const experiments = {
  paint: {
    title: 'Paint Mixing',
    description: "Get red, yellow, and blue paint. Try mixing:",
    steps: [
      "Equal parts red and yellow",
      "Equal parts yellow and blue",
      "Equal parts blue and red",
    ],
    result: "You'll create orange, green, and purple - the secondary colors!"
  } as ExperimentCardProps,
  light: {
    title: 'Light Mixing',
    description: "In a dark room, shine a red flashlight and a green flashlight at the same spot on a white wall.",
    steps: [],
    result: "You'll see yellow light where they overlap!"
  } as ExperimentCardProps,
};
