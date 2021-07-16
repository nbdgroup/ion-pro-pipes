import { Pipe } from '@angular/core';
import { isString } from '../helpers/helpers';
export class LeftPadPipe {
    transform(str, length, padCharacter = ' ') {
        if (!isString(str) || str.length >= length) {
            return str;
        }
        while (str.length < length) {
            str = padCharacter + str;
        }
        return str;
    }
}
LeftPadPipe.decorators = [
    { type: Pipe, args: [{ name: 'lpad' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHBhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1waXBlcy9waXBlcy9zdHJpbmcvbHBhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHOUMsTUFBTSxPQUFPLFdBQVc7SUFDdEIsU0FBUyxDQUFDLEdBQVcsRUFBRSxNQUFjLEVBQUUsZUFBdUIsR0FBRztRQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksTUFBTSxFQUFFO1lBQzFDLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFDRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFO1lBQzFCLEdBQUcsR0FBRyxZQUFZLEdBQUcsR0FBRyxDQUFDO1NBQzFCO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7WUFYRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycyc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdscGFkJyB9KVxyXG5leHBvcnQgY2xhc3MgTGVmdFBhZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oc3RyOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyLCBwYWRDaGFyYWN0ZXI6IHN0cmluZyA9ICcgJyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIWlzU3RyaW5nKHN0cikgfHwgc3RyLmxlbmd0aCA+PSBsZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuICAgIHdoaWxlIChzdHIubGVuZ3RoIDwgbGVuZ3RoKSB7XHJcbiAgICAgIHN0ciA9IHBhZENoYXJhY3RlciArIHN0cjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH1cclxufVxyXG4iXX0=