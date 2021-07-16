import { Pipe } from '@angular/core';
export class IsNotEqualToPipe {
    transform(input, other) {
        // tslint:disable-next-line:triple-equals
        return input != other;
    }
}
IsNotEqualToPipe.decorators = [
    { type: Pipe, args: [{ name: 'isNotEqualTo' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbm90LWVxdWFsLXRvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL25nLXBpcGVzL3BpcGVzL2Jvb2xlYW4vaXMtbm90LWVxdWFsLXRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BELE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsU0FBUyxDQUFDLEtBQVUsRUFBRSxLQUFVO1FBQzlCLHlDQUF5QztRQUN6QyxPQUFPLEtBQUssSUFBSSxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7O1lBTEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2lzTm90RXF1YWxUbycgfSlcclxuZXhwb3J0IGNsYXNzIElzTm90RXF1YWxUb1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSwgb3RoZXI6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcclxuICAgIHJldHVybiBpbnB1dCAhPSBvdGhlcjtcclxuICB9XHJcbn1cclxuIl19