const fs = require('fs');
let text = fs.readFileSync('src/routes/policy.tsx', 'utf8');

// Global replacement map
const replacements = {
  // General layout
  'bg-gradient-to-br from-gray-50 via-white to-gray-100': 'bg-dark text-white/80',
  'bg-gradient-to-r from-\\[#ddfc12\\] via-\\[#e8ff3a\\] to-\\[#ddfc12\\] shadow-lg': 'bg-[#131313] border-b border-primary/20 shadow-[0_0_30px_rgba(221,252,18,0.05)]',
  'bg-white p-4 rounded-2xl shadow-xl mb-6 ring-4 ring-white/50': 'bg-[#1a1a1a] p-4 rounded-2xl shadow-[0_0_15px_rgba(221,252,18,0.3)] mb-6 ring-2 ring-primary/20',

  // Cards & Modals
  '<Card className="shadow-xl border-0 overflow-hidden">': '<Card className="shadow-2xl border border-white/10 bg-[#131313] overflow-hidden">',
  'divide-gray-200': 'divide-white/10',
  'hover:bg-gray-50/50': 'hover:bg-white/[0.02]',
  'bg-white border-2 border-\\[#ddfc12\\]': 'bg-white/5 border-2 border-primary',
  'bg-white border border-gray-200': 'bg-[#1a1a1a] border border-white/10',
  'bg-gray-50': 'bg-[#1a1a1a]',
  'border-gray-200': 'border-white/10',
  'shadow-sm': 'shadow-md',

  // Highlight Box Backgrounds
  'bg-\\[#ddfc12\\]/10': 'bg-primary/10',
  'border-l-4 border-\\[#ddfc12\\]': 'border-l-4 border-primary',
  'bg-orange-50': 'bg-orange-900/20',
  'border-orange-400': 'border-orange-500/30',
  'bg-blue-50': 'bg-blue-900/20',
  'border-blue-200': 'border-blue-500/30',
  'border-blue-400': 'border-blue-500/30',
  'bg-green-100': 'bg-green-900/30',
  'bg-blue-100': 'bg-blue-900/30',
  'bg-green-50': 'bg-green-900/20',
  'border-green-200': 'border-green-500/30',
  'bg-purple-50': 'bg-purple-900/20',
  'border-purple-200': 'border-purple-500/30',
  'bg-gradient-to-r from-\\[#ddfc12\\]/20 to-\\[#ddfc12\\]/5': 'bg-gradient-to-r from-primary/20 to-primary/5',
  'bg-gradient-to-br from-\\[#ddfc12\\]/20 to-\\[#ddfc12\\]/5': 'bg-gradient-to-br from-primary/20 to-primary/5',
  'border-\\[#ddfc12\\]': 'border-primary',
  'bg-gradient-to-br from-\\[#ddfc12\\] to-\\[#c5e010\\]': 'bg-primary/20 border border-primary/30',

  // Icon Backgrounds
  'bg-\\[#ddfc12\\]': 'bg-primary',

  // Text Colors
  'text-gray-900': 'text-white',
  'text-gray-800': 'text-white/90',
  'text-gray-700': 'text-white/70',
  'text-gray-600': 'text-white/60',
  'text-blue-700': 'text-blue-400',
  'text-green-700': 'text-green-400',
  'text-green-600': 'text-green-400',
  'text-purple-600': 'text-purple-400',
  'text-\\[#ddfc12\\]': 'text-primary'
};

for (const [key, value] of Object.entries(replacements)) {
  const regex = new RegExp(key, 'g');
  text = text.replace(regex, value);
}

fs.writeFileSync('src/routes/policy.tsx', text);
