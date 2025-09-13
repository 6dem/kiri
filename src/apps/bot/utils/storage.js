const userForms = new Map()

export const storage = {
  get(id) {
    return userForms.get(id)
  },
  set(id, data) {
    userForms.set(id, data)
  },
  delete(id) {
    userForms.delete(id)
  }
}
