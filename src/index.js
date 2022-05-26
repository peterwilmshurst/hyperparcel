import { h, text, app } from 'hyperapp'
import './scss/style.scss'

app({
  view: () => h('main', {}, [
    h('h1', {}, text('Hyper Parcel Bootstrap')),
  ]),
  node: document.getElementById('app'),
})
