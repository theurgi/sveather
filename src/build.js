import {
  appendFileSync,
  existsSync,
  mkdirSync,
  rmSync,
  writeFileSync,
} from 'fs'
import { cwd } from 'process'
import { join } from 'path'

import { icons as featherIcons } from 'feather-icons'
import pascalcase from 'pascalcase'

import {
  createComponent,
  createIndexEntry,
  createTypeIndexEntry,
} from './templates/index.js'

const ROOT_DIR = cwd()
const DIST_DIR = join(ROOT_DIR, 'dist')
const COMPONENTS_DIR = join(DIST_DIR, 'components')
const TYPES_DIR = join(DIST_DIR, 'types')
const INDEX_PATH = join(COMPONENTS_DIR, 'index.js')
const TYPE_INDEX_PATH = join(TYPES_DIR, 'index.d.ts')

const cleanPreviousBuild = () => {
  if (existsSync(INDEX_PATH)) rmSync(INDEX_PATH)
  if (existsSync(TYPE_INDEX_PATH)) rmSync(TYPE_INDEX_PATH)
  if (existsSync(COMPONENTS_DIR)) rmSync(COMPONENTS_DIR, { recursive: true })
  mkdirSync(COMPONENTS_DIR)
}

const generateComponents = () => {
  Object.entries(featherIcons).forEach(([name, contents]) => {
    const componentName = pascalcase(name)
    const component = createComponent(contents)
    const componentPath = join(COMPONENTS_DIR, `${componentName}.svelte`)
    writeFileSync(componentPath, component)
  })
}

const generateIndex = () => {
  Object.entries(featherIcons).forEach(([name]) => {
    const indexEntry = createIndexEntry(pascalcase(name))
    appendFileSync(INDEX_PATH, indexEntry)
  })
}

const generateTypeIndex = () => {
  const importStatement = `import SveatherProps from './sveather-props'\n\n`
  writeFileSync(TYPE_INDEX_PATH, importStatement)

  Object.entries(featherIcons).forEach(([name]) => {
    const typeIndexEntry = createTypeIndexEntry(pascalcase(name))
    appendFileSync(TYPE_INDEX_PATH, typeIndexEntry)
  })
}

const build = () => {
  cleanPreviousBuild()
  generateComponents()
  generateIndex()
  generateTypeIndex()
}

build()
