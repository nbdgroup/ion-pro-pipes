import { Pipe } from '@angular/core';
export class IsEqualToPipe {
    transform(input, other) {
        // tslint:disable-next-line:triple-equals
        return input == other;
    }
}
IsEqualToPipe.decorators = [
    { type: Pipe, args: [{ name: 'isEqualTo' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtZXF1YWwtdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbmctcGlwZXMvcGlwZXMvYm9vbGVhbi9pcy1lcXVhbC10by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUdwRCxNQUFNLE9BQU8sYUFBYTtJQUN4QixTQUFTLENBQUMsS0FBVSxFQUFFLEtBQVU7UUFDOUIseUNBQXlDO1FBQ3pDLE9BQU8sS0FBSyxJQUFJLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7WUFMRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnaXNFcXVhbFRvJyB9KVxyXG5leHBvcnQgY2xhc3MgSXNFcXVhbFRvUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShpbnB1dDogYW55LCBvdGhlcjogYW55KTogYm9vbGVhbiB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xyXG4gICAgcmV0dXJuIGlucHV0ID09IG90aGVyO1xyXG4gIH1cclxufVxyXG4iXX0=