import { Pipe } from '@angular/core';
import { GroupByPipe } from './group-by';
// tslint:disable use-pipe-transform-interface
export class GroupByImpurePipe extends GroupByPipe {
}
GroupByImpurePipe.decorators = [
    { type: Pipe, args: [{ name: 'groupByImpure', pure: false },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtYnktaW1wdXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL25nLXBpcGVzL3BpcGVzL2FycmF5L2dyb3VwLWJ5LWltcHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFekMsOENBQThDO0FBRTlDLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxXQUFXOzs7WUFEakQsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHcm91cEJ5UGlwZSB9IGZyb20gJy4vZ3JvdXAtYnknO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUgdXNlLXBpcGUtdHJhbnNmb3JtLWludGVyZmFjZVxyXG5AUGlwZSh7IG5hbWU6ICdncm91cEJ5SW1wdXJlJywgcHVyZTogZmFsc2UgfSlcclxuZXhwb3J0IGNsYXNzIEdyb3VwQnlJbXB1cmVQaXBlIGV4dGVuZHMgR3JvdXBCeVBpcGUge31cclxuIl19