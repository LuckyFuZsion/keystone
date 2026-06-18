import sharp from "sharp"
import fs from "fs"
import path from "path"

const imagesDir = path.join(process.cwd(), "public", "images")
const files = fs.readdirSync(imagesDir).filter((f) => /\.(png|jpe?g)$/i.test(f))

for (const file of files) {
  const input = path.join(imagesDir, file)
  const base = file.replace(/\.(png|jpe?g)$/i, "")
  const output = path.join(imagesDir, `${base}.webp`)

  const image = sharp(input)
  const meta = await image.metadata()
  const width = meta.width && meta.width > 1400 ? 1400 : meta.width

  await image
    .resize(width, null, { withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(output)

  const before = fs.statSync(input).size
  const after = fs.statSync(output).size
  console.log(`${file} -> ${base}.webp (${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB)`)
}
