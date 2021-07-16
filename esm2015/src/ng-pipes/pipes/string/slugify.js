import { Pipe } from '@angular/core';
import { isString } from '../helpers/helpers';
export class SlugifyPipe {
    transform(str) {
        return isString(str)
            ? str
                .toLowerCase()
                .trim()
                .replace(/[^\w\-]+/g, ' ')
                .replace(/\s+/g, '-')
            : str;
    }
}
SlugifyPipe.decorators = [
    { type: Pipe, args: [{ name: 'slugify' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Z2lmeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1waXBlcy9waXBlcy9zdHJpbmcvc2x1Z2lmeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHOUMsTUFBTSxPQUFPLFdBQVc7SUFDdEIsU0FBUyxDQUFDLEdBQVc7UUFDbkIsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxHQUFHO2lCQUNBLFdBQVcsRUFBRTtpQkFDYixJQUFJLEVBQUU7aUJBQ04sT0FBTyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUM7aUJBQ3pCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDVixDQUFDOzs7WUFWRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycyc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdzbHVnaWZ5JyB9KVxyXG5leHBvcnQgY2xhc3MgU2x1Z2lmeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGlzU3RyaW5nKHN0cilcclxuICAgICAgPyBzdHJcclxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgICAucmVwbGFjZSgvW15cXHdcXC1dKy9nLCAnICcpXHJcbiAgICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCAnLScpXHJcbiAgICAgIDogc3RyO1xyXG4gIH1cclxufVxyXG4iXX0=