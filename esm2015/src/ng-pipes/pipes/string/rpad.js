import { Pipe } from '@angular/core';
import { isString } from '../helpers/helpers';
export class RightPadPipe {
    transform(str, length = 1, padCharacter = ' ') {
        if (!isString(str) || str.length >= length) {
            return str;
        }
        while (str.length < length) {
            str = str + padCharacter;
        }
        return str;
    }
}
RightPadPipe.decorators = [
    { type: Pipe, args: [{ name: 'rpad' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnBhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1waXBlcy9waXBlcy9zdHJpbmcvcnBhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHOUMsTUFBTSxPQUFPLFlBQVk7SUFDdkIsU0FBUyxDQUFDLEdBQVcsRUFBRSxTQUFpQixDQUFDLEVBQUUsZUFBdUIsR0FBRztRQUNuRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksTUFBTSxFQUFFO1lBQzFDLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFDRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFO1lBQzFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDO1NBQzFCO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7WUFYRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycyc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdycGFkJyB9KVxyXG5leHBvcnQgY2xhc3MgUmlnaHRQYWRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHN0cjogc3RyaW5nLCBsZW5ndGg6IG51bWJlciA9IDEsIHBhZENoYXJhY3Rlcjogc3RyaW5nID0gJyAnKTogc3RyaW5nIHtcclxuICAgIGlmICghaXNTdHJpbmcoc3RyKSB8fCBzdHIubGVuZ3RoID49IGxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG4gICAgd2hpbGUgKHN0ci5sZW5ndGggPCBsZW5ndGgpIHtcclxuICAgICAgc3RyID0gc3RyICsgcGFkQ2hhcmFjdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdHI7XHJcbiAgfVxyXG59XHJcbiJdfQ==