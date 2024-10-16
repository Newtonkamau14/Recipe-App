import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'number',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'serving',
      title: 'Serving',
      type: 'number',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{type: 'ingredient'}],
    }),
    defineField({
      name: 'instructions',
      title: 'Instructions',
      type: 'array',
      of: [{type: 'instruction'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'poster',
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: selection.media,
      }
    },
  },
})
