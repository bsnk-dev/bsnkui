export default (slots: any) => {
  const hasSlot = (name: string) => {
    if (!slots) {
      console.info('useHasSlot: slots is undefined')
    }
    return !!slots[name]
  }

  return {
    hasSlot
  }
}
