import { readFile, writeFile } from 'node:fs/promises'

const manifestFiles = [
  'manifest.json',
  'vault/.obsidian/themes/GitHub Flavored Markdown/manifest.json',
]

main()

async function main() {
  const version = await readPackageVersion()

  await Promise.all(manifestFiles.map(file => updateManifestVersion(file, version)))

  console.log(`Updated manifest versions to ${version}`)
}

async function readPackageVersion() {
  const packageJson = await readJson('package.json')
  return packageJson.version
}

async function updateManifestVersion(file, version) {
  const manifest = await readJson(file)
  manifest.version = version

  await writeJson(file, manifest)
}

async function readJson(file) {
  return JSON.parse(await readFile(file, 'utf8'))
}

async function writeJson(file, content) {
  await writeFile(file, `${JSON.stringify(content, null, 2)}\n`)
}
