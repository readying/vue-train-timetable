import { mount } from 'vue-test-utils'
import VueTrainTimetable from './'

test('it works', () => {
  const wrapper = mount(VueTrainTimetable)
  expect(wrapper.isVueInstance()).toBe(true)
})
