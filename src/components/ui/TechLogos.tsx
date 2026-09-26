import React from 'react';

interface TechLogoProps {
  name: string;
  size?: number;
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, size = 36 }) => {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (normalized) {
    case 'figma':
      return (
        <svg width={size} height={size} viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
        </svg>
      );

    case 'bootstrap':
    case 'bootstrap5':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="28" fill="#7952B3" />
          <path d="M43 32H69C79 32 87 38 87 48C87 55 82 60 75 62C84 64 90 71 90 80C90 91 81 98 69 98H43V32ZM57 44V57H67C72 57 75 54 75 50C75 46 72 44 67 44H57ZM57 68V86H69C74 86 78 83 78 77C78 71 74 68 69 68H57Z" fill="#FFFFFF" />
        </svg>
      );

    case 'express':
    case 'expressjs':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <text x="18" y="82" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="64" fontWeight="300" fill="#1E293B" letterSpacing="-2px">ex</text>
        </svg>
      );

    case 'mongodb':
      return (
        <svg width={size} height={size} viewBox="0 0 64 128" fill="none">
          <path d="M32 0C32 0 12 28 12 68C12 96 28 116 32 128C36 116 52 96 52 68C52 28 32 0 32 0Z" fill="#47A248" />
          <path d="M32 0V128C36 116 52 96 52 68C52 28 32 0 32 0Z" fill="#439544" />
          <path d="M32 124V64C32 64 30.5 61 28 58C26 56 26 50 32 44V124Z" fill="#FFFFFF" opacity="0.35" />
        </svg>
      );

    case 'mysql':
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
          {/* Sakila jumping dolphin */}
          <path d="M85 30C75 22 60 22 48 26C35 30 26 40 22 52C20 58 20 65 24 70C28 75 35 77 42 75C36 78 30 84 30 92C30 98 34 102 40 102C45 102 52 96 56 90C62 82 66 74 72 65C78 56 86 48 94 42C98 39 104 36 102 32C100 28 92 28 85 30Z" fill="#00758F" />
          <path d="M44 42C48 38 55 36 62 36C56 40 52 46 50 54C48 60 50 66 54 70C48 68 44 64 42 58C40 52 41 46 44 42Z" fill="#F29111" />
          <circle cx="32" cy="46" r="2" fill="#FFFFFF" />
        </svg>
      );

    case 'firebase':
    case 'googlefirebase':
    case 'googlefirebasesuite':
    case 'cloudfirestore':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <path d="M24 94L4 46C3 43 7 41 9 44L36 72L24 94Z" fill="#FFC400" />
          <path d="M58 14C56 10 50 11 49 15L36 72L58 14Z" fill="#FFA000" />
          <path d="M104 94L124 46C125 43 121 41 119 44L92 72L104 94Z" fill="#FFC400" />
          <path d="M64 4L12 110C10 114 14 118 18 116L64 90L110 116C114 118 118 114 116 110L64 4Z" fill="#FF8F00" />
          <path d="M64 90L18 116C14 118 10 114 12 110L36 72L64 90Z" fill="#F57C00" />
        </svg>
      );

    case 'wordpress':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="54" fill="none" stroke="#21759B" strokeWidth="8" />
          <path d="M22 64C22 84 36 101 55 106L30 38C25 45 22 54 22 64ZM93 61C93 53 90 47 84 47C78 47 73 52 73 58C73 64 77 70 80 77L66 118C82 113 93 99 93 81V61ZM42 34C48 29 55 26 64 26C70 26 76 28 81 31L64 80L42 34ZM69 118L84 76C87 84 89 91 89 96C89 103 86 111 80 115L69 118Z" fill="#21759B" />
        </svg>
      );

    case 'flutter':
      return (
        <svg width={size} height={size} viewBox="0 0 100 120" fill="none">
          <path d="M59.3 0L0 59.3L18.3 77.6L95.9 0H59.3Z" fill="#47C5FB" />
          <path d="M58.7 59.9L24.9 93.7L43.2 112L61.5 93.7L95.3 59.9H58.7Z" fill="#47C5FB" />
          <path d="M43.2 112L61.5 130.3H98.1L61.5 93.7L43.2 112Z" fill="#00569E" />
          <path d="M61.5 93.7L76.5 78.7L95.3 59.9L61.5 93.7Z" fill="#0175C2" />
          <path d="M61.5 93.7L77.6 109.8L61.5 130.3L43.2 112L61.5 93.7Z" fill="#02569B" />
        </svg>
      );

    case 'dart':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <path d="M28.4 12.8L12.8 54L71 112.2L112.2 112.2L112.2 71L54 12.8L28.4 12.8Z" fill="#00B4AB" />
          <path d="M54 12.8L12.8 54L71 112.2L85 98.2L35 48.2L54 12.8Z" fill="#0075C9" />
          <path d="M71 112.2L112.2 112.2L112.2 71L98.2 85L48.2 35L12.8 54L71 112.2Z" fill="#0081C6" />
        </svg>
      );

    case 'kotlin':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <path d="M128 0H0V128H128L64 64L128 0Z" fill="url(#kotlin-grad)" />
          <defs>
            <linearGradient id="kotlin-grad" x1="128" y1="0" x2="0" y2="128" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E4485D" />
              <stop offset="0.465" stopColor="#C711E1" />
              <stop offset="1" stopColor="#7F52FF" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'android':
    case 'androidsdk':
    case 'androidsdkndk':
      return (
        <svg width={size} height={size} viewBox="0 0 96 112" fill="none">
          <path d="M22.5 40.5H73.5C73.5 26.4 62.1 15 48 15C33.9 15 22.5 26.4 22.5 40.5ZM35.3 26.6C37.2 26.6 38.7 28.1 38.7 30C38.7 31.9 37.2 33.4 35.3 33.4C33.4 33.4 31.9 31.9 31.9 30C31.9 28.1 33.4 26.6 35.3 26.6ZM60.7 26.6C62.6 26.6 64.1 28.1 64.1 30C64.1 31.9 62.6 33.4 60.7 33.4C58.8 33.4 57.3 31.9 57.3 30C57.3 28.1 58.8 26.6 60.7 26.6Z" fill="#3DDC84" />
          <path d="M22.5 45V87H33V106.5C33 109.5 35.5 112 38.5 112C41.5 112 44 109.5 44 106.5V87H52V106.5C52 109.5 54.5 112 57.5 112C60.5 112 63 109.5 63 106.5V87H73.5V45H22.5Z" fill="#3DDC84" />
          <path d="M10.5 45C7.5 45 5 47.5 5 50.5V76.5C5 79.5 7.5 82 10.5 82C13.5 82 16 79.5 16 76.5V50.5C16 47.5 13.5 45 10.5 45Z" fill="#3DDC84" />
          <path d="M85.5 45C82.5 45 80 47.5 80 50.5V76.5C80 79.5 82.5 82 85.5 82C88.5 82 91 79.5 91 76.5V50.5C91 47.5 88.5 45 85.5 45Z" fill="#3DDC84" />
          <path d="M30 6L23 0L19 4L26 10L30 6Z" fill="#3DDC84" />
          <path d="M66 6L73 0L77 4L70 10L66 6Z" fill="#3DDC84" />
        </svg>
      );

    case 'react':
    case 'react1819':
      return (
        <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case 'typescript':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="16" fill="#3178C6" />
          <path d="M43.6 57.6H20.4V48.4H74.3V57.6H51.1V109.6H43.6V57.6Z" fill="#FFFFFF" />
          <path d="M68.5 98.8C71.5 100.5 76 101.8 80.8 101.8C89.2 101.8 93.5 97.8 93.5 91.8C93.5 86.8 90.5 83.8 83.2 80.5C74.2 76.5 69.2 72 69.2 64.2C69.2 54.8 77.2 48.2 88.2 48.2C93.5 48.2 97.8 49.5 100.8 51.2L98 58.2C95.5 56.8 92 55.8 88 55.8C80.8 55.8 77.2 59.5 77.2 64.5C77.2 69.2 80.2 71.8 88 75.2C97.5 79.5 102.2 84 102.2 92C102.2 102.8 93.5 109.5 81.5 109.5C75 109.5 69.5 107.8 65.5 105.5L68.5 98.8Z" fill="#FFFFFF" />
        </svg>
      );

    case 'nodejs':
    case 'nodejsexpress':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <path d="M64 5.8L114.4 34.9V93.1L64 122.2L13.6 93.1V34.9L64 5.8Z" fill="#339933" />
          <path d="M64 18L103.8 41V87L64 110L24.2 87V41L64 18Z" fill="#5FA04E" />
          <path d="M64 35C48 35 44 45 44 55C44 67 53 71 63 74C72 77 75 80 75 85C75 92 68 95 62 95C53 95 48 90 46 82L37 86C40 98 49 104 62 104C74 104 84 98 84 86C84 75 76 70 65 67C56 64 53 61 53 56C53 50 58 44 65 44C72 44 77 48 79 54L87 50C85 41 77 35 64 35Z" fill="#FFFFFF" />
        </svg>
      );

    case 'sqlite':
    case 'sqlitedrift':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#003B57" />
          <path d="M30 45C30 35 45 28 64 28C83 28 98 35 98 45V85C98 95 83 102 64 102C45 102 30 95 30 85V45Z" fill="none" stroke="#00A3E0" strokeWidth="6" />
          <path d="M30 45C30 55 45 62 64 62C83 62 98 55 98 45" stroke="#00A3E0" strokeWidth="6" />
          <path d="M30 65C30 75 45 82 64 82C83 82 98 75 98 65" stroke="#00A3E0" strokeWidth="6" />
        </svg>
      );

    case 'blender':
    case 'blender3d':
    case 'blender3dsuite':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="74" r="30" fill="#EA7600" />
          <circle cx="64" cy="74" r="16" fill="#265787" />
          <path d="M64 44L104 20L84 56L64 44Z" fill="#EA7600" />
          <path d="M64 44L24 20L44 56L64 44Z" fill="#EA7600" />
          <path d="M64 44V10L74 36L64 44Z" fill="#EA7600" />
          <circle cx="64" cy="74" r="8" fill="#FFFFFF" />
        </svg>
      );

    case 'aftereffects':
    case 'adobeaftereffects':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#00005B" />
          <rect x="4" y="4" width="120" height="120" rx="16" fill="#1E004B" />
          <text x="20" y="86" fontFamily="sans-serif" fontSize="62" fontWeight="bold" fill="#9999FF">Ae</text>
        </svg>
      );

    case 'premierepro':
    case 'adobepremierepro':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#00005B" />
          <rect x="4" y="4" width="120" height="120" rx="16" fill="#2E004A" />
          <text x="24" y="86" fontFamily="sans-serif" fontSize="62" fontWeight="bold" fill="#EA77FF">Pr</text>
        </svg>
      );

    case 'photoshop':
    case 'photoshopfigma':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#001E36" />
          <rect x="4" y="4" width="120" height="120" rx="16" fill="#002447" />
          <text x="24" y="86" fontFamily="sans-serif" fontSize="62" fontWeight="bold" fill="#31A8FF">Ps</text>
        </svg>
      );

    case 'git':
    case 'gitgithub':
    case 'gitgithubactions':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <path d="M125.2 57.5L70.5 2.8C66.8-0.9 60.7-0.9 57 2.8L43.8 16L60.5 32.7C64.6 31.4 69.3 32.3 72.6 35.6C75.9 38.9 76.8 43.6 75.5 47.7L91.6 63.8C95.7 62.5 100.4 63.4 103.7 66.7C108.6 71.6 108.6 79.5 103.7 84.4C98.8 89.3 90.9 89.3 86 84.4C82.7 81.1 81.8 76.4 83.1 72.3L68 57.2V87.6C69.6 88.6 71 90.1 72 91.8C75.2 97.4 73.3 104.5 67.7 107.7C62.1 110.9 55 109 51.8 103.4C48.6 97.8 50.5 90.7 56.1 87.5V56.2C54.8 55.4 53.7 54.3 52.8 53L36.7 69.1C38 73.2 37.1 77.9 33.8 81.2C28.9 86.1 21 86.1 16.1 81.2C11.2 76.3 11.2 68.4 16.1 63.5C19.4 60.2 24.1 59.3 28.2 60.6L44.3 44.5C43 40.4 43.9 35.7 47.2 32.4C50.5 29.1 55.2 28.2 59.3 29.5L42.6 12.8L2.8 52.6C-0.9 56.3-0.9 62.4 2.8 66.1L57.5 120.8C61.2 124.5 67.3 124.5 71 120.8L125.2 66.6C128.9 62.9 128.9 56.8 125.2 57.5Z" fill="#F05032" />
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
  }
};
