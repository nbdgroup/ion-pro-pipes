import { Pipe } from '@angular/core';
export class IsNotIdenticalToPipe {
    transform(input, other) {
        return input !== other;
    }
}
IsNotIdenticalToPipe.decorators = [
    { type: Pipe, args: [{ name: 'isNotIdenticalTo' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbm90LWlkZW50aWNhbC10by5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1waXBlcy9waXBlcy9ib29sZWFuL2lzLW5vdC1pZGVudGljYWwtdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFHcEQsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixTQUFTLENBQUMsS0FBVSxFQUFFLEtBQVU7UUFDOUIsT0FBTyxLQUFLLEtBQUssS0FBSyxDQUFDO0lBQ3pCLENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2lzTm90SWRlbnRpY2FsVG8nIH0pXHJcbmV4cG9ydCBjbGFzcyBJc05vdElkZW50aWNhbFRvUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShpbnB1dDogYW55LCBvdGhlcjogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaW5wdXQgIT09IG90aGVyO1xyXG4gIH1cclxufVxyXG4iXX0=