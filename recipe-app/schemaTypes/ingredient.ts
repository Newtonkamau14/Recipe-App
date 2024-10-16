import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ingredient',
  title: 'ingredient',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      title: 'Id',
      type: 'number',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'ingredient',
      title: 'ingredient',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ]
})
