import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'instruction',
  title: 'Instruction',
  type: 'object',
  fields: [
    defineField({
      name: 'step',
      title: 'Step',
      type: 'number',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'instruction',
      title: 'Instruction',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ]
})
