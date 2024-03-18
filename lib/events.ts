import { z } from 'zod'

const eventSchema = z.object({
  name: z.enum(['copy_card_number']),
  properties: z.record(z.union([z.string(), z.number(), z.boolean(), z.null()])).optional()
})

export type Event = z.infer<typeof eventSchema>

// export function trackEvent(event: Event): void {
//   const event = eventSchema.parse(input)
//   if (event) {
//     va.track(event.name, event.properties)
//   }
// }
