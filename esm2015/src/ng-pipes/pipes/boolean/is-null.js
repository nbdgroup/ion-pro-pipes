import { Pipe } from '@angular/core';
export class IsNullPipe {
    transform(input) {
        return input === null;
    }
}
IsNullPipe.decorators = [
    { type: Pipe, args: [{ name: 'isNull' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbnVsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1waXBlcy9waXBlcy9ib29sZWFuL2lzLW51bGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFHcEQsTUFBTSxPQUFPLFVBQVU7SUFDckIsU0FBUyxDQUFDLEtBQVU7UUFDbEIsT0FBTyxLQUFLLEtBQUssSUFBSSxDQUFDO0lBQ3hCLENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdpc051bGwnIH0pXHJcbmV4cG9ydCBjbGFzcyBJc051bGxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpbnB1dCA9PT0gbnVsbDtcclxuICB9XHJcbn1cclxuIl19