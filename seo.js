const TEST_TITLE = 'Title will be injected'

const TEST_DESCTIPTION = 'Desc will be injected' 

function setPageTitle () {
  document.title = TEST_TITLE
}

function setPageDescription () {
  const descEl = document.querySelector('meta[name="description"]')
  descEl && descEl.setAttribute('content', TEST_DESCTIPTION)
}

function setPageLanguage () {
  document.documentElement.lang = 'en'
}

setPageLanguage()
setPageTitle()
setPageDescription()
