export default {
  bind(el, {value}) {
    M.Tooltip.init(el, {html: value})
  }
}