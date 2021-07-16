import { Pipe } from '@angular/core';
export class IsLessThanPipe {
    transform(input, other) {
        return input < other;
    }
}
IsLessThanPipe.decorators = [
    { type: Pipe, args: [{ name: 'isLessThan' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbGVzcy10aGFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL25nLXBpcGVzL3BpcGVzL2Jvb2xlYW4vaXMtbGVzcy10aGFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BELE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFNBQVMsQ0FBQyxLQUFhLEVBQUUsS0FBYTtRQUNwQyxPQUFPLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2lzTGVzc1RoYW4nIH0pXHJcbmV4cG9ydCBjbGFzcyBJc0xlc3NUaGFuUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShpbnB1dDogbnVtYmVyLCBvdGhlcjogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaW5wdXQgPCBvdGhlcjtcclxuICB9XHJcbn1cclxuIl19