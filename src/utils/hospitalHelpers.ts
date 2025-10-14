/**
 * Hospital utility functions
 */

/**
 * Map of hospital titles to their corresponding color codes
 */
const HOSPITAL_COLORS: Record<string, string> = {
  "اقدسیه": "#F8E6EF",
  "سپید": "#F4DE63",
  "مرکز جراحی محدود نیکان": "#C3F5EB",
  "غرب": "#D2F3F8",
} as const;

/**
 * Get the background color for a hospital based on its title
 * @param hospitalTitle - The title of the hospital
 * @param defaultColor - Optional default color to return if hospital not found (default: empty string)
 * @returns The color code or default color
 */
export const getHospitalColor = (
  hospitalTitle?: string | null,
  defaultColor: string = ""
): string => {
  if (!hospitalTitle) return defaultColor;
  // Try exact match first
  if (HOSPITAL_COLORS[hospitalTitle]) {
    return HOSPITAL_COLORS[hospitalTitle];
  }

  // Try partial match (contains keyword)
  for (const [key, color] of Object.entries(HOSPITAL_COLORS)) {
    if (hospitalTitle.includes(key)) {
      return color;
    }
  }

  return defaultColor;
  
};

/**
 * Get the background color class for a hospital (Tailwind CSS format)
 * @param hospitalTitle - The title of the hospital
 * @param defaultClass - Optional default class to return if hospital not found (default: empty string)
 * @returns The Tailwind CSS background class
 */
export const getHospitalBgClass = (
  hospitalTitle?: string | null,
  defaultClass: string = ""
): string => {
  const color = getHospitalColor(hospitalTitle);
  return color ? `bg-[${color}]` : defaultClass;
};

/**
 * Get all hospital color mappings
 * @returns Object containing all hospital title to color mappings
 */
export const getHospitalColorMap = (): Record<string, string> => {
  return { ...HOSPITAL_COLORS };
};
