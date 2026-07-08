export default {
  name: 'oemService',
  title: 'OEM Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'capabilities',
      title: 'Capabilities',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'stepTitle', title: 'Step Title', type: 'string' },
            { name: 'stepDescription', title: 'Step Description', type: 'text' },
          ],
        },
      ],
    },
  ],
};
