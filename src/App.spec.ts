import { mount } from '@vue/test-utils'

import App from './App.vue'

test('uses mounts', async () => {
  const wrapper = mount(App)
  expect(wrapper.html()).toContain('Vue app')
  expect(wrapper.html()).toContain('Count: 0')
})

test('Test click actions', async () => {
  const wrapper = mount(App)

  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('Count: 1')

  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('Count: 2')
})
