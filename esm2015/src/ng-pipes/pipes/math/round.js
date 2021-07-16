import { Pipe } from '@angular/core';
import { applyPrecision } from '../helpers/helpers';
export class RoundPipe {
    transform(num, precision = 0) {
        return applyPrecision(num, precision);
    }
}
RoundPipe.decorators = [
    { type: Pipe, args: [{ name: 'round' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91bmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbmctcGlwZXMvcGlwZXMvbWF0aC9yb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHcEQsTUFBTSxPQUFPLFNBQVM7SUFDcEIsU0FBUyxDQUFDLEdBQVcsRUFBRSxZQUFvQixDQUFDO1FBQzFDLE9BQU8sY0FBYyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7WUFKRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBhcHBseVByZWNpc2lvbiB9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycyc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdyb3VuZCcgfSlcclxuZXhwb3J0IGNsYXNzIFJvdW5kUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShudW06IG51bWJlciwgcHJlY2lzaW9uOiBudW1iZXIgPSAwKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBhcHBseVByZWNpc2lvbihudW0sIHByZWNpc2lvbik7XHJcbiAgfVxyXG59XHJcbiJdfQ==