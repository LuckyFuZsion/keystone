import sharp from "sharp"
import fs from "fs"
import path from "path"

const sourcesDir = path.join(process.cwd(), "assets", "image-sources")
const outputDir = path.join(process.cwd(), "public", "images")

if (!fs.existsSync(sourcesDir)) {
  console.log("No assets/image-sources folder found. Add PNG/JPEG sources there to generate WebP files.")
  process.exit(0)
}

const files = fs.readdirSync(sourcesDir).filter((f) => /\.(png|jpe?g)$/i.test(f))

if (files.length === 0) {
  console.log("No source images in assets/image-sources.")
  process.exit(0)
}

for (const file of files) {
  const input = path.join(sourcesDir, file)
  const base = file.replace(/\.(png|jpe?g)$/i, "")
  const output = path.join(outputDir, `${base}.webp`)

  const image = sharp(input)
  const meta = await image.metadata()
  const width = meta.width && meta.width > 1400 ? 1400 : meta.width

  await image
    .resize(width, null, { withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(output)

  const before = fs.statSync(input).size
  const after = fs.statSync(output).size
  console.log(`${file} -> public/images/${base}.webp (${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB)`)
}
