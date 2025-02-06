export default function (self) {
  Object.getOwnPropertyNames(self.constructor.prototype)
    .slice(1)
    .forEach(p => (self[p] = self[p].bind(self)))
}
