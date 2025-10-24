// Centralized SEO utilities for setting per-page meta tags
const ORIGIN = 'https://www.elma.ltd'

function ensureTag(selector, create) {
  let el = document.querySelector(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  return el
}

export function setCanonical(path = '/') {
  const href = `${ORIGIN}${path.replace(/^\//, '/')}`
  const link = ensureTag('link[rel="canonical"]', () => {
    const l = document.createElement('link')
    l.setAttribute('rel', 'canonical')
    return l
  })
  link.setAttribute('href', href)
}

export function setPageSEO({ title, description, path = '/', image = '/images/elma-logo.png' }) {
  if (typeof document === 'undefined') return

  const pageUrl = `${ORIGIN}${path.replace(/^\//, '/')}`
  const imageUrl = image.startsWith('http') ? image : `${ORIGIN}${image}`

  document.title = title

  const metaName = (name) => ensureTag(`meta[name="${name}"]`, () => {
    const m = document.createElement('meta')
    m.setAttribute('name', name)
    return m
  })

  const metaProp = (prop) => ensureTag(`meta[property="${prop}"]`, () => {
    const m = document.createElement('meta')
    m.setAttribute('property', prop)
    return m
  })

  metaName('description').setAttribute('content', description)

  metaProp('og:title').setAttribute('content', title)
  metaProp('og:description').setAttribute('content', description)
  metaProp('og:type').setAttribute('content', 'website')
  metaProp('og:url').setAttribute('content', pageUrl)
  metaProp('og:image').setAttribute('content', imageUrl)

  metaName('twitter:card').setAttribute('content', 'summary_large_image')
  metaName('twitter:title').setAttribute('content', title)
  metaName('twitter:description').setAttribute('content', description)
  metaName('twitter:image').setAttribute('content', imageUrl)

  setCanonical(path)
}