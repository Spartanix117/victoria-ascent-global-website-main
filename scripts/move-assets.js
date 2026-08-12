const fs = require('fs')
const path = require('path')

// Source images folder inside the legacy landing page
const srcRoot = path.join(__dirname, '..', 'Landing Page', 'victoria-ascent-global-website-main', 'img')
const destRoot = path.join(__dirname, '..', 'public', 'assets')

function sanitizeName(name){
  // replace spaces with hyphens and remove problematic chars
  return name.replace(/\s+/g, '-')
             .replace(/[^a-zA-Z0-9-_.]/g, '')
}

async function copyRecursive(src, dest){
  const stat = await fs.promises.stat(src)
  if(stat.isDirectory()){
    await fs.promises.mkdir(dest, { recursive: true })
    const items = await fs.promises.readdir(src)
    for(const item of items){
      const srcPath = path.join(src, item)
      const destName = sanitizeName(item)
      const destPath = path.join(dest, destName)
      await copyRecursive(srcPath, destPath)
    }
  } else {
    // copy file
    await fs.promises.mkdir(path.dirname(dest), { recursive: true })
    await fs.promises.copyFile(src, dest)
    console.log(`copied ${src} -> ${dest}`)
  }
}

async function main(){
  try{
    if(!fs.existsSync(srcRoot)){
      console.warn('Source images folder not found:', srcRoot)
      return
    }
    await copyRecursive(srcRoot, destRoot)
    console.log('Assets copied to public/assets')
  }catch(err){
    console.error(err)
    process.exit(1)
  }
}

main()
