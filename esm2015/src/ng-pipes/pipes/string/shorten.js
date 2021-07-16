import { Pipe } from '@angular/core';
import { isString } from '../helpers/helpers';
export class ShortenPipe {
    transform(text, length = 0, suffix = '', wordBreak = true) {
        if (!isString(text)) {
            return text;
        }
        if (text.length > length) {
            if (wordBreak) {
                return text.slice(0, length) + suffix;
            }
            // tslint:disable-next-line:no-bitwise
            if (!!~text.indexOf(' ', length)) {
                return text.slice(0, text.indexOf(' ', length)) + suffix;
            }
        }
        return text;
    }
}
ShortenPipe.decorators = [
    { type: Pipe, args: [{ name: 'shorten' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnRlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1waXBlcy9waXBlcy9zdHJpbmcvc2hvcnRlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHOUMsTUFBTSxPQUFPLFdBQVc7SUFJdEIsU0FBUyxDQUFDLElBQVMsRUFBRSxTQUFpQixDQUFDLEVBQUUsU0FBaUIsRUFBRSxFQUFFLFlBQXFCLElBQUk7UUFDckYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuQixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRTtZQUN4QixJQUFJLFNBQVMsRUFBRTtnQkFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQzthQUN2QztZQUVELHNDQUFzQztZQUN0QyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUNoQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQzFEO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OztZQXRCRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycyc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdzaG9ydGVuJyB9KVxyXG5leHBvcnQgY2xhc3MgU2hvcnRlblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oaW5wdXQ6IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyLCBzdWZmaXg/OiBzdHJpbmcsIHdvcmRCcmVhaz86IGJvb2xlYW4pOiBzdHJpbmc7XHJcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnksIGxlbmd0aD86IG51bWJlciwgc3VmZml4Pzogc3RyaW5nLCB3b3JkQnJlYWs/OiBib29sZWFuKTogYW55O1xyXG5cclxuICB0cmFuc2Zvcm0odGV4dDogYW55LCBsZW5ndGg6IG51bWJlciA9IDAsIHN1ZmZpeDogc3RyaW5nID0gJycsIHdvcmRCcmVhazogYm9vbGVhbiA9IHRydWUpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFpc1N0cmluZyh0ZXh0KSkge1xyXG4gICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGV4dC5sZW5ndGggPiBsZW5ndGgpIHtcclxuICAgICAgaWYgKHdvcmRCcmVhaykge1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnNsaWNlKDAsIGxlbmd0aCkgKyBzdWZmaXg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXHJcbiAgICAgIGlmICghIX50ZXh0LmluZGV4T2YoJyAnLCBsZW5ndGgpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQuc2xpY2UoMCwgdGV4dC5pbmRleE9mKCcgJywgbGVuZ3RoKSkgKyBzdWZmaXg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dDtcclxuICB9XHJcbn1cclxuIl19