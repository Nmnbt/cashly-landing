const fs = require('fs');
let content = fs.readFileSync('src/routes/policy.tsx', 'utf8');

// Container & Header
content = content.replace('bg-gradient-to-br from-gray-50 via-white to-gray-100', 'bg-dark text-white/80');
content = content.replace('bg-gradient-to-r from-[#ddfc12] via-[#e8ff3a] to-[#ddfc12] shadow-lg', 'bg-[#131313] border-b border-primary/20 shadow-[0_0_30px_rgba(221,252,18,0.05)]');
content = content.replace('bg-white p-4 rounded-2xl shadow-xl mb-6 ring-4 ring-white/50', 'bg-[#1a1a1a] p-4 rounded-2xl shadow-[0_0_15px_rgba(221,252,18,0.3)] mb-6 border border-primary/20');

// Card
content = content.replace('<Card className="shadow-xl border-0 overflow-hidden">', '<Card className="shadow-2xl border border-white/10 bg-[#131313] overflow-hidden">');
content = content.replace('divide-y divide-gray-200', 'divide-y divide-white/10');
content = content.replace('hover:bg-gray-50/50', 'hover:bg-white/[0.02]');

// General Text
content = content.replace(/text-gray-900/g, 'text-white');
content = content.replace(/text-gray-800/g, 'text-white/90');
content = content.replace(/text-gray-700/g, 'text-white/70');
content = content.replace(/text-gray-600/g, 'text-white/60');

// Icons
content = content.replace(/bg-gradient-to-br from-\[#ddfc12\] to-\[#c5e010\]/g, 'bg-primary/20 border border-primary/30');
content = content.replace(/className="w-5 h-5 md:w-6 md:h-6 text-white"/g, 'className="w-5 h-5 md:w-6 md:h-6 text-primary"');

// Background boxes & specific colored themes
content = content.replace(/bg-\[#ddfc12\]\/10/g, 'bg-primary/10');
content = content.replace(/border-\[#ddfc12\]/g, 'border-primary/30');
content = content.replace(/bg-orange-50/g, 'bg-orange-900/20');
content = content.replace(/border-orange-400/g, 'border-orange-500/30');
content = content.replace(/bg-blue-50/g, 'bg-blue-900/20');
content = content.replace(/border-blue-200/g, 'border-blue-500/30');
content = content.replace(/bg-white border-2/g, 'bg-white/5 border-2');
content = content.replace(/bg-white border/g, 'bg-[#1a1a1a] border');
content = content.replace(/border-gray-200/g, 'border-white/10');
content = content.replace(/bg-gray-50/g, 'bg-[#1a1a1a]');
content = content.replace(/bg-green-100/g, 'bg-green-900/30');
content = content.replace(/bg-blue-100/g, 'bg-blue-900/30');
content = content.replace(/text-green-700/g, 'text-green-400');
content = content.replace(/text-blue-700/g, 'text-blue-400');
content = content.replace(/border-blue-400/g, 'border-blue-500/30');
content = content.replace(/bg-green-50/g, 'bg-green-900/20');
content = content.replace(/border-green-200/g, 'border-green-500/30');
content = content.replace(/text-green-600/g, 'text-green-400');
content = content.replace(/bg-purple-50/g, 'bg-purple-900/20');
content = content.replace(/border-purple-200/g, 'border-purple-500/30');
content = content.replace(/text-purple-600/g, 'text-purple-400');

// Fix primary dots and bullet points
content = content.replace(/text-\[#ddfc12\]/g, 'text-primary');
content = content.replace(/bg-\[#ddfc12\]/g, 'bg-primary/20'); // For bullet backgrounds like Contact logo

// Contact Card tweaks
content = content.replace('bg-primary/20 flex items-center justify-center mr-4', 'bg-primary/20 border border-primary/30 flex items-center justify-center mr-4');

fs.writeFileSync('src/routes/policy.tsx', content);
