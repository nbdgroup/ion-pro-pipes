import { Pipe } from '@angular/core';
import { isString } from '../helpers/helpers';
export class RepeatPipe {
    transform(str, n = 1, separator = '') {
        if (n <= 0) {
            throw new RangeError();
        }
        return n === 1 ? str : this.repeat(str, n - 1, separator);
    }
    repeat(str, n, separator) {
        return isString(str) ? (n === 0 ? str : str + separator + this.repeat(str, n - 1, separator)) : str;
    }
}
RepeatPipe.decorators = [
    { type: Pipe, args: [{ name: 'repeat' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwZWF0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL25nLXBpcGVzL3BpcGVzL3N0cmluZy9yZXBlYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzlDLE1BQU0sT0FBTyxVQUFVO0lBQ3JCLFNBQVMsQ0FBQyxHQUFXLEVBQUUsSUFBWSxDQUFDLEVBQUUsWUFBb0IsRUFBRTtRQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVixNQUFNLElBQUksVUFBVSxFQUFFLENBQUM7U0FDeEI7UUFFRCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU8sTUFBTSxDQUFDLEdBQVcsRUFBRSxDQUFTLEVBQUUsU0FBaUI7UUFDdEQsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3RHLENBQUM7OztZQVpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vaGVscGVycy9oZWxwZXJzJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3JlcGVhdCcgfSlcclxuZXhwb3J0IGNsYXNzIFJlcGVhdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oc3RyOiBzdHJpbmcsIG46IG51bWJlciA9IDEsIHNlcGFyYXRvcjogc3RyaW5nID0gJycpOiBzdHJpbmcge1xyXG4gICAgaWYgKG4gPD0gMCkge1xyXG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuID09PSAxID8gc3RyIDogdGhpcy5yZXBlYXQoc3RyLCBuIC0gMSwgc2VwYXJhdG9yKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVwZWF0KHN0cjogc3RyaW5nLCBuOiBudW1iZXIsIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBpc1N0cmluZyhzdHIpID8gKG4gPT09IDAgPyBzdHIgOiBzdHIgKyBzZXBhcmF0b3IgKyB0aGlzLnJlcGVhdChzdHIsIG4gLSAxLCBzZXBhcmF0b3IpKSA6IHN0cjtcclxuICB9XHJcbn1cclxuIl19