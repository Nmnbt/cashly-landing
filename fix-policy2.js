const fs = require('fs');
let content = fs.readFileSync('src/routes/policy.tsx', 'utf8');

// Global replacement of specific hex code #ddfc12 with primary classes
content = content.replace(/bg-\[#ddfc12\]/g, 'bg-primary');
content = content.replace(/border-\[#ddfc12\]/g, 'border-primary');
content = content.replace(/text-\[#ddfc12\]/g, 'text-primary');

content = content.replace(/bg-gradient-to-r from-\[#ddfc12\] via-\[#e8ff3a\] to-\[#ddfc12\] shadow-lg/g, 'bg-[#131313] border-b border-primary/20 shadow-[0_0_30px_rgba(221,252,18,0.05)]');

content = content.replace(/bg-gradient-to-br from-\[#ddfc12\] to-\[#c5e010\]/g, 'bg-primary/20 border border-primary/30');

content = content.replace(/from-\[#ddfc12\]\/20 to-\[#ddfc12\]\/5/g, 'from-primary/20 to-primary/5');

content = content.replace(/bg-white border-2/g, 'bg-white/5 border-2');
content = content.replace(/bg-white p-4/g, 'bg-[#1a1a1a] p-4');
content = content.replace(/bg-white border border-gray-200/g, 'bg-[#1a1a1a] border border-white/10');

// General text color overrides left behind
content = content.replace(/text-gray-900/g, 'text-white');
content = content.replace(/text-gray-800/g, 'text-white/90');
content = content.replace(/text-gray-700/g, 'text-white/70');
content = content.replace(/text-gray-600/g, 'text-white/60');
content = content.replace(/border-gray-200/g, 'border-white/10');
content = content.replace(/ring-white\/50/g, 'ring-primary/20');
content = content.replace(/shadow-xl mb-6 ring-4/g, 'shadow-[0_0_15px_rgba(221,252,18,0.3)] mb-6 ring-2');


fs.writeFileSync('src/routes/policy.tsx', content);
