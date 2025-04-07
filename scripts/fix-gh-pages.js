const fs = require('fs');
const path = require('path');


const outDir = path.join(__dirname, '..', 'out');


const fixPaths = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  

  const updatedContent = fileContent.replace(/\/_next\//g, '/my-portfolio/next_static/');
  fs.writeFileSync(filePath, updatedContent);
};


fs.readdirSync(outDir).forEach((file) => {
  const filePath = path.join(outDir, file);

  if (fs.lstatSync(filePath).isDirectory()) {
    fs.readdirSync(filePath).forEach((subfile) => {
      if (subfile.endsWith('.html')) {
        fixPaths(path.join(filePath, subfile));
      }
    });
  } else if (file.endsWith('.html')) {
    fixPaths(filePath);
  }
});

console.log('Paths have been fixed!');
