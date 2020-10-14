import { Publisher, OrderCreatedEvent, Subjects } from '@kxticketing/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
