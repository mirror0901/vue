// translate router.meta.title, be used in breadcrumb siderbar tagsview
export function generateTitle (title) {
  const hasKey = this.$te('route.' + title)
  // $t :this method from vue-i18n,inject in @/lang/index.js
  const translatedTitle = this.$t('route.' + title)

  if (hasKey) {
    return translatedTitle
  }
  return title
}